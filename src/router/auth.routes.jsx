import { Routes, Route } from "react-router-dom";

import SingUp from "../Pages/SingUp";
import SingIn from "../Pages/Singln";

export default function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SingIn />} />
            <Route path="/register" element={<SingUp />} />
        </Routes>
    )
}