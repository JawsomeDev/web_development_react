import { useState } from "react";
import Customer01 from "./customer01";
import Customer02 from "./customer02";
import Store from './Store';
import { OpenContext } from "./context";
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <OpenContext.Provider value={{ isOpen, setIsOpen}}>
        <Store/>
        <Customer01/>
        <Customer02/>
      </OpenContext.Provider>
    </div>
  );
}
export default App;