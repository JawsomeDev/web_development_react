import './App.css' 
import {useState} from 'react';

function App(){
  const [drink, setDrink] = useState(0);

  const drinkWater = () => {
    setDrink(drink + 1);
    console.log(drink)
  };
  return (
    <>
      <p>
        오늘은 물을 <strong> {drink} </strong> 잔을 충전했습니다!!
      </p>
      <br/>
      <button onClick={drinkWater}></button>
    </>
  );
}

export default App;