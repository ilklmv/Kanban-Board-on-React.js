import React from 'react';
import Backlog from './backlog/backLog';
//import TaskList from './taskList';

const KanbanBoard = ({ tasks }) => {

  return (
    <div>
      <Backlog tasks={tasks} />
    </div>
  );
};

export default KanbanBoard;
