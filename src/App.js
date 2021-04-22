import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState, useEffect } from 'react'

function App() {
  const serverURL = 'http://localhost:5000';
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    }
    getTasks();
  },[])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`${serverURL}/tasks`);
    const data = await res.json();
    return data;
  }

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
