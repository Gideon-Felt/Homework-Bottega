from flask import Flask, request, jsonify, render_template
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
    year = db.Column(db.String(144), unique=False)
    rating = db.Column(db.String(144), unique=False)
    genre = db.Column(db.String(144), unique=False)
    starring = db.Column(db.String(144), unique=False)
    


    def __init__(self, title, year, rating, genre, starring):
        self.title = title
        self.year = year
        self.rating = rating
        self.genre = genre
        self.starring = starring

class MovieSchema(ma.Schema):
    class Meta:
        fields = ('title', 'year', 'rating', 'genre', 'starring')

movie_schema = MovieSchema()
movies_schema = MovieSchema(many=True)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/all_movies')
def all_entries():
    return render_template('all_movies.html')


# Endpoint to create a new Movie
@app.route('/add_movie', methods=["POST"])
def add_movie():
    if request.method == 'POST':
        title = request.form['title']
        year = request.form['year']
        rating = request.form['rating']
        genre = request.form['genre']
        starring = request.form['starring']

        new_movie = Movie(title, year, rating, genre, starring)

        db.session.add(new_movie)
        db.session.commit()

        return render_template('message_sent.html')
    return home()

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
    year = request.json['year']
    rating = request.json['rating']
    genre = request.json['genre']
    starring = request.json['starring']

    movie.title = title
    movie.year = year
    movie.rating = rating
    movie.genre = genre
    movie.starring = starring

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