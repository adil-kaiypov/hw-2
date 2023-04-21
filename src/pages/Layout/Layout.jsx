import { Outlet } from "react-router-dom";
import classes from './Layout.module.css'
const Layout = () =>{
    return(
        <>
            <header>
                <h2>Welcome to the HomeWork-2</h2>
            </header>
            <Outlet/>
        </>
    )
};

export default Layout;
