import React from 'react';
import Summary from "./Summary";

const App = () => (
  <div>
    <h1>My Todo App</h1>
    <Summary todosCount={5} completedTodosCount={2} />
  </div>
)

export default App;
