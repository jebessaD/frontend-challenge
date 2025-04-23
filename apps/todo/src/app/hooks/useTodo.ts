// apps/todo/src/app/features/todos/useTodos.ts
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { todosState } from '../features/todos/todo.state';

export const useTodos = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return { todos, addTodo, toggleTodo, editTodo };
};