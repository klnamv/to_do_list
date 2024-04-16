import React, { useState, useEffect } from 'react';
import { Reorder } from "framer-motion";
import TodoItem from './TodoItem';
import { motion } from 'framer-motion';
import './TodoList.css';

const TodoList = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

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
    };

    const handleEdit = (id) => {
        setTasks(tasks.map(task =>
          task.id === id ? { ...task, isEditing: !task.isEditing } : task
        ));
      };

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleComplete = (id) => {
        setTasks(prevTasks => prevTasks.map(task =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
          ));
     };

    return (
        <div className="todo-list-container">
            <motion.h1>
                To-Do list:
            </motion.h1>
            <form onSubmit={handleAddTask} className="todo-form">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Add a new task"
                    className="todo-input"
                />
                <button type="submit" className="todo-submit-btn">Add Task</button>
            </form>

            <Reorder.Group axis="y" values={tasks} onReorder={setTasks}>
                <ul className="todo-items">
                    {tasks.map((task) => (
                        <Reorder.Item key={task.id} value={task}>
                            <TodoItem 
                                key={task.id} 
                                task={task} 
                                handleEdit={() => handleEdit(task.id)}
                                handleDelete={() => handleDelete(task.id)} 
                                toggleComplete={() => toggleComplete(task.id)} 
                            />
                        </Reorder.Item>
                    ))}
                </ul>
            </Reorder.Group>
        </div>
    )
}

export default TodoList;