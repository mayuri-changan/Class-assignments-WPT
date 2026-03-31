// 4) Accept TO DO tasks in text field and display 
//    tasks in Ordered List on same page on buttonclick
import React, { useState } from 'react';

function TodoApp() {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask(''); // clear input
        }
    };

    return (
        <div>
            <h2>To-Do List</h2>

            <input
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={addTask}>Add Task</button>

            <ol>
                {tasks.map((t, index) => (
                    <li key={index}>{t}</li>
                ))}
            </ol>
        </div>
    );
}

export default TodoApp;
