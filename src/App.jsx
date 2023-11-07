import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";

/* Longer way */
/* function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
} */

/* Less code with destructuring */
function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

/* Another way ^ */
// export default function CoreConcept({ ...concept }) {
// ...concept groups multiple values into a single object
// Use concept.title, concept.description etc.
// Or destructure the concept object: const { title, description, image } = concept;
//}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              /* Longer way of writing it */
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* Using spread operator to make code more succint */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <br></br>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
