import React, { createContext, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import './index.css'
import { App } from './components'
import rootReducer from './reducers'

//middleware -- currying
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log(action.type);
//       next(action)
//     }
//   }
// }

//in arrow func
const logger = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof (action) !== 'function') {
    console.log(action.type);
  }

  next(action)
}

//thunk
// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   if (typeof (action) === 'function') {
//     action(dispatch)
//     return
//   }

//   next(action)
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log(store)
// console.log(store.getState())

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman' }]
// })

// console.log(store.getState())

//context to use store on each component
export const storeContext = createContext()

class Provider extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <storeContext.Provider value={store}>
        {this.props.children}
      </storeContext.Provider>
    )
  }
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
