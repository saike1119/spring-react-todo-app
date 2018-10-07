import React, {Component} from 'react'
import styles from '../../resources/static/css/app.css'
import TodoList from './TodoList'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    id: 1,
                    title: "Hello, React!",
                    desc: "React始めました",
                    done: false
                },
                {
                    id: 2,
                    title: "Hello, Redux!",
                    desc: "Reduxも始めました",
                    done: false
                }
            ]
        }
    }

    render() {
        return (
            <div className={styles.app}>
                <h1>todoアプリを作ってみた</h1>
                <TodoList
                    todos={this.state.todos}
                />
            </div>
        );
    }
}