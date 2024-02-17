import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const newTask = {
            id: Date.now(),
            text: inputText,
            isCompleted: false,
          };
        
        setTasks([...tasks, newTask]);
        setInputText('')
    }

    return (
        <div>
            <form onSubmit={handleAddTask}>
                <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Add a new task"
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map((task) => (
                <TodoItem 
                    key={task.id} 
                    task={task} 
                    handleDelete={() => handleDelete(task.id)} 
                    toggleComplete={() => toggleComplete(task.id)} 
                />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;