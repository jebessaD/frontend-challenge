import { useState } from 'react';
import { useTodos } from '../hooks/useTodo';
import {  PlusCircle } from 'lucide-react';

export function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-1">
      <div className="flex items-center gap-2">
     
        <PlusCircle className='h-6 w-6 text-purple-700' />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Memorize the Dictionary"
          className="flex-1 px-1 py-1 text-xl placeholder:text-xl  text-gray-800 focus:outline-none placeholder:text-gray-200"
        />
        <button
          type="submit"
          className="text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md px-2 py-1"
          aria-label="Add todo item"
        >
          Add Item
        </button>
      </div>
    </form>
  );
}
