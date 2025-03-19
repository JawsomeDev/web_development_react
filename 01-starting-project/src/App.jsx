import Header2 from "./components/Header/Header2";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import { CORE_CONCEPTS } from './data';
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data_updated";


function App() {

  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedTopic){
    // selectedButton = 'components' 'jsx', 'props', 'state'
    console.log(selectedTopic);

    setSelectedTopic(selectedTopic);
  }
  // React에서는 변수의 데이터에 HTML 코드를 삽입할 수 있음.
  let tabContent = ( 
  <div id="tab-content">
  <p>Please Select a Topic.</p>
  </div>
  );
  // 버튼을 클릭했을 때 해당 내용을 참조하여 내용이 출력되어야 함.

  if(selectedTopic) { // selectedTopic에 값이 무엇이라도 있기만 하면 이하의 코드가 실행됨.
    tabContent = (
      <>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}  
          </code>
        </pre>
      </>
    )
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
            <TabButton onSelect={ () => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={ () => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={ () => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={ () => handleSelect('state')}>State</TabButton>
            </menu>
            
          <div id="tab-content">
          {tabContent}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
