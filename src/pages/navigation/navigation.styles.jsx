import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as CrownSvg } from "../../assets/crown.svg";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgb(0 0 0 / 75%) 0px 5px 8px -9px;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  display: block;
  width: 70px;
  height: 100%;
  padding: 5px;
`;

export const Logo = styled(CrownSvg)`
  height: 100%;
  width: 100%;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin-left: auto;
`;

export const NavLinkItem = styled.li`
  padding: 10px 15px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;
