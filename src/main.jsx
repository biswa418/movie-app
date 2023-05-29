import React, { createContext, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
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
// export const storeContext = createContext()

// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;

//     return (
//       <storeContext.Provider value={store}>
//         {this.props.children}
//       </storeContext.Provider>
//     )
//   }
// }

// export function connect(callback) {
//   return function (Comp) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsub = this.props.store.subscribe(() => this.forceUpdate());
//       }

//       componentWillUnmount() {
//         this.unsub();
//       }

//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataTobePassed = callback(state);

//         return <Comp {...dataTobePassed} dispatch={store.dispatch} />
//       }
//     }

//     class ConnectedCompWrapper extends React.Component {
//       render() {
//         return (
//           <storeContext.Consumer>
//             {(store) => {
//               <ConnectedComponent store={store} />
//             }}
//           </storeContext.Consumer>
//         )
//       }
//     }

//     return ConnectedCompWrapper
//   }
// }


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
