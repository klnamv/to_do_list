import React from 'react';
import './TodoItem.css';

const TodoItem = ({ task, toggleComplete, handleDelete }) => {
    return (
      <div className='todo-item'>
        <label className={task.isCompleted ? 'todo-label completed' : 'todo-label'}>
          <input 
            type='checkbox'
            className='todo-checkbox'
            checked={task.isCompleted}
            onChange={toggleComplete}
          />
          <span className='custom-checkbox'></span>
          <span className='todo-text'>{task.text}</span>
        </label>
        <button className='delete-btn' onClick={handleDelete}>
          Delete
        </button>
      </div>
    );
};

export default TodoItem;