import React from 'react'
import { Todo } from '../../interfaces/TodoInterface';
import './task.scss';

const Task: React.FC<Todo> = (props: Todo) => {
    return (
        <p className="task-container">{props.title}</p>
    )
}

export default Task;
