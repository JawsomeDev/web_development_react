import Header2 from "./components/Header/Header2";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from './data';

function CoreConcepts(props){
  return(
    <li>
      <img src={props.img} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

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
      </main>
    </div>
  );
}

export default App;
