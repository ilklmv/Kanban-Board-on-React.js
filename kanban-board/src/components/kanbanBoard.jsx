import React from 'react';
import TaskList from './components/taskList';

const KanbanBoard = ({ tasks }) => {
  const backlogTasks = tasks.filter(task => task.status === 'Backlog');
  const readyTasks = tasks.filter(task => task.status === 'Ready');
  const inProgressTasks = tasks.filter(task => task.status === 'In Progress');
  const finishedTasks = tasks.filter(task => task.status === 'Finished');

  return (
    <div>
      <TaskList tasks={backlogTasks} status="Backlog" />
      <TaskList tasks={readyTasks} status="Ready" />
      <TaskList tasks={inProgressTasks} status="In Progress" />
      <TaskList tasks={finishedTasks} status="Finished" />
    </div>
  );
};

export default KanbanBoard;
