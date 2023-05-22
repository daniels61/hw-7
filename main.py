

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
    # [(1, 'Herzliya', 95142), (2, 'Tel Aviv', 435855), (3, 'Jerusalem', 874186), (4, 'Bat Yam', 128898), (5, 'Ramat Gan', 153135), (6, 'Eilat', 47800), (7, 'Petah Tikva', 233577), (8, 'Tveriya', 41300)]
    header = ['id', 'title', 'body', 'user_id', 'comment_id', 'tag_id', 'created_at', 'img']
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
    header = ['id', 'name', 'population']
    return json.dumps(dict(zip(header, record)))


def add_post():
    data = request.get_json()
    print(data)
    query = "insert into posts (title, body, img) values (%s, %s, %s)"
    values = (data['title'], data['body'], data['img'])
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    new_post_id = cursor.lastrowid
    cursor.close()
    return get_post(new_post_id)


if __name__ == "__main__":
    app.run()
