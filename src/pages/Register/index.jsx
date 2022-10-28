import {
  Section,
  Div,
  Img
} from "./style";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import image from "../../assets/image/Frame.svg";
import Header from "../../components/Header";
import FormLogin from "./Form";

function Login() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <>
        <Section>
          <Header />
          <Div>
            <Img className="img" src={image} alt="" />
            <FormLogin/>
          </Div>
        </Section>
      </>
    </motion.div>
  );
}

export default Login;
