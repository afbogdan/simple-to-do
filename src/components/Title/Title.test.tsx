import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title';

describe('Title component', () => {
  const text = 'Hello';
  const tag = 'h5';
  const type = 'secondary';
  

  it('should be in the document', () => {
    const { getByText } = render(<Title text={text} size={tag} type={type}/>);
    expect(getByText(text)).toBeInTheDocument();
  });

  it('should have h5 as tagName', () => {
    const { container } = render(<Title text={text} size={tag} type={type}/>);
    expect(container.firstElementChild?.tagName.toLowerCase()).toEqual(tag);
  });

  it('should have \'secondary\' class', () => {
    const { container } = render(<Title text={text} size={tag} type={type}/>);
    expect(container.firstElementChild).toHaveClass('secondary');
  });
});

