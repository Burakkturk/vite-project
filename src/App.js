import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import CCsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
function App() {
  return (
    <div className="App">
      <Course
        image={Angular}
        title="Angular"
        description="afedhdlşhinkrfdoikxjniofxknox pxdkhğpdxkhbğp ipxdkhnğpdzkbnğp
    "
      />
      <Course
        image={Bootstrap}
        title="Bootstrap"
        description="afedhdlşhinkrfdoikxjniofxknox pxdkhğpdxkhbğp ipxdkhnğpdzkbnğp
"
      />
      <Course
        image={CCsharp}
        title="Komple Web"
        description="afedhdlşhinkrfdoikxjniofxknox pxdkhğpdxkhbğp ipxdkhnğpdzkbnğp
    "
      />
      <Course
        image={KompleWeb}
        title="Front-End"
        description="afedhdlşhinkrfdoikxjniofxknox pxdkhğpdxkhbğp ipxdkhnğpdzkbnğp
    "
      />
    </div>
  );
}

export default App;
