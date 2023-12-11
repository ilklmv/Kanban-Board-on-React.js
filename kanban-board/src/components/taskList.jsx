import React from 'react';
import Task from './task';
import './taskList.css';

const TaskList = ({ tasks, status }) => {
  return (
    <div className="task-list">
       <h2>{status}</h2>
      {tasks.map(task => (
        <div key={task.id} className="task"> {/* Используем класс из стилей */}
          <Task {...task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
