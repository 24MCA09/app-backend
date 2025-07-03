const Movie = require('../models/movieModel');

const createMovie = async (req, res) => {
  try {
    const { title, image, genre, duration, rating, language, director, description, videourl, trailertitle } = req.body;
    console.log(req.body);

    const newMovie = new Movie({
      title,
      image,
      genre,
      duration,
      rating,
      language,
      director,
      description,
      videourl,
      trailertitle
    });

    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).json({ message: "Failed to create movie", error: err.message });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch movies", error: err.message });
  }
};


const getMoviebyId = async (req, res) => {
  const { id } = req.params; // Extract 'id' from req.params

  try {
    const movie = await Movie.findOne({ id }); // Use findOne instead of find
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ message: `Error Finding the Movie: ${err.message}` });
  }
};


module.exports = { createMovie, getAllMovies, getMoviebyId };
