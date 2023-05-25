import React from "react"
import { data } from "../data"
import MovieCard from "./MovieCard"
import Navbar from "./Navbar"
import { addMovies, showFav } from "../actions";

class App extends React.Component {

  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      // console.log('UPDATED')
      this.forceUpdate() // not recommended
    })

    //api call
    //dispatch function
    store.dispatch(addMovies(data))
  }

  //check if already in fav
  checkifFav = (movie) => {
    const { fav } = this.props.store.getState();

    if (fav.indexOf(movie) > -1) {
      return true; //movie found in fav
    }

    return false;
  }

  onChangeTab = (val) => {
    console.log('clicked', val);
    this.props.store.dispatch(showFav(val));
  }

  render() {

    const { list, fav, show_fav } = this.props.store.getState();
    const displayMovs = show_fav ? fav : list;


    return (
      <>
        <div>
          <Navbar />

          <div className="main">
            <div className="tabs">
              <div className={`tab ${show_fav ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
              <div className={`tab ${show_fav ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favorites</div>
            </div>

            <div className="list">
              {displayMovs.map((movie, index) => {
                return (
                  <MovieCard
                    movie={movie}
                    key={index}
                    dispatch={this.props.store.dispatch}
                    isFav={this.checkifFav(movie)}
                  />
                )
              })}
            </div>

            {
              displayMovs.length === 0 ?
                <div className="no-movies">
                  No movies found!
                </div>
                :
                null
            }
          </div>
        </div>
      </>
    )
  }
}

export default App
