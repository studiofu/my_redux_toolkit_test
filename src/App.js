import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from './features/todo/todoSlice';

function App() {
  const todos = useSelector((state) => state.todos);

  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    // update the state here using addTodo action
    // action only receive one parameter, which is payload
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type='text'
          value={text}
          onChange={(e) => {
              setText(e.target.value);
              console.log(e.target.value);
            }
          }
        />
        <button>Add todo</button>
      </form>

      <div>
        <div>la la la</div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
