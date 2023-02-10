import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./navigation.styles.jsx";
import { signOutUser } from "../../firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { Nav, LogoContainer, Logo, NavLinks, NavLinkItem } from "./navigation.styles.jsx";
import { currentUserSelector } from "../../store/user/user.selector.js";
import { selectIsCartOpen } from "../../store/cart/cart.selector.js";

const Navigation = () => {
  const currentUser = useSelector(currentUserSelector);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const setCurrentUser = user => dispatch({ type: "SET_USER", payload: user });

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
