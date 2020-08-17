import React, { useState, useEffect } from 'react';
import './todo.scss';
import Title from '../Title/Title';
import Input from '../Input/Input';

const axios = require('axios');
const baseURL = 'http://localhost:5000';

interface Todo {
  id: number,
  name: string,
  deadline: Date;
} 

const Todo: React.FC = () => {
  const [todolist, setTodolist] = useState<Todo[]>( [] );
  const listItems = todolist.map((element, i) => <Title key={i} text={element.name} size="h6" type="secondary"/>);

  // fetch todos
  useEffect( () => {
    const getTodos = async () => {
      const todos = await axios.get(baseURL + '/todo');
      setTodolist(todos.data);
    }

    getTodos()
  }, [])

  const addTask = (value: string) : void => {
    // needs to be integrated with the back-end
    setTodolist(todolist.concat({
      id: todolist.length + 1, 
      name: value, 
      deadline: new Date()
    }));
  }

  return (
    <section className="todo-list">
      <header>
        <Title text="Todo app" size="h1" type="primary"/>
        <Title text="PostgreSQL, Express, React, TypeScript" size="h6" type="secondary"/>
      </header>
    
      <Input label="What todo?" submitValue={addTask}/>

      {listItems}

    </section>
  )
};

export default Todo;
