import {useRef} from 'react';
import './App.css';

function App(){
  const inputRef = useRef(null); // 1번 고정

  return (
    <>
    <input ref={inputRef} />
    <button onClick={() => inputRef.current.focus()}>입력</button>
    </>
  );
}

export default App;