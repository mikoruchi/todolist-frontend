import { Route, Routes } from "react-router-dom"
import Home from "../Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import MainLayout from "../layouts/MainLayout.jsx";

function AppRoute(){    
    return(
        <Routes>
                <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
        </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default AppRoute;