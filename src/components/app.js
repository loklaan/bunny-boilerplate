import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { autobind } from 'core-decorators'
import { addTodo, removeTodo } from 'models/todos'
import TodoItem from 'components/todo-item'
import s from './app.css'

const mapProps = (state) => ({todos: state.todos})
const mapActions = (dispatch) => bindActionCreators({ addTodo, removeTodo }, dispatch)

@connect(mapProps, mapActions)
@autobind
export default class App extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
  }

  state = { text: '' }

  addTodos () {
    const { text } = this.state
    if (_.isEmpty(text)) return
    this.setState({ text: '' })
    this.props.addTodo(text)
    return false
  }

  removeTodo (todo) {
    this.props.removeTodo(todo)
  }

  handleTextChange (text) {
    this.setState({ text })
  }

  render () {
    const { todos } = this.props
    const { text = '' } = this.state

    return (
      <div className={`${s.container}`}>
        <form className={`${s.form}`} onSubmit={this.addTodos} action='javascript:'>
          <input className={`${s.input}`} value={text} onInput={({target}) => this.handleTextChange(target.value)} placeholder='New Todos...' />
        </form>
        <ul className={`${s.ul}`}>
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onRemove={this.removeTodo} />
          ))}
        </ul>
      </div>
    )
  }
}
