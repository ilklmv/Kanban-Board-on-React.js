import React from "react";
import TaskList from "../taskList";

const Backlog = ({ tasks }) => {
    const backlogTasks = tasks.filter(task => task.status === 'Backlog');

    return (
        <div className="backLog__container">
            <h2>Backlog</h2>
            <TaskList tasks={backlogTasks} />
        </div>
    );
};

export default Backlog;