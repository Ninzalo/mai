import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Equipment from "./components/Equipment";
import Projects from "./components/Projects";
import Partners from "./components/Partners";
import MapComponent from "./components/Map";
import Team from "./components/Team";

function App() {
  return (
    <div className="main">
      <Header />
      <About />
      <Services />
      <Equipment />
      <Projects />
      <Team />
      <Partners />
      <MapComponent />
    </div>
  );
}

export default App;
