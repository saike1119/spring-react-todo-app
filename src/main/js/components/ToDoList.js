import React, {Component} from 'react'
import ToDo from './ToDo'

class ToDoList extends Component {
    render() {
        const todos = this.props.todos.map(todo =>
            <ToDo
                key={todo.id}
                {...todo}
                setTodoStatus={this.props.setTodoStatus}
            />
        );
        return (
            <ul>
                {todos}
            </ul>
        );
    }
}

export default ToDoList