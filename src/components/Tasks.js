import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onGoing, review, complete, onMove }) => {
    return (
        <div className='flex flex-row mt-5'>
            <div>
                <h1 className='text-center text-xl font-extrabold border-4 border-light-blue-500 border-opacity-100'>To Do</h1>
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        onDelete={onDelete}
                        onMove={onMove}
                        type='task'
                    />
                ))}
            </div>
            <div>
                <h1 className='text-center text-xl font-extrabold border-4 border-light-blue-500 border-opacity-100'>On Going</h1>
                {onGoing.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        onDelete={onDelete}
                        onMove={onMove}
                        type='onGoing'
                    />
                ))}
            </div>
            <div>
                <h1 className='text-center text-xl font-extrabold border-4 border-light-blue-500 border-opacity-100'>Review</h1>
                {review.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        onDelete={onDelete}
                        onMove={onMove}
                        type='review'
                    />
                ))}
            </div>
            <div>
                <h1 className='text-center text-xl font-extrabold border-4 border-light-blue-500 border-opacity-100'>Done</h1>
                {complete.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        onDelete={onDelete}
                        type=''
                    />
                ))}
            </div>

        </div>
    )
}

export default Tasks
