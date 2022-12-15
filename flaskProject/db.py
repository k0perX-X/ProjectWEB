from peewee import *

db = SqliteDatabase('db/sqlite.db')


class BaseModel(Model):
    id = PrimaryKeyField(unique=True)

    class Meta:
        database = db


class Day(BaseModel):
    name = TextField(unique=True)
    name_id = TextField(unique=True)


class Lesson(BaseModel):
    name = TextField()
    time = TextField()
    audience = TextField()
    day_id = ForeignKeyField(Day)
