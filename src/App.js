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
      <div className="container">
        <div className="columns">
          <div className="column"></div>
          <div className="column">
            <Course
              image={Angular}
              title="Angular"
              description="afedhdlşhinkrfdoikxjniofxknox pxdkhğpdxkhbğp ipxdkhnğpdzkbnğp
    "
            />
          </div>
          <div className="column">
            <Course
              image={Bootstrap}
              title="Bootstrap"
              description="afedhdlşhinkrfdoikxjniofxknox pxdkhğpdxkhbğp ipxdkhnğpdzkbnğp
"
            />
          </div>

          <div className="column">
            <Course
              image={CCsharp}
              title="Komple Web"
              description="afedhdlşhinkrfdoikxjniofxknox pxdkhğpdxkhbğp ipxdkhnğpdzkbnğp
    "
            />
          </div>

          <div className="column">
            <Course
              image={KompleWeb}
              title="Front-End"
              description="afedhdlşhinkrfdoikxjniofxknox pxdkhğpdxkhbğp ipxdkhnğpdzkbnğp
    "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
