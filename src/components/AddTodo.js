import React, { useState } from 'react';

const AddTodo = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const { title, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={(e) => onChange(e)}
        required
      />

      <input
        type='test'
        placeholder='Description'
        name='description'
        value={description}
        onChange={(e) => onChange(e)}
      />

      <button onClick={() => props.todoAdded(title, description)}>
        Add Todo
      </button>
    </div>
  );
};
export default AddTodo;
