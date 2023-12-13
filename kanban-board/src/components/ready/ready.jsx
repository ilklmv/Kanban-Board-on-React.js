import React, { useState } from "react";
import TaskList from "../taskList";

const Ready = ({ tasks, onTaskMove}) => {
    const [newTaskTitle, setNewTaskTitle] = useState ('');

    const readyTasks = task.filter(task => task.status === 'Ready');

    const handleTaskAdd = () => {
        //Добавляем новую задачу с пустым описанием и статусом Ready 
        const newTask = { id: tasks.length + 1, title: newTaskTitle, description: '', status: 'Ready' };
        setNewTaskTitle('')
        onTaskMove(newTask); //Перемещаем задачу в блок Ready
    };

    return (
        <div className="ready">
            <h2>Ready</h2>
            <TaskList tasks={readyTasks} />
        </div>
    );
};

export default Ready;
