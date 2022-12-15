from db import *

with db:
    db.create_tables([Day, Lesson])
with db:
    days = [
        {"name": 'Понедельник', 'name_id': 'mon'},
        {"name": 'Вторник', 'name_id': 'tue'},
        {"name": 'Среда', 'name_id': 'wed'},
        {"name": 'Четверг', 'name_id': 'thu'},
        {"name": 'Пятница', 'name_id': 'fri'},
        {"name": 'Суббота', 'name_id': 'sat'},
    ]
    Day.insert_many(days).execute()
with db:
    lessons = {
        'Понедельник': [
            {
                'time': '8:10',
                'name': "Машинное обучение (лекция)",
                'audience': '124[2]',
            },
            {
                'time': '9:40',
                'name': "Груп. динамика и коммуник. в проф.практике прогр. инж",
                'audience': '510[3]',
            },
            {
                'time': '13:10',
                'name': "Машинное обучение (практика)",
                'audience': '504[3]',
            },
            {
                'time': '15:00',
                'name': "Обеспечение качества и тестирование",
                'audience': '504[3]',
            },
        ],
        "Вторник": [
            {
                'time': '8:10',
                'name': "Обеспечение качества и тестирование",
                'audience': '102[3]',
            },
            {
                'time': '9:40',
                'name': 'НИС "Разработка мобильных приложений"',
                'audience': '504[3]',
            },
            {
                'time': '16:40',
                'name': 'НИС "Аналитика в IoT"',
                'audience': 'дист.',
            },
        ]
    }
    for i in days:
        print(i['name'])
        try:
            day = Day.get(Day.name == i['name'])
        except:
            print(i['name'] + ' не найден')
        if i['name'] in lessons:
            for v in lessons[i['name']]:
                v['day_id'] = day
            Lesson.insert_many(lessons[i['name']]).execute()

print('create done')
