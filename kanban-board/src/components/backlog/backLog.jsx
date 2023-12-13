import React, { useState } from "react";
import TaskList from "../taskList";

const Backlog = ({ tasks }) => {
    const [ newTaskTitle, setNewTaskTitle ] = useState('');

    const backlogTasks = tasks.filter(task => task.status === 'Backlog');

    const handleTaskAdd = () => {
        //Добавляем задачу с пустым описанием 
        // eslint-disable-next-line no-unused-vars
        const newTask = { id: tasks.length + 1, title: newTaskTitle, description: '', status: 'Backlog' };
        setNewTaskTitle('');
        //setTasks(newTask);
    }
 
    return (
        <div className="backLog__container">
            <h2>Backlog</h2>
            <TaskList tasks={backlogTasks} />
            <div className="add-task">
                <button onClick={handleTaskAdd}> + Add card</button>
            </div>
        </div>
    );
};

export default Backlog;