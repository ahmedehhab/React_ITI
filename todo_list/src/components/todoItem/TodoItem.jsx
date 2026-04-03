import React from 'react';

const TodoItem = ({ task, onDelete, onToggle }) => {
  return (
    <li className="flex justify-between items-center bg-[#1e293b]/30 p-4 rounded-2xl border border-slate-800 transition-all mb-3">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => onToggle(task.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
            task.completed ? 'bg-[#2563eb] border-[#2563eb]' : 'border-slate-600'
          }`}
        >
          {task.completed && <i className="bi bi-check text-white"></i>}
        </button>

        <span className={`text-lg transition-all ${
          task.completed ? 'text-slate-500 line-through' : 'text-slate-200'
        }`}>
          {task.text}
        </span>
      </div>

      <button 
        onClick={() => {
          onDelete(task.id);
        }}
        className="text-slate-600 hover:text-red-500 transition-colors p-2"
      >
        <i className="bi bi-trash3 text-xl"></i>
      </button>
    </li>
  );
};

export default TodoItem;