import React from "react"
import { data } from "../data"
import MovieCard from "./MovieCard"
import Navbar from "./Navbar"
import { addMovies } from "../actions";

class App extends React.Component {

  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log('UPDATED')
      this.forceUpdate() // not recommended
    })

    //api call
    //dispatch function
    store.dispatch(addMovies(data))
  }


  render() {

    const movies = this.props.store.getState();

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
              {movies.map((movie, index) => {
                return <MovieCard movie={movie} key={index} />
              })}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
