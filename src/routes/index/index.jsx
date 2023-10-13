import './index.scss'
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="index">
            <motion.h1 className="index__heading">Welcome</motion.h1>
            <h3 className="index__body-text">Welcome to Jack Speidel's online portfolio. Here, you'll find a selection of projects that highlight my experiences and skills in the tech industry. Each project showcases the dedication and knowledge I've applied over the years. Feel free to browse, learn, and get a sense of what I bring to the table. Thanks for stopping by!</h3>
    </div>
  )
}

export default Index