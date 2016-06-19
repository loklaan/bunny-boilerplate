import { createReducer } from 'lib/redux-utils'

export const ADD_TODO = 'boilerplate/todos/ADD_TODO'
export const REMOVE_TODO = 'boilerplate/todos/REMOVE_TODO'

export function addTodo (text) {
  return {
    type: ADD_TODO,
    payload: { text }
  }
}

export function removeTodo (todo) {
  return {
    type: REMOVE_TODO,
    payload: { todo }
  }
}

let currentIndex = 0
const initialState = []

export default createReducer(initialState, {
  [ADD_TODO] (todos, {payload}) {
    return [
      ...todos,
      { id: currentIndex++, text: payload.text }
    ]
  },

  [REMOVE_TODO] (todos, {payload}) {
    return todos.filter(i => i !== payload.todo)
  }
})
