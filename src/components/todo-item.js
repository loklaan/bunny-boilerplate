import React, { Component, PropTypes } from 'react'
import { autobind } from 'core-decorators'
import s from './todo-item.css'

@autobind
export default class TodoItem extends Component {
  static propTypes = {
    onRemove: PropTypes.func.isRequired,
    todo: PropTypes.shape({
      text: PropTypes.string.isRequired
    }).isRequired
  }

  shouldComponentUpdate ({ todo, onRemove }) {
    return todo !== this.props.todo || onRemove !== this.props.onRemove
  }

  remove () {
    let { onRemove, todo } = this.props
    onRemove(todo)
  }

  render () {
    const { todo } = this.props
    return (
      <li className={`${s.li}`}>
        <button className={`${s.button}`} onClick={this.remove}>&times;</button>
        {' ' + todo.text}
      </li>
    )
  }
}
