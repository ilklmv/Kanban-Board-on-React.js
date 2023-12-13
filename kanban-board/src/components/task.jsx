import React from 'react';
import './task.css';

const Task = ({ title, description, status }) => {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
};

export default Task;
