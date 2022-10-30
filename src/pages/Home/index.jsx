import { Section } from "./style";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import Header from "../../components/Header";

function Support() {
  return (
    <Section>
      <Header />
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
      ></motion.div>
    </Section>
  );
}

export default Support;
