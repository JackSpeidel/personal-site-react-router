import './footer.scss';
import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <div className="footer">
            <p className="footer__text">
                This app was built using
                <Link className="footer__links" to="https://react.dev/" target="_blank" rel="noreferrer" > React </Link>
                +
                <Link className="footer__links" to="https://vitejs.dev/" target="_blank" rel="noreferrer"> Vite </Link>
                for building,
                <Link className="footer__links" to="https://sass-lang.com/" target="_blank" rel="noreferrer"> Sass </Link>
                &
                <Link className="footer__links" to="https://www.framer.com/motion/" target="_blank" rel="noreferrer"> Framer Motion </Link>
                for styling and
                <Link className="footer__links" to="https://reactrouter.com/en/main" target="_blank" rel="noreferrer"> React Router Dom v6 </Link>
                for routing.
                The font used for this project is 
                <Link
                className="footer__links" 
                to="https://fonts.google.com/specimen/Eczar" 
                target="_blank"
                rel="noreferrer"
                > Eczar</Link>.
            </p>
        </div>
    )
}

export default Footer