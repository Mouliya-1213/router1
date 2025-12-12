import { Routes,Route,Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App(){

 return(
  // to integrate with github
  <div basename="/router1"> 
 <nav>
   <Link to="/">Home</Link>|
    <Link to="/About">About</Link>|
    <Link to="/Contact">Contact</Link>
 </nav>
  <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/about" element={<About />}/>
   <Route path="/contact" element={<Contact />}/>
  </Routes>
</div>
 );
}

export default App;
