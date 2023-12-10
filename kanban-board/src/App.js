// App.js
import React from 'react';
import Header from './components/header/header';
import KanbanBoard from './components/kanbanBoard';
import Footer from './components/footer/footer';
import './components/header/header.css';
import './components/footer/footer.css';

const App = () => {
  // Предполагаем, что у вас есть список задач
  const tasks = [
    { id: 1, title: 'Task 1', description: 'Description 1', status: 'Backlog' },
    // Другие задачи...
  ];

  const activeTasks = tasks.filter(task => task.status !== 'Finished').length;
  const finishedTasks = tasks.filter(task => task.status === 'Finished').length;

  const author = 'Your Name'; // Замените на ваше имя
  const year = new Date().getFullYear();

  return (
    <div>
      <Header />
      <main>
        <KanbanBoard tasks={tasks} />
      </main>
      <Footer
        activeTasks={activeTasks}
        finishedTasks={finishedTasks}
        author={author}
        year={year}
      />
    </div>
  );
};

export default App;
