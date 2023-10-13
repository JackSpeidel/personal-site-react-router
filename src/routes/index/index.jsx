import './index.scss'
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="index">
            <motion.h1 className="index__heading">Welcome</motion.h1>
            <h3 className="index__body-text">Welcome to the digital realm of Jack Speidel. As you navigate this space, you'll unearth a collection of projects that reflect my journey in the ever-evolving world of technology. Each piece is a testament to the passion, dedication, and expertise I bring to the table. I invite you to delve in, explore, and discover the stories woven into every line of code and design element. Enjoy the exploration!</h3>
    </div>
  )
}

export default Index