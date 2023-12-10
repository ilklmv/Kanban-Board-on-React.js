// components/TaskList.js
import React from 'react';
import Task from './task';

const TaskList = ({ tasks, status }) => {
  return (
    <div>
      <h2>{status}</h2>
      {tasks.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;
