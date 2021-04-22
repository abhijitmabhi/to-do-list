import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [urgent, setUrgent] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert('Please add a task');
            return;
        }

        onAdd({ title, dueDate, urgent });

        setTitle('');
        setDueDate('');
        setUrgent(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input className='border-4 border-light-blue-500 border-opacity-100' type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Dead Line</label>
                <input className='border-4 border-light-blue-500 border-opacity-100' type='date' placeholder='Date & Time' value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Urgent</label>
                <input type='checkbox' checked={urgent} value={urgent} onChange={(e) => setUrgent(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
