import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'

function App() {
  const baseURL = 'http://localhost:5000';

  const [tasks, setTasks] = useState([]);
  const [onGoing, setOnGoing] = useState([]);
  const [review, setReview] = useState([]);
  const [complete, setComplete] = useState([]);

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

    // Review
    const getReview = async () => {
      const reviewFromServer = await fetchReview();
      setReview(reviewFromServer);
    }

    // Complete
    const getComplete = async () => {
      const completeFromServer = await fetchComplete();
      setComplete(completeFromServer);
    }

    getTasks();
    getOnGoing();
    getReview();
    getComplete();
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`${baseURL}/tasks`);
    const data = await res.json();
    return data;
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`${baseURL}/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  // Fetch onGoing by Id
  const fetchOnGoingById = async (id) => {
    const res = await fetch(`${baseURL}/ongoing/${id}`);
    const data = await res.json();
    return data;
  }

    // Fetch review by Id
    const fetchReviewById = async (id) => {
      const res = await fetch(`${baseURL}/review/${id}`);
      const data = await res.json();
      return data;
    }


  // Fetch OnGoing Tasks
  const fetchOnGoing = async () => {
    const res = await fetch(`${baseURL}/ongoing`);
    const data = await res.json();
    return data;
  }

  // Fetch Review Tasks
  const fetchReview = async () => {
    const res = await fetch(`${baseURL}/review`);
    const data = await res.json();
    return data;
  }

  // Fetch Complete Tasks
  const fetchComplete = async () => {
    const res = await fetch(`${baseURL}/complete`);
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

  // Move Task
  const moveTask = async (id, type) => {
    if (type === 'task') {
      const objToMove = await fetchTask(id);
      // delete first
      await fetch(`${baseURL}/tasks/${id}`, {
        method: 'DELETE'
      })
      setTasks(tasks.filter((task) => task.id !== id));
      // add next
      objToMove.id = '';
      const res = await fetch(`${baseURL}/ongoing`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(objToMove)
      })
      const data = await res.json();
      setOnGoing([...onGoing, data]);
    }
    if (type === 'onGoing') {
      const objToMove = await fetchOnGoingById(id);
      // delete first
      await fetch(`${baseURL}/ongoing/${id}`, {
        method: 'DELETE'
      })
      setOnGoing(onGoing.filter((ongoing) => ongoing.id !== id));
      // add next
      objToMove.id = '';
      const res = await fetch(`${baseURL}/review`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(objToMove)
      })
      const data = await res.json();
      setReview([...review, data]);
    }

    if (type === 'review') {
      const objToMove = await fetchReviewById(id);
      // delete first
      await fetch(`${baseURL}/review/${id}`, {
        method: 'DELETE'
      })
      setReview(review.filter((review) => review.id !== id));
      // add next
      objToMove.id = '';
      const res = await fetch(`${baseURL}/complete`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(objToMove)
      })
      const data = await res.json();
      setComplete([...complete, data]);
    }

  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />
      {
        showAdd && <AddTask onAdd={addTask} />
      }
      <Tasks tasks={tasks} onGoing={onGoing} review={review} complete={complete} onDelete={deleteTask} onMove={moveTask} />
    </div>
  );
}

export default App;
