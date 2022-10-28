import loadingAnimatedOne from "../assets/animation/6eXT5DYgvu.json"
import loadingAnimatedTwo from "../assets/animation/lf20_dfwrq0mo.json"
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

export const Context = createContext();

const ProviderUser = ({children}) => {
    const navigate = useNavigate()

    const [animateState] = useState({
        isStopped: false,
        isPaused: false,
    })

    const defaultOptionsOne = {
        loop: true,
        autoplay: true, 
        animationData: loadingAnimatedOne,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptionsTwo = {
        loop: true,
        autoplay: true, 
        animationData: loadingAnimatedTwo,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Context.Provider value={{ navigate, animateState, defaultOptionsOne, defaultOptionsTwo}}>
            {children}
        </Context.Provider>
    )
}

export default ProviderUser