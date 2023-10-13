import './aboutme.scss';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="about-me">
        <h1 className="about-me__heading">🙋‍♂️ About Me</h1>
        <div className="about-me__body-wrapper">
            <p className="about-me__body-text">             
                👨‍💻 I'm Jack Speidel, a full stack software developer currently pursuing a career in the industry.
            </p>
            <p className="about-me__body-text">
                💻 I have a thirst for knowledge that is never satisfied. After learning the basics of web development independently, I enrolled in BrainStation's bootcamp to deepen my experience and understanding of some of the most widely-used technologies in the industry, namely React, Node.js, Express, Sass, Next.js, Axios, Knex, & MySQL. After taking this first step, I am now seeking out work while developing my knowledge of Rails, Angular & Django.
            </p>
            <p className="about-me__body-text">
                👨‍💼 My previous career in the business community has prepared me to deal with the ups and downs of programming, how to understand client needs and, perhaps most importantly, the value of an open stream of communication between business and the client.
            </p>
            <p className="about-me__body-text">
                🌴 Outside of tech, I have a great number of interests including 🎸 music, 🎣 fishing, 📚 literature, 🎨 art and 
                🍛 cuisine. I love to chat about any of these topics as much as I love chatting about tech! Should anyone share these interests, please feel free to connect with me!
            </p>
        </div>
        <div className="about-me__links-wrapper">
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
    </div>
  )
}

export default AboutMe