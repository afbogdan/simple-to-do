import React, { useState, useEffect } from 'react';
import './todolist.scss';
import Title from '../Title/Title';
import Input from '../Input/Input';
import TodoApi from '../../api/todoApi';
import { Todo, TodoPatch } from '../../interfaces/TodoInterface';
import Task from '../Task/Task';

const todoApi = new TodoApi();

const TodoList: React.FC = () => {
  
  const addTask = (value: string) : void => {
    const add = async () => {
      const { data } = await todoApi.add({deadline: new Date(), title: value });
      setTodolist(data)
    }

    add();
  }

  const deleteTask = (id: number) : void => {
    const deleteTodo = async () => {
      const { data } = await todoApi.delete(id);
      setTodolist(data);
    }

    deleteTodo();
  }

  const updateTask = (id: number, payload: TodoPatch) => {
    const updateTodo = async () => {
      const { data } = await todoApi.patch(id, payload);
      setTodolist(data);
    }

    updateTodo()
  }

  const [todolist, setTodolist] = useState<Todo[]>( [] );
  const listItems = todolist.map((t, i) => 
    <Task 
      key={i}
      data={t}
      deleteHandler={deleteTask}
      updateHandler={updateTask}
    />
  )

  // fetch todos
  useEffect( () => {
    const getTodos = async () => {
      const todos = await todoApi.getAll();
      setTodolist(todos.data);
    }

    getTodos()
  }, [])

  return (
    <section className="todo-list">
      <header>
        <Title text="Todo app" size="h1" type="primary"/>
        <Title text="PERN /w TypeScript & Jest" size="h6" type="secondary"/>
      </header>
    
      <Input label="What todo?" submitValue={addTask}/>

      <div className="tasks">
        {listItems}
      </div>
    </section>
  )
};

export default TodoList;
