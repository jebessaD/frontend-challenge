import { atom } from 'recoil';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// 👇 Put the effect function here
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

// 👇 Recoil atom with the effect
export const todosState = atom<Todo[]>({
  key: 'todosState',
  default: [
    { id: '1', text: 'Milk', completed: false },
    { id: '2', text: 'Eggs', completed: false },
    { id: '3', text: 'Cheese', completed: false }
  ],
  effects: [localStorageEffect<Todo[]>('todosState')],
});
