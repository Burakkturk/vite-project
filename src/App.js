import "./App.css";
import "bulma/css/bulma.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import CCsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column"></div>
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente optio nihil, libero minima quaerat dignissimos iure, odio pariatur obcaecati assumenda earum voluptatem neque iste!
    "
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente optio nihil, libero minima quaerat dignissimos iure, odio pariatur obcaecati assumenda earum voluptatem neque iste!
"
              />
            </div>

            <div className="column">
              <Course
                image={CCsharp}
                title="Komple Web"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente optio nihil, libero minima quaerat dignissimos iure, odio pariatur obcaecati assumenda earum voluptatem neque iste!
    "
              />
            </div>

            <div className="column">
              <Course
                image={KompleWeb}
                title="Front-End"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente optio nihil, libero minima quaerat dignissimos iure, odio pariatur obcaecati assumenda earum voluptatem neque iste!
    "
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
