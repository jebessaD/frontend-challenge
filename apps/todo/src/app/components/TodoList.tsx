import { useTodos } from '../hooks/useTodo';
import { TodoItem } from './TodoItem';
import { motion } from 'framer-motion';

type TodoListProps = {
  filter: 'all' | 'completed' | 'incomplete';
};

export function TodoList({ filter }: TodoListProps) {
  const { todos } = useTodos();

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-purple-700 mb-4">Your Tasks</h2>
      {filteredTodos.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8 text-gray-400"
        >
          No tasks found
        </motion.div>
      ) : (
        <ul className="space-y-2">
          {filteredTodos.map((todo, index) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <TodoItem todo={todo} />
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
}
