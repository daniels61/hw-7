

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
    query = "select id, title, body,user_id,comment_id, tag_id, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') AS formatted_created_at, img  from posts"
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
    query = "select id, title, body,user_id,comment_id, tag_id, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') AS formatted_created_at, img from posts where id = %s"
    values = (id,)
    cursor = db.cursor()
    cursor.execute(query, values)
    record = cursor.fetchone()
    cursor.close()
    header = ['id', 'title', 'body', 'user_id', 'comment_id', 'tag_id', 'created_at', 'img']
    return json.dumps(dict(zip(header, record)))


def add_post():
    data = request.get_json()
    print(data)
    query = "INSERT INTO posts (title, body, img, user_id, comment_id, tag_id, created_at) VALUES (%s, %s, %s, %s, %s, %s, %s)"

    values = (data['title'], data['body'], data['img'], data['user_id'],data['comment_id'],data['tag_id'],data['created_at'])

    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    new_post_id = cursor.lastrowid
    cursor.close()
    return get_post(new_post_id)

if __name__ == "__main__":
    app.run()
