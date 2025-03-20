import { useReducer } from "react";

function reducer(prevCount, action) {
  if(action === 'up'){
    return prevCount + 1;
  }else if(action === 'down'){
    return prevCount - 1;
  } else if (action === 'reset'){
    return 0;
  }
}

export default function ReducerUser(){
  const [ count, dispatch ] = useReducer(reducer, 0);
  // const 를 변경하기 위해서는 dispatch를 사용

  function down(){
    dispatch("down");
  }

  function up(){
    dispatch("up");
  }
  function reset(){
    dispatch("reset");
  }

  return(
    <div>
      <p>현재 내가 가지고 있는 사과 개수는 {count} 개</p>
      <input type="button" value="사과 1개 먹음" onClick={down}/>
      
      <input type="button" value="사과 1개 구매" onClick={up}/>
      
      <input type="button" value="사과 모두 먹음" onClick={reset}/>
    </div>
  );
}