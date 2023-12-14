/* eslint-disable no-undef */
import React from 'react';
import Backlog from './backlog/backLog';
import Ready from './ready/ready';
import './kanbanBoard.css';
//import TaskList from './taskList';

const KanbanBoard = ({ tasks }) => {

  return (
    <div className='kanbanBoard__container'>
      <Backlog tasks={tasks} />
      <Ready tasks={tasks} />
    </div>
  );
};

export default KanbanBoard;
