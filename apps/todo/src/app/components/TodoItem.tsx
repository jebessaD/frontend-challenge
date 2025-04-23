import { useState, useRef, useEffect } from 'react';
import { Clock, Trash2 } from 'lucide-react';
import { TodoItemDisplay } from './TodoItemDisplay';
import { TodoItemActions } from './TodoItemActions';
import { Todo } from '../features/todos/todo.state';
import { useTodos } from '../hooks/useTodo';
import { formatShortTimeAgo } from '../lib/formatTimeAgo';

export function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, editTodo, deleteTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const formattedDate = todo.createdAt
    ? formatShortTimeAgo(new Date(todo.createdAt))
    : 'Just now';

  const saveChanges = () => {
    if (editedText.trim() && editedText !== todo.text) {
      editTodo(todo.id, editedText.trim());
    } else if (!editedText.trim()) {
      setEditedText(todo.text);
    }
    setIsEditing(false);
  };

  return (
    <li className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-all group">
      <div className="p-4 flex items-center gap-3">
        <TodoItemActions
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />

        <TodoItemDisplay
          todo={todo}
          isEditing={isEditing}
          editedText={editedText}
          inputRef={inputRef}
          onTextClick={() => {
            setIsEditing(true);
            setEditedText(todo.text);
          }}
          onBlur={saveChanges}
          onChange={(e) => setEditedText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') saveChanges();
            else if (e.key === 'Escape') {
              setIsEditing(false);
              setEditedText(todo.text);
            }
          }}
        />

        <div className="ml-auto text-xs text-gray-400 flex items-center group-hover:-translate-x-1 transition-transform duration-500">
          <Clock className="h-3 w-3 mr-1" />
          <span>{formattedDate}</span>
        </div>
        <div className="lg:hidden group-hover:flex items-center transition-opacity duration-300">
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-gray-400 hover:text-red-500 p-1 rounded-lg transition-transform duration-200 hover:scale-110 active:scale-95"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </li>
  );
}
