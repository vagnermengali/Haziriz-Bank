import { Section, Div, Img } from "./style";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import image from "../../assets/image/Frame.svg";
import Header from "../../components/Header";
import FormRegister from "./Form";

function Register() {
  return (
    <Section>
      <Header />
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Div>
          <Img className="img" src={image} alt="" />
          <FormRegister />
        </Div>
      </motion.div>
    </Section>
  );
}

export default Register;
