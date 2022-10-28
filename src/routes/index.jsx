import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login"
import Error from "../pages/Error"
import Support from "../pages/Support";
import Home from "../pages/Home";
import {Routes, Route} from "react-router-dom";

function RouteMain() {

    return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="*" element={<Error replace to="/error"/>}></Route>
    </Routes>
    )
}

export default RouteMain