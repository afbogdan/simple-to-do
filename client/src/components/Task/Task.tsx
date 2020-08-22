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
        <label 
            htmlFor={data.id.toString()} 
            className="task"
            onDoubleClick={() => deleteHandler(data.id)}>

            <input 
                checked={data.is_done} 
                id={data.id.toString()}
                onChange={() => updateHandler(data.id, {is_done: !data.is_done})} 
                type="checkbox"
            />
            <span className="checkbox circular"></span>

            <span className="title">{data.title}</span>
            <span className="desc">{data.description}</span>
            <span className="deadline">{help.getDateString(data.deadline)}</span>
        </label>
    )
}

export default Task;
