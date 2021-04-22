import React from 'react'

const Header = ({ title, showAdd, onAdd  }) => {
    return (
        <header className='flex justify-center mt-5'>
            <h1 className='text-3xl font-extrabold'>{title}</h1>
            <button className={`bg-blue-100 px-4 py-1 mx-2 text-xs font-semibold tracking-wider rounded
                hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                ${showAdd ? 'text-red-600' : 'text-green-600'} `} onClick={onAdd}>{showAdd ? 'Close' : 'Add'}
            </button>
        </header>
    )
}

Header.defaultProps = {
    title: "TASK PLANNER"
}

export default Header
