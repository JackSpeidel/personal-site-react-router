import './root.scss';
import { 
    Outlet,
 } from "react-router-dom";
 import Nav from "../../components/nav/nav";

const Root = () => {

    return (
        <>
            <Nav />  
            <Outlet />
        </>
    )
}

export default Root