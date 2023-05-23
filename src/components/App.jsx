import { data } from "../data"
import MovieCard from "./MovieCard"
import Navbar from "./Navbar"

function App() {

  return (
    <>
      <div>
        <Navbar />

        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favorites</div>
          </div>

          <div className="list">
            {data.map((movie) => {
              return <MovieCard movie={movie} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
