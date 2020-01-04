from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(basedir, "app.sqlite")

db = SQLAlchemy(app)
ma = Marshmallow(app)



class JournalEntry(db.Model):
    __tablename__ = "journals"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(25), nullable=True)
    content = db.Column(db.String(500), nullable=False)

    def __init__(self, title, content):
        self.title = title
        self.content = content

class JournalSchema(ma.Schema):
    class Meta:
        fields = ("id", "title", "content")

journal_schema = JournalSchema()
journals_schema = JournalSchema(many=True)

# CRUD
# GET
@app.route("/journals", methods=["GET"])
def get_journals():
    all_journals = JournalEntry.query.all()
    result = journals_schema.dump(all_journals)
    return jsonify(result)

# GET by ID
# POST
@app.route("/journal", methods=["POST"])
def add_journal():
    title = request.json["title"]
    content = request.json["content"]

    new_journal = JournalEntry(title, content)

    db.session.add(new_journal)
    db.session.commit()
    
    # Query to return
    journal = JournalEntry.query.get(new_journal.id)
    return journal_schema.jsonify(journal)

# PUT/PATCH by ID
@app.route("/journal/<id>", methods=["PATCH"])
def update_journal(id):
    journal = JournalEntry.query.get(id)

    new_content = request.json["content"]

    journal.content = new_content

    db.session.commit()
    return journal_schema.jsonify(journal)

# DELETE
@app.route("/journal/<id>", methods=["DELETE"])
def delete_journal(id):
    journal = JournalEntry.query.get(id)
    db.session.delete(journal)
    db.session.commit()
    return  jsonify("Removed journal record")


if __name__ == "__main__":
    app.debug = True
    app.run()