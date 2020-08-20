import React from 'react'
import { Todo, TodoPatch } from '../../interfaces/TodoInterface';
import './task.scss';
import Helper from '../../helpers/global';

const help = new Helper();

interface Task {
    data: Todo,
    stateHandler?: () => void,
    deleteHandler: (id: number) => void,
    updateHandler: (id: number, payload: TodoPatch) => void
}

const Task: React.FC<Task> = ({data, deleteHandler, updateHandler}) => {
    return (
        <div className="task-container" onDoubleClick={() => deleteHandler(data.id)}>
            <input type="checkbox" checked={data.is_done} onChange={() => updateHandler(data.id, {is_done: !data.is_done})}/>
            <p className="task-title">{data.title}</p>
            <p className="task-deadline">{help.getDateString(data.deadline)}</p>
        </div>
    )
}

export default Task;
