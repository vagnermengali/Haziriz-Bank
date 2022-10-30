import { ContainerSection } from "./style";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { Context } from "../../providers/userContext";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

function Error() {
  const { animateState, defaultOptionsOne } = useContext(Context);

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContainerSection>
        <h1>Oops, something went wrong...</h1>
        <div>
          <Lottie
            className="img"
            options={defaultOptionsOne}
            isStopped={animateState.isStopped}
            isPaused={animateState.isPaused}
          />
        </div>
        <Link className="link" to="/">
          Back to main page ㅤ<BsArrowRight />
        </Link>
      </ContainerSection>
    </motion.div>
  );
}

export default Error;
