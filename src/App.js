import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'

function App() {
  const baseURL = 'http://localhost:5000';
  const [tasks, setTasks] = useState([]);
  const [onGoing, setOnGoing] = useState([]);
  
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    // tasks
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    }
    // OnGoing
    const getOnGoing = async () => {
      const onGoingFromServer = await fetchOnGoing();
      setOnGoing(onGoingFromServer);
    }

    getTasks();
    getOnGoing();
  },[])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`${baseURL}/tasks`);
    const data = await res.json();
    return data;
  }

    // Fetch OnGoing Tasks
    const fetchOnGoing = async () => {
      const res = await fetch(`${baseURL}/ongoing`);
      const data = await res.json();
      return data;
    }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch(`${baseURL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();
    setTasks([...tasks, data]);
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`${baseURL}/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd}/>
      {
        showAdd &&  <AddTask onAdd={addTask}/>
      }
      <Tasks tasks={tasks} onGoing={onGoing} onDelete={deleteTask} />
    </div>
  );
}

export default App;
