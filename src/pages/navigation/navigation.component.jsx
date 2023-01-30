import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <nav className="nav-container">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <ul className="nav-links-container">
          <li className="nav-link-item">
            <Link className="link" to="shop">Shop</Link>
          </li>
          <li className="nav-link-item">
            <Link className="link" to="contact">Contact</Link>
          </li>
          <li className="nav-link-item">
            <Link className="link" to="sign-in">Sign In</Link>
          </li>
        </ul>
        <div>cart</div>
      </nav>
      {<Outlet />}
    </>
  );
};

export default Navigation;
