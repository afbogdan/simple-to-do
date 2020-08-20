import React from 'react'
import { Todo } from '../../interfaces/TodoInterface';
import './task.scss';
import Helper from '../../helpers/global';

const help = new Helper();

interface Task {
    data: Todo,
    stateHandler?: () => void,
    deleteHandler: (id: number) => void
}

const Task: React.FC<Task> = ({data, deleteHandler}) => {
    return (
        <div className="task-container" onDoubleClick={() => deleteHandler(data.id)}>
            <input type="checkbox" checked={data.isDone}/>
            <p className="task-title">{data.title}</p>
            <p className="task-deadline">{help.getDateString(data.deadline)}</p>
        </div>
    )
}

export default Task;
