import {useState, useRef} from 'react';
import './App.css'

export default function App(){
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);
  return (
    <div className='App'>
      <button onClick={() => setStateCount(preCount => preCount + 1)}>
        State 버튼
      </button>
      <br/><br/><br/>
      <button onClick={() => refCount.current += 1}>
        Ref 버튼
      </button>
      <br/><br/><br/>
      <div>useState Count : {stateCount}</div>
      <div>useRef Count : {refCount.current}</div>

    </div>
  )
}
