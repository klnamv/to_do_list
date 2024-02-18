import React from 'react';
import { motion } from 'framer-motion';

const TodoItem = ({ task, toggleComplete, handleDelete }) => {
    return (
      <motion.li
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ opacity: task.isCompleted ? 0.5 : 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
      >
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={toggleComplete} // Make sure this is correctly pointing to a function
          style={{ marginRight: '10px' }}
        />
        {task.text}
        <button onClick={handleDelete} style={{ marginLeft: '20px' }}>
          Delete
        </button>
      </motion.li>
    );
};

export default TodoItem;