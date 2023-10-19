import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="bg-gray-200 min-h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;