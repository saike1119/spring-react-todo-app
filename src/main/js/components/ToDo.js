import React, {Component} from 'react'
import Styles from '../../resources/static/css/todo.css'

class ToDo extends Component {
    render() {
        const className = this.props.done ? 'done' : 'undone';
        const link = this.props.done ? '元に戻す' : '完了！';
        console.log(this.props);
        return (
            <li className={Styles.undone}>
                <span>{this.props.id}</span>
                <span>：{this.props.title}</span>;
                <a href="" onClick={(e) => {
                    e.preventDefault();
                    this.props.setTodoStatus(this.props)
                }}>{link}</a>
                <p>{this.props.desc}</p>;
            </li>
    )
    }
}

export default ToDo