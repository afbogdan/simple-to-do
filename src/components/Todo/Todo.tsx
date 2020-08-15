import React from 'react';
import './todo.scss';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';

const Todo: React.FC = () => {
  return (
    <div className="todo-list">
      <Title text="Todo app"/>
      <Subtitle text="PostgreSQL, Express, React + TypeScript"/>
    </div>
  )
};

export default Todo;
