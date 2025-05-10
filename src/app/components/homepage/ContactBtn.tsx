import { motion } from "framer-motion";

const ContactBtn = () => {
  const words:any = ["C", "o", "n", "t", "a", "c", "t"];

  const wordVariants = {
  };

  return (
    <div className="relative text-white text-2xl font-bold">
      {words.map((word:any, index:any):any => (
        <motion.span
          key={word + index}
          variants={wordVariants}
          animate="animate"
          initial="initial"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default ContactBtn;