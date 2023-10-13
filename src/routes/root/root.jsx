import './root.scss';
import { 
    Outlet,
 } from "react-router-dom";
 import Nav from "../../components/nav/nav";
 import Footer from "../../components/footer/footer";

const Root = () => {

    return (
        <section className="app">
                <Nav className="app__nav" />  
                <Outlet className="app__outlet" />
                <Footer className="app__footer" />
        </section>
    )
}

export default Root