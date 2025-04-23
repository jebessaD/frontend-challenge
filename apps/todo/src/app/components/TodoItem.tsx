import { useState, useRef, useEffect } from "react";
import { Todo } from "../features/todos/todo.state";
import { useTodos } from "../hooks/useTodo";
import { Circle, CheckCircle2 } from "lucide-react";

export function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleClick = () => {
    setIsEditing(true);
    setEditedText(todo.text);
  };

  const handleBlur = () => {
    saveChanges();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      saveChanges();
    } else if (e.key === "Escape") {
      setIsEditing(false);
      setEditedText(todo.text);
    }
  };

  const saveChanges = () => {
    if (editedText.trim() !== "" && editedText !== todo.text) {
      editTodo(todo.id, editedText.trim());
    } else if (editedText.trim() === "") {
      setEditedText(todo.text);
    }
    setIsEditing(false);
  };

  return (
    <li className="flex items-center gap-3 py-1 border-b border-gray-100">
      <button
        onClick={() => toggleTodo(todo.id)}
        className="text-gray-400 hover:text-gray-600 focus:outline-none"
      >
        {todo.completed ? (
          <CheckCircle2 className="h-6 w-6 text-purple-700" />
        ) : (
          <Circle className="h-6 w-6 text-purple-700" />
        )}
      </button>
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="flex-1 rounded text-lg  text-gray-800 outline-none"
        />
      ) : (
        <span
          onClick={handleClick}
          className={`cursor-pointer font-semibold text-lg text-gray-800 ${todo.completed ? 'opacity-70 line-through' : ''}`}
        >
          {todo.text}
        </span>
      )}
    </li>
  );
}