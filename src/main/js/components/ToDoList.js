import React, {Component} from 'react'
import ToDo from './ToDo'

export default class ToDoList extends Component {
    render() {
        const todos = this.props.todos.map(todo =>
            <ToDo
                key={todo.id}
                {...todo}
            />
        );
        return (
            <ul>
                {todos}
            </ul>
        );
    }
}

