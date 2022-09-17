import loadingAnimatedOne from "../assets/animation/6eXT5DYgvu.json"

import { createContext, useState } from "react";

export const Context = createContext();

const ProviderUser = ({children}) => {
  
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

    return (
        <Context.Provider value={{ animateState, defaultOptionsOne }}>
            {children}
        </Context.Provider>
    )
}

export default ProviderUser