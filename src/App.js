import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo,fetchContent,tryAsyncCall } from './features/todo/todoSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent())
  },[dispatch]);

  const todos = useSelector((state) => state.todos);

  const [text, setText] = useState('');

  const addTodoHandler = (event) => {
    event.preventDefault();
    // update the state here using addTodo action
    // action only receive one parameter, which is payload
    dispatch(addTodo(text));
    setText('');
  };


  const isLoading = useSelector((state) => state.todos.isLoading)

  if(isLoading) return (<div>Loading...</div>)

  return (
    <div>
      <div>
        hahaa
        <button onClick={() => dispatch(tryAsyncCall())}> xxx </button>
      </div>
      <form onSubmit={addTodoHandler}>
        <input
          type='text'
          value={text}
          onChange={(e) => {
              setText(e.target.value);
              //console.log(e.target.value);
            }
          }
        />
        <button>Add todo</button>
      </form>

      <div>
        <div>la la la</div>
        <ul>
          {todos.content.map((val) => (
            <li key={val.id}>
              <span>{val.text}</span>
              <span>{val.title}</span>
            </li>
          ))}
        </ul>
      </div>


    </div>
  );
}

export default App;
