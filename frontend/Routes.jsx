import { Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import Admin from "./src/pages/Admin";
import ShowCarForCategory from "./src/pages/carCategories/ShowCarCategory";
import categorySelected from "./src/components/VehicleCategories"

const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/admin" element={<Admin />} />
            <Route path="/carros/showCarForCategory/:categorySelected" element={<ShowCarForCategory/>} />
            
            <Route path="/carros/showCarForCategory/" element={<ShowCarForCategory/>} />
        </Routes>
    )
}

export default MainRoutes