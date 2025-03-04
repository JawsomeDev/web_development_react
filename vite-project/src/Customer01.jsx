import { useContext } from "react";
import { MenuContext } from "./context";
export default function Customer01(){
  const price = useContext(MenuContext);
  return <div>1번 고객님은 {price.아메리카노}
  원을 지불합니다.</div>
}