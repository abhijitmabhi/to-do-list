import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onGoing }) => {
    return (
        <div className='flex flex-row mt-5'>
            <div>
                <h1>To Do</h1>
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        onDelete={onDelete}
                    />
                ))}
            </div>
            <div>
                <h1>On Going</h1>
                {onGoing.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        onDelete={onDelete}
                    />
                ))}
            </div>
            <div>
                <h1>Review</h1>
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        onDelete={onDelete}
                    />
                ))}
            </div>
            <div>
                <h1>Done</h1>
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        onDelete={onDelete}
                    />
                ))}
            </div>

        </div>
    )
}

export default Tasks
