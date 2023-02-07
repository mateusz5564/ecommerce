import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./navigation.styles.jsx";
import { useUserContext } from "../../context/user.context";
import { signOutUser } from "../../firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useCartContext } from "../../context/cart.context";
import { Nav, LogoContainer, Logo, NavLinks, NavLinkItem } from "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useUserContext();
  const { isCartOpen } = useCartContext();

  const handleSingOut = e => {
    signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <Nav>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        {currentUser && currentUser.email}
        <NavLinks>
          <NavLinkItem>
            <Link to="shop">Shop</Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link to="contact">Contact</Link>
          </NavLinkItem>
          <NavLinkItem>
            {currentUser ? (
              <span onClick={handleSingOut}>Sign Out</span>
            ) : (
              <Link to="auth">Sign In</Link>
            )}
          </NavLinkItem>
        </NavLinks>
        <CartIcon />
        {isCartOpen && <CartDropdown />}
      </Nav>
      {<Outlet />}
    </>
  );
};

export default Navigation;
