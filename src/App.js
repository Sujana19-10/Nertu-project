import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Publication from "./routes/Publication";

import Contact from "./routes/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contact/>}/>
            {/* <Route path="/staff" element={</>}/> */}
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/publications" element={<Publication/>}/>

            
          </Routes>
          <Navbar/>
          
        
      
      
    </div>
  );
}
