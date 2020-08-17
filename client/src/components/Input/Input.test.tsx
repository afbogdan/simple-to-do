import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

let stateMock: string[] = [];

const addValue = (value: string) : string[] => {
    stateMock.concat(value);
    return stateMock;
}

const submitValueMock = jest.fn((value: string) : void => {
    addValue(value);
});

describe('Input component', () => {
    it('should be in the document', () => {
        const { container } = render(<Input label="hello" submitValue={submitValueMock}/>);
        expect(container.firstElementChild).toBeInTheDocument();
    });

    it('should have class \'input-field\'', () => {
        const { container } = render(<Input label="hello" submitValue={submitValueMock}/>);
        const inputField = container.firstElementChild;

        expect(inputField).toHaveClass('input-field');
    });

    it('should contain 1 label and 1 input', () => {
        const { container } = render(<Input label="hello" submitValue={submitValueMock}/>);
        const inputField = container.firstElementChild;
        expect(inputField?.firstElementChild?.tagName.toLowerCase()).toEqual('label');
        expect(inputField?.lastElementChild?.tagName.toLowerCase()).toEqual('input');
    });

    it('should store the string in the value property' , () => {
        // fire keypress events
        // test string to much the keys that were pressed
    });

    it('should call subtmitValue handler when key Enter is pressed' , () => {
        // fire Enter event
        // submitValue handler should be called once
    });

    it('should have class \'field-focused\' when focused' , () => {
        // fire Enter event
        // submitValue handler should be called once
    });

    it('should not have class \'field-focused\' when blured' , () => {
        // fire Enter event
        // submitValue handler should be called once
    });
});

describe('Label element from Input component', () => {
    const label: string = "Hello world";

    it(`should have ${label} as innerHTML` , () => {
        const { getByText } = render(<Input label={label} submitValue={submitValueMock}/>);
        expect(getByText(label)).toBeInTheDocument();
    });
});