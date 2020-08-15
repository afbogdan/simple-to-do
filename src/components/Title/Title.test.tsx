import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title';

test('renders title component', () => {
  const text = 'Hello';
  const { container, getByText } = render(<Title text={text}/>);
  expect(getByText(text)).toBeInTheDocument();
});

test('renders title component /w "title" class', () => {
    const text = 'Hello';
    const { container, getByText } = render(<Title text={text}/>);
    expect(container.firstElementChild).toHaveClass('title');
});
