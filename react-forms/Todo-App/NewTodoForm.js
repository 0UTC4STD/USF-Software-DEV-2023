import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
  const [formData, setFormData] = useState('');

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { task: formData, id: Math.random() };
    addTodo(newTodo);
    setFormData('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input type="text" id="task" value={formData} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;