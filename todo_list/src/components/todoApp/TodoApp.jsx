import React, { useState } from 'react';
import TodoItem from '../todoItem/TodoItem';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="w-full max-w-md p-8 bg-[#111827] rounded-3xl border border-slate-800 shadow-2xl">
      <header className="mb-8">
        <h2 className="text-sm uppercase tracking-widest text-blue-500 font-bold">Workspace</h2>
        <h1 className="text-3xl font-extrabold text-white mt-1">Daily Focus</h1>
      </header>
      
      <div className="flex gap-3 mb-10">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-slate-800/50 border border-slate-700 text-white p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          placeholder="What's the next goal?"
        />
        <button onClick={addTask} className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-2xl font-bold shadow-lg shadow-blue-900/20 transition-all">
          Add
        </button>
      </div>

      <ul className="space-y-4">
        {tasks.map(item => (
          <TodoItem 
            key={item.id} 
            task={item} 
            onDelete={deleteTask} 
            onToggle={toggleComplete} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;