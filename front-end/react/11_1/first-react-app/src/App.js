import React from 'react';
import "./App.css";

const todoList = ['estudar', 'lavar a louça', 'jogar e relaxar', 'ler']

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      {todoList.map(todo => {
        return task(todo)
      })}
    </div>
  );
}

export default App;
