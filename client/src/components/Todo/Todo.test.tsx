import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('Todo component', () => {
  const { container } = render(<TodoList />);
  expect(container.firstElementChild).toHaveClass('todo-list');
});
