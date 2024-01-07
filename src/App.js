import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/project" element={<Projects/>}/>
                  <Route path="/skills" element={<Experience/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
