import { Route, Routes } from "react-router-dom"
import Products from "../components/Pages/Products"
import About from "../components/Pages/About"
import Home from "../components/Pages/Home"
import Profile from "../components/Pages/Profile"




const MainRoutes = () => {
  return (
    
    <Routes>
        <Route path = "/" element= {<Home />} />
        <Route path="/about" element= {<About/>} />
        <Route path= "/products" element= {<Products />} />
        <Route path="/profile" element = {<Profile />} />
    </Routes>
  )
}

export default MainRoutes
