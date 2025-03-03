import {useRef} from 'react';

export default function App(){

  const textInput = useRef(null); // textInput {current : null}

  const ClickBtn = () => {
    console.log('클릭!');
  };

  const handleClickBtn = () => {
    console.log('useRef 클릭');
    textInput.current.focus(); // useRef가 가리키는 input 태그에 포커스 이벤트
  }

  return (
    <div>
      <input type="text"/>
      <input type='button' value="ref X" onClick={ClickBtn}/>
      <br/>
      <input type="text" ref={textInput}/>
      <input type='button' value="ref 0" onClick={handleClickBtn}/>
    </div>
  );
}