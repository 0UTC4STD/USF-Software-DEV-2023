import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

describe('NewTodoForm', () => {
  test('renders input form with a placeholder', () => {
    render(<NewTodoForm />);
    const inputElement = screen.getByPlaceholderText(/Enter a new task/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('submits the form with the input value', () => {
    const onSubmitMock = jest.fn();
    render(<NewTodoForm onSubmit={onSubmitMock} />);
    const inputElement = screen.getByPlaceholderText(/Enter a new task/i);
    const formElement = screen.getByTestId('new-todo-form');
    const inputValue = 'New task';
    fireEvent.change(inputElement, { target: { value: inputValue } });
    fireEvent.submit(formElement);
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith(inputValue);
    expect(inputElement).toHaveValue('');
  });
});