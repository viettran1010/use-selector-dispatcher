import './App.css';

import { useSelector, useDispatch } from 'react-redux'

function App() {

  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{counter}</h1>
        <button onClick={()=> dispatch({type:'INCREMENT'})}>Add</button>
      </header>
    </div>
  );
}

export default App;
