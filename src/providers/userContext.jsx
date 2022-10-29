import loadingAnimatedOne from "../assets/animation/6eXT5DYgvu.json";
import loadingAnimatedTwo from "../assets/animation/lf20_dfwrq0mo.json";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

export const Context = createContext();

const ProviderUser = ({ children }) => {
  const [isDisableEmail, setIsDisableEmail] = useState(false);
  const [isDisablePassword, setIsDisablePassword] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const navigate = useNavigate();

  const [animateState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const handleChangeDisableEmail = (e) => {
    if (e.length > 12) {
      setIsDisableEmail(true);
    } else {
      setIsDisableEmail(false);
    }
  };

  const handleChangeDisablePassword = (e) => {
    if (e.length > 8) {
      setIsDisablePassword(true);
    } else {
      setIsDisablePassword(false);
    }
  };

  const handleChangeDisableLogin = () => {
    if (isDisableEmail && isDisablePassword) {
        setIsDisable(false);
    } else {
        setIsDisable(true);
    }
  };

  const defaultOptionsOne = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimatedOne,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimatedTwo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Context.Provider
      value={{
        navigate,
        animateState,
        defaultOptionsOne,
        defaultOptionsTwo,
        handleChangeDisableEmail,
        handleChangeDisablePassword,
        isDisable,
        handleChangeDisableLogin,
        isDisableEmail,
        isDisablePassword,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProviderUser;
