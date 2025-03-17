import Header2 from "./components/Header/Header2";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import { CORE_CONCEPTS } from './data';
import TabButton from "./components/TabButton";
import { useState } from "react";


function App() {

  const [ selectedTopic, setSelectedTopic ] = useState('');

  function handleSelect(selectedTopic){
    // selectedButton = 'components' 'jsx', 'props', 'state'
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header2/>
      <main>
        <section id="core-concepts">
          <h2>핵심 개념들 of React</h2> 
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcepts 
                key={index} 
                img={concept.image} 
                title={concept.title} 
                description={concept.description} 
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>예시들</h2>
          <menu>
            <TabButton onSelect={handleSelect('굿나잇')}>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
            </menu>
          동적인 버튼클릭의 결과물
        </section>
      </main>
    </div>
  );
}

export default App;
