import { atom } from 'recoil';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

function localStorageEffect<T>(key: string) {
  return ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: T, _: T, isReset: boolean) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
}

export const todosState = atom<Todo[]>({
  key: 'todosState',
  default: [],
  effects: [localStorageEffect<Todo[]>('todosState')],
});