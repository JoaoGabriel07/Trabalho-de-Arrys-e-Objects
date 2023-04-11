let movies = [
    {
      title: "The Shawshank Redemption",
      rating: 9.3,
      hasWatched: true
    },
    {
      title: "The Godfather",
      rating: 9.2,
      hasWatched: true
    },
    {
      title: "The Dark Knight",
      rating: 9.0,
      hasWatched: false
    },
    {
      title: "Pulp Fiction",
      rating: 8.9,
      hasWatched: true
    }
  ];
  
  movies.forEach(movie => {
    let watched = movie.hasWatched ? "watched" : "not seen";
    console.log(`You have ${watched} "${movie.title}" - ${movie.rating} stars`);
  });
