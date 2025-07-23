import { Route, Routes } from "react-router-dom"
import Home from "../App.jsx";
import About from "../About.jsx";
import Contact from "../contact.jsx";

function AppRoute(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}

export default AppRoute;