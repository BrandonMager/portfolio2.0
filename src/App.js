
import './App.css';
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Home from "./components/Home"
import Contact from "./components/Contact"
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/projects" element = {<Projects/>}/>
        <Route path = "/skills" element = {<Skills/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
