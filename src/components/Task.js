import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
    return (
        <div>
            <h3 className={`font-bold text-xl  ${task.urgent === true ? 'text-red-700' : 'text-green-700'}`}>{task.title}
                <FaTimes
                    style={{color: 'red', cursor: 'pointer'}}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p className='font-medium'>Dead Line: {task.dueDate}</p>
            
        </div>
    )
}

export default Task
