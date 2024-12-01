import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzQ0ZjdkMTIzODVlM2JhNGM1ZjZkYmE3YjI5OTRiYiIsIm5iZiI6MTczMjk4ODc1Mi40OTYsInN1YiI6IjY3NGI0ZjUwNTFkMjZiYTkzYzc4YjM3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gFnGkA4g7y49Q_E2QTXsAOM0ZXBQbBTHuPXarepx9aM",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => setMovies(res.results))
      .catch((_err) => setMovies([]));
  }, []);

  return (
    <div className="">
      {movies.map(
        (movie: { title: string; release_date: string; id: number }) => (
          <div key={movie.id} className="w-full py-10 px-10">
            {movie.id} : {movie.title}, {movie.release_date}
          </div>
        )
      )}
    </div>
  );
}

export default App;
