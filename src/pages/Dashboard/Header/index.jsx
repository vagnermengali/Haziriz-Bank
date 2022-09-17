import logo from "../../../assets/image/logo-letter.svg";
import { BsBoxArrowRight } from "react-icons/bs";
import { useContext } from "react";
import { HeaderContainer } from "./style";
import { Context } from "../../../providers/userContext";

function Header() {
  const { navigate } = useContext(Context);
  return (
    <HeaderContainer>
      <div className="headerContent">
        <div className="content">
          <div>
            <img src={logo} alt="logo-letter" />
          </div>
          <div className="btnContent">
            <button
              className="btnLogout"
              onClick={() => {
                window.localStorage.clear();
                navigate("/");
              }}
            >
              Log out 
              <BsBoxArrowRight />
            </button>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
