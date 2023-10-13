import './aboutme.scss';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="about-me">
        <h1 className="about-me__heading">About Me</h1>
        <h3 className="about-me__body-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat amet et magni corrupti quaerat placeat a, ea sapiente velit provident quos consectetur corporis ab facilis. Consequatur eligendi facilis nulla sit?</h3>

        <Link className="about-me__links" to="https://drive.google.com/file/d/1_75olfq7E3vyL5bosVejNC9eKSvLcvNj/view?usp=drive_link" target="_blank" rel="noreferrer">
            <div className="about-me__link-wrapper">
                <motion.h3 whileHover={{ scale: 1.1, color: "#a0d8fd" }} whileTap={{ scale: 0.9 }}>Resume</motion.h3>
            </div>
        </Link>
        <Link className="about-me__links" to="https://drive.google.com/file/d/15ziK1RmKbAY4aStMUqymX4REX_hkpPnR/view?usp=drive_link" target="_blank" rel="noreferrer">
            <div className="about-me__link-wrapper">
                <motion.h3 whileHover={{ scale: 1.1, color: "#a0d8fd" }} whileTap={{ scale: 0.9 }}>Cover Letter</motion.h3>
            </div>
        </Link>
    </div>
  )
}

export default AboutMe