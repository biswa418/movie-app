import React from "react"
import { data } from "../data"
import MovieCard from "./MovieCard"
import Navbar from "./Navbar"
import { addMovies, showFav } from "../actions";
import { connect } from "react-redux";
// import { connect, storeContext } from "../main";

class App extends React.Component {

  componentDidMount() {
    //api call
    //dispatch function
    this.props.dispatch(addMovies(data))
  }

  //check if already in fav
  checkifFav = (movie) => {
    const { movies } = this.props;
    const { fav } = movies;

    if (fav.indexOf(movie) > -1) {
      return true; //movie found in fav
    }

    return false;
  }

  onChangeTab = (val) => {
    // console.log('clicked', val);
    this.props.dispatch(showFav(val));
  }

  render() {
    const { movies, search } = this.props
    const { list, fav, show_fav } = movies;
    const displayMovs = show_fav ? fav : list;


    return (
      <>
        <div>
          <Navbar
            search={search}
          />

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
                    dispatch={this.props.dispatch}
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

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <storeContext.Consumer>
//         {(store) => {
//           return <App store={store} />
//         }}
//       </storeContext.Consumer>
//     )
//   }
// }

function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search
  }
}

const connectedAppComponent = connect(mapStateToProps)(App)
export default connectedAppComponent
