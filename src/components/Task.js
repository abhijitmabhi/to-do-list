import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>Dead Line: {task.dueDate}</p>
        </div>
    )
}

export default Task
