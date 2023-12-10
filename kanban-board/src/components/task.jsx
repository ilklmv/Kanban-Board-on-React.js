// components/Task.js
import React from 'react';

const Task = ({ title, description, status }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default Task;
