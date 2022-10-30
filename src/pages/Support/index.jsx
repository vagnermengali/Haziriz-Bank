import {
  Section,
  Div,
} from "./style";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import FormSupport from "./Form";

function Support() {

  return (
    <motion.div
    initial={{ opacity: 0.3 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
        <Section>
          <Header />
          <Div>
            <FormSupport/>
          </Div>
        </Section>
    </motion.div>
  );
}

export default Support;
