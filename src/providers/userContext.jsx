
import { useNavigate } from "react-router-dom";
import { createContext} from "react";

export const Context = createContext();

const ProviderUser = ({children}) => {
    const navigate = useNavigate()

    return (
        <Context.Provider value={{ navigate }}>
            {children}
        </Context.Provider>
    )
}

export default ProviderUser