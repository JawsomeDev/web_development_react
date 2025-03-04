import { MenuContext } from "./context";
export default function Customer2(){
  return (
    <MenuContext.Consumer>
      {(price) => <div>2번 고객님은 {price.카페라떼}</div>}
    </MenuContext.Consumer>
  );
}