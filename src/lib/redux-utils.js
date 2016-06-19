import { createStore, applyMiddleware, compose } from 'redux'
import { isFSA } from 'flux-standard-action'
import allReducers from 'models'

export function createReducer (initialState, reducerConfig) {
  return (state = initialState, action) => {
    const { type } = action

    if (reducerConfig[type]) {
      return reducerConfig[type](state, action)
    }

    return state
  }
}

export function middlewareRequireFSA (store) {
  return next => action => {
    if (!isFSA(action)) {
      const errMsg = action.type ? `Action Type ${action.type}` : undefined
      action.stack = (new Error(errMsg)).stack
      console.warn('Actions are required to be Flux Standard Action shaped.', action)
    }

    next(action)
  }
}

export function configureStore (middlewares) {
  return createStore(
    allReducers,
    compose(
      applyMiddleware(
        ...middlewares
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}

