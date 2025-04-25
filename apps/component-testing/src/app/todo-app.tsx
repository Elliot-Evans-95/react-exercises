import React, { useState } from 'react';

import styles from './todo-app.module.css';

type Todo = {
  id: number;
  text: string;
};

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: text.trim(),
    };

    setTodos([newTodo, ...todos]);
    setText('');
  };

  return (
      <div className={styles.container}>
        <h1>TODO App</h1>

        <div className={styles.inputRow}>
          <input
              type="text"
              value={text}
              placeholder="Add a task..."
              onChange={(e) => setText(e.target.value)}
              className={styles.input}
          />
          <button onClick={addTodo} className={styles.button}>Add</button>
        </div>

        <ul className={styles.list}>
          {todos.map(todo => (
              <li key={todo.id} className={styles.todoItem}>
              {todo.text}
              </li>
          ))}
        </ul>
      </div>
  );
}
