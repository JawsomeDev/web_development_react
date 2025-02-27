
import {useState} from "react";
import './App.css';

function App6(){
  const [ count1, setCount1] = useState(0);
  const [ count2, setCount2 ] = useState(0);

  const increment = () => {
    setCount1(count1 + 1); // 코드가 여기까지 실행됐을 때 count1 = 1이고 count2 = 0인가? -> false 
    setCount2(count2 + 1);
    // 여기까지 count1 / count2가 진짜 업데이트 되고 나서 컴포넌트를 리렌더링하게 됩니다.

  }

  return (
    <>
      <p>카운트 넘버1 : {count1}</p>
      <p>카운트 넘버2 : {count2}</p>

      <br/>

      <button onClick={increment}>증가</button>
    </>
  );
}

export default App6;