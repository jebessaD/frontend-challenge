import React from 'react';
import { Todo } from '../features/todos/todo.state';

type Props = {
  todo: Todo;
  isEditing: boolean;
  editedText: string;
  inputRef: React.RefObject<HTMLInputElement>;
  onTextClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export function TodoItemDisplay({
  todo,
  isEditing,
  editedText,
  inputRef,
  onTextClick,
  onChange,
  onBlur,
  onKeyDown,
}: Props) {
  return (
    <div className="flex-1 min-w-0">
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editedText}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          className="w-full rounded text-lg text-gray-800 outline-none"
        />
      ) : (
        <p
          onClick={onTextClick}
          className={`cursor-pointer font-semibold text-lg text-gray-800 font-medium ${
            todo.completed ? 'line-through text-gray-400' : ''
          }`}
        >
          {todo.text}
        </p>
      )}
    </div>
  );
}
