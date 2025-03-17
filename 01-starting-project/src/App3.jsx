import Header2 from "./components/Header/Header2";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import { CORE_CONCEPTS } from './data';
import TabButton from "./components/TabButton";


function App() {
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
            <TabButton label='Components'/>
            <TabButton label='JSX'/>
            <TabButton label='Props'/>
            <TabButton label='State'/>
            </menu>
          동적인 버튼클릭의 결과물
        </section>
      </main>
    </div>
  );
}

export default App;
