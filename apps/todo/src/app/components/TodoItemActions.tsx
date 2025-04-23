import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';
import { Todo } from '../features/todos/todo.state';

type Props = {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItemActions({ todo, toggleTodo, deleteTodo }: Props) {
  return (
    <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => toggleTodo(todo.id)}
        className={`mt-1 flex-shrink-0 rounded-full p-1 ${
          todo.completed
            ? 'bg-purple-100 text-purple-600'
            : 'text-gray-300 hover:text-purple-400'
        }`}
      >
        {todo.completed ? (
          <CheckCircle2 className="h-5 w-5" />
        ) : (
          <Circle className="h-5 w-5" />
        )}
      </motion.button>
  );
}
