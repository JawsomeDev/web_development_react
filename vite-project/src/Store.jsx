import { useContext } from "react";
import { OpenContext } from "./context";

export default function Store(){
  const { isOpen, setIsOpen } = useContext(OpenContext);
  
  const ClickOpen = () => {
    setIsOpen(true);
  };

  const ClickClose = () => {
    setIsOpen(false);
  }

  return (
    <div>
      가게문이 {isOpen ? "열렸습니다" : "닫혔습니다"}
      <br/>
      <button onClick={ClickOpen}>가게문 열기</button>
      <br/>
      <button onClick={ClickClose}>가게문 닫기</button>
    </div>
  )

}