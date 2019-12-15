from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'app.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), unique=False)
    rating = db.Column(db.String(144), unique=False)
    year = db.Column(db.String(144), unique=False)
    producer = db.Column(db.String(144), unique=False)
    director = db.Column(db.String(144), unique=False)


    def __init__(self, title, rating, year, producer, director):
        self.title = title
        self.rating = rating
        self.year = year
        self.producer = producer
        self.director = director

class MovieSchema(ma.Schema):
    class Meta:
        fields = ('title', 'rating', 'year', 'producer', 'director')

movie_schema = MovieSchema()
movies_schema = MovieSchema(many=True)

# Endpoint to create a new Movie
@app.route('/movie', methods=["POST"])
def add_movie():
    title = request.json['title']
    rating = request.json['rating']
    year = request.json['year']
    producer = request.json['producer']
    director = request.json['director']

    new_movie = Movie(title, rating, year, producer, director)

    db.session.add(new_movie)
    db.session.commit()

    movie = Movie.query.get(new_movie.id)

    return movie_schema.jsonify(movie)


# Endpoint to query all movies
@app.route('/movies', methods=["GET"])
def get_movies():
    all_movies = Movie.query.all()
    result = movies_schema.dump(all_movies)
    return jsonify(result)

# SHOW ROUTE
# Endpoint for querying a single guide
@app.route('/movie/<id>', methods=["GET"])
def get_movie(id):
    movie = Movie.query.get(id)
    return movie_schema.jsonify(movie)

# Endpoint for updateing a guide
@app.route("/movie/<id>", methods=["PUT"])
def movie_update(id):
    movie = Movie.query.get(id)
    title = request.json['title']
    rating = request.json['rating']
    year = request.json['year']
    producer = request.json['producer']
    director = request.json['director']

    movie.title = title
    movie.rating = rating
    movie.year = year
    movie.producer = producer
    movie.director = director

    db.session.commit()
    return movie_schema.jsonify(movie)

# Endpoint for deleting a record
@app.route("/movie/<id>", methods=['DELETE'])
def movie_delete(id):
    movie = Movie.query.get(id)
    db.session.delete(movie)
    db.session.commit()
    return "guide was successfully deleted"


if __name__ == '__main__':
    app.run(debug=True)