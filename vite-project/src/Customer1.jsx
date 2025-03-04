import { MenuContext } from "./context";

export default function Customer1(){
  return (
    <MenuContext.Consumer>
      {(price) => <div>1번 고객님은 {price.아메리카노}</div>}
    </MenuContext.Consumer>
  );
}