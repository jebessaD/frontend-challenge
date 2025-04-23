import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todosState } from './todos';

export function AddTodo() {
  const [text, setText] = useState('');
  const setTodos = useSetRecoilState(todosState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    setTodos(prev => [...prev, {
      id: Date.now(),
      text,
      completed: false
    }]);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Add new todo"
      />
      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2"
      >
        Add
      </button>
    </form>
  );
}
