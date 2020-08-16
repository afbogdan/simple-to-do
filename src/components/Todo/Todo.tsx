import React from 'react';
import './todo.scss';
import Title from '../Title/Title';


const Todo: React.FC = () => {
  return (
    <section className="todo-list">
      <header>
        <Title text="Todo app" size="h3" type="primary"/>
        <Title text="PostgreSQL, Express, React, TypeScript" size="h6" type="secondary"/>
      </header>
    </section>
  )
};

export default Todo;
