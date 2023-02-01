import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { useUserContext } from "../../context/user-context";
import { signOutUser } from "../../firebase/firebase";

const Navigation = () => {
  const { user, setUser } = useUserContext();

  const handleSingOut = e => {
    signOutUser();
    setUser(null);
  };

  return (
    <>
      <nav className="nav-container">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        {user && user.email}
        <ul className="nav-links-container">
          <li className="nav-link-item">
            <Link className="link" to="shop">
              Shop
            </Link>
          </li>
          <li className="nav-link-item">
            <Link className="link" to="contact">
              Contact
            </Link>
          </li>
          <li className="nav-link-item">
            {user ? (
              <span className="link" onClick={handleSingOut}>
                Sign Out
              </span>
            ) : (
              <Link className="link" to="auth">
                Sign In
              </Link>
            )}
          </li>
        </ul>
        <div>cart</div>
      </nav>
      {<Outlet />}
    </>
  );
};

export default Navigation;
