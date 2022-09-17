import logo from "../../../assets/image/logo-letter.svg";
import { HeaderContainer } from "./style";

function Header() {
  return (
    <HeaderContainer>
      <div className="headerContent">
        <div className="content">
          <div>
            <img src={logo} alt="logo-letter" />
          </div>
          <div className="btnContent">
            <button className="btnLogout">Inicio</button>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
