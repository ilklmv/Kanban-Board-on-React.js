/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import Header from "./components/header/header";
import KanbanBoard from "./components/canbanBoard";

const App = () => {
  const Task = [
    { id: 1, title: 'Task 1', description: 'Description 1', status: 'Backlog' },
  ];

  return (
    <div>
      <Header />
      <main>
        <KanbanBoard tasks={tasks} />
      </main>
      <footer>Footer content</footer>
    </div>
  );
};

export default App;
