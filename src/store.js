import thunk from 'redux-thunk'
import { configureStore, middlewareRequireFSA } from 'lib/redux-utils'

export default configureStore([
  thunk,
  middlewareRequireFSA
])
