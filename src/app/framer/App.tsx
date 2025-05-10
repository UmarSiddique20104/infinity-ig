import "./template/style.css"
import { motion } from "framer-motion";

export default function App() {
  return (
<motion.div
    className="box"
    // initial={{ y: 800, opacity: 0 }}
    // animate={{ y: 0, opacity: 1 }}
    // exit={{ y: 1000, opacity: 1 }}
    // transition={{
    //   type: "spring",
    //   stiffness: 100,
    //   damping: 100,
    // }}

    whileHover={{
        scale: 2.1,
        textShadow: "0px 0px 4px gray"
      }}

  >
    
  </motion.div>
  );
}
