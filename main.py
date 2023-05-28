

from flask import Flask, request
from settings import dbpwd
import mysql.connector as mysql
import json

db = mysql.connect(
    host="localhost",
    user="root",
    password=dbpwd,
    database="dbblog")

print(db)

app = Flask(__name__)


@app.route('/posts', methods=['GET', 'POST'])
def manage_posts():
    if request.method == 'GET':
        return get_all_posts()
    else:
        return add_post()


def get_all_posts():
    query = "SELECT id, title, body, user_id, comment_id, tag_id, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i') AS formatted_created_at, img  from posts"
    cursor = db.cursor()
    cursor.execute(query)
    records = cursor.fetchall()
    cursor.close()
    print(records)


    header = ['id','title', 'body','user_id','comment_id','tag_id','created_at','img']
    data = []
    for r in records:
        data.append(dict(zip(header, r)))
    return json.dumps(data)


def get_post(id):
    query = "SELECT id, title, body, comment_id, tag_id, img, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i') AS formatted_created_at, user_id from posts where id = %s"
    values = (id,)
    cursor = db.cursor()
    cursor.execute(query, values)
    record = cursor.fetchone()
    cursor.close()
    header = ['id', 'title', 'body', 'comment_id', 'tag_id', 'created_at', 'img', 'user_id']
    return json.dumps(dict(zip(header, record)))


def add_post():
    data = request.get_json()
    print(data)
    query = "INSERT INTO posts ( title, body) VALUES (%s, %s)"
    values = (data['title'], data['body'])

    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    new_post_id = cursor.lastrowid
    cursor.close()
    return get_post(new_post_id)

if __name__ == "__main__":
    app.run()
