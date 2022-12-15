from flask import Flask, render_template
from db import *

app = Flask(__name__)


@app.route('/')
def hello_world():
    days = []
    with db:
        for day in Day.select():
            lessons = [lesson for lesson in Lesson.select().where(Lesson.day_id == day)]
            days.append({
                'name': day.name,
                'name_id': day.name_id,
                'lessons': lessons
            })

    res = render_template('index.html',
                          days=days)
    return res


if __name__ == '__main__':
    app.run()
