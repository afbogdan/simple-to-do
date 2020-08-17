import React, { useState } from 'react';
import './todo.scss';
import Title from '../Title/Title';
import Input from '../Input/Input';

const Todo: React.FC = () => {
  const [todolist, setTodolist] = useState<string[]>( [] );
  const listItems = todolist.map((element, i) => <Title key={i} text={element} size="h6" type="secondary"/>);

  const addTask = (value: string) : void => {
    setTodolist(todolist.concat(value));
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
