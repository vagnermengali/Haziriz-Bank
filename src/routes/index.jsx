import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login"
import Error from "../pages/Error"
import {Routes, Route} from "react-router-dom";

function RouteMain() {

    return (
    <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home/:id" element={<Dashboard />}></Route>
        <Route path="*" element={<Error replace to="/error"/>}></Route>
    </Routes>
    )
}

export default RouteMain