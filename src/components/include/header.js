import '../../assets/css/include/header.css';
import logo from "../../assets/img/new/eyeverse-logo.gif";

function Header(props) {
  return (
    <div className="inside-header">
      <div className="header-content">
          <img src={logo} alt="" className="main-logo" />
      </div>
    </div>
  );
}

export default Header;