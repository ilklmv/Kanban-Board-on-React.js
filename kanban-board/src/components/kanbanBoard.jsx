/* eslint-disable no-undef */
import React from 'react';
import Backlog from './backlog/backLog';
import Ready from './ready/ready';
//import InProgress from './inProgress/inProgress';
import './kanbanBoard.css';
import InProgress from './inProgress/inProgress';
import Finished from './Finished/finished';
//import TaskList from './taskList';

const KanbanBoard = ({ tasks }) => {

  return (
    <div className='kanbanBoard__container'>
      <Backlog tasks={tasks} />
      <Ready tasks={tasks} />
      <InProgress tasks={tasks} />
      <Finished tasks={tasks} />
    </div>
  );
};

export default KanbanBoard;
