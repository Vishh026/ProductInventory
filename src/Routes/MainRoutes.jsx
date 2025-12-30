import { Route, Routes } from "react-router-dom"
import Products from "../components/Pages/Products"
import About from "../components/Pages/About"
import CreateProduct from "../components/Pages/CreateProduct"
import UpdateProduct from "../components/Pages/UpdateProduct"




const MainRoutes = () => {
  return (
    
    <Routes>
        <Route path = "/" element= {<Products/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/create" element = {<CreateProduct />} />
        <Route path= '/products/:id' element = {<UpdateProduct />}  />
    </Routes>
  )
}

export default MainRoutes
