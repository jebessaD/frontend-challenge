import { useState } from 'react';
import { useTodos } from '../hooks/useTodo';
import { PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <form onSubmit={handleSubmit} className="mb-6">
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="flex items-center gap-2 bg-white px-1 md:px-3 py-2 rounded-lg  border border-purple-100"
      >
        <PlusCircle className='h-6 w-6 text-purple-600' />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1  md:px-2 py-2 md:text-lg placeholder:md:text-lg text-gray-800 focus:outline-none placeholder:text-gray-300"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={!text.trim()}
          className={`px-4 py-1.5 rounded-lg font-medium ${
            text.trim()
              ? 'bg-purple-600 hover:bg-purple-700 text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          } transition-colors`}
          aria-label="Add todo item"
        >
          Add
        </motion.button>
      </motion.div>
    </form>
  );
}