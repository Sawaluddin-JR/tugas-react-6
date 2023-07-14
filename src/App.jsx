import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import ListProject from "./components/ListProject"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <ListProject/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App