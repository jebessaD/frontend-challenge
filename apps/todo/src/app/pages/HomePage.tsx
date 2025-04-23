// apps/todo/src/app/pages/HomePage.tsx
import { TodoList } from '../components/TodoList';
import { TodoForm } from '../components/TodoForm';

export function HomePage() {
  return (
    <div className="container mx-auto px-2 md:px-20 bg-white mt-10  font-mono ">
      <TodoList />
      <TodoForm />
    </div>
  );
}