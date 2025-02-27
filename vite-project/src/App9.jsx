import useTitle from "./script/useTitle";
import {useState} from 'react';
import './App.css';

function Counter(){
  const [count, setCount] = useState(0);
  useTitle(`당신은 ${count}번 클릭했습니다!`);

  return(
    <>
      <p>
        카운트 넘버 : {count}
      </p><br/>
      <button onClick={() => setCount(preCount => preCount +1)} > +1 수행 </button>
    </>
  );
}

export default Counter;