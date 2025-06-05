import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { tasks as initialTasks } from './data';

import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask'; // ← Tu peux ajouter la route si besoin

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  // Ajouter une tâche
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Supprimer une tâche
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} />} />
        <Route
          path="/taches/:id"
          element={<TaskDetail tasks={tasks} deleteTask={deleteTask} />}
        />
        <Route path="/ajouter" element={<AddTask addTask={addTask} />} />
        <Route
          path="/modifier/:id"
          element={<EditTask tasks={tasks} setTasks={setTasks} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
