import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

test('renders todo container', () => {
  const { container } = render(<Todo />);
  expect(container.firstElementChild).toHaveClass('todo-list');
});
