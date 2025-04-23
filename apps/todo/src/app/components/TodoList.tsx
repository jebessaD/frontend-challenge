// apps/todo/src/app/components/TodoList.tsx
import { useTodos } from '../hooks/useTodo';
import { TodoItem } from './TodoItem';


export function TodoList() {
  const { todos } = useTodos();

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>

    </div>
  );
}