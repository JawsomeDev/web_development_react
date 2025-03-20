import { useState } from "react";

export default function StateUse(){
  const [ count, setCount ] = useState(0);

  function down(){
    setCount(count - 1);
    console.log('사과를 1개 먹었습니다.');
  }

  function reset(){
    setCount(0);
    console.log('사과를 모두 먹었습니다.');
  }

  function up(){
    setCount(count + 1);
    console.log('사과를 1개 구매했습니다.');
  }

  return (
    <div>
      <p>현재 내가 가지고 있는 사과 개수는 {count} 개</p>
      <input type="button" value="사과 1개 먹음" onClick={down}/>
      
      <input type="button" value="사과 1개 구매" onClick={up}/>
      
      <input type="button" value="사과 모두 먹음" onClick={reset}/>
    </div>
  )
}