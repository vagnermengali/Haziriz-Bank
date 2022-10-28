import logo from "../../assets/image/logo-letter.svg";
import { HeaderContainer } from "./style";
import { Link } from "react-router-dom";

function Header() {

  return (
    <HeaderContainer>
      <div className="headerContent">
        <div className="content">
          <div>
            <img src={logo} alt="logo-letter" />
          </div>
          <nav>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/register">Register</Link>
          <Link className="link" to="/support">Support</Link>
          </nav>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
