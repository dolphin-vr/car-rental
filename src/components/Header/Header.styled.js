import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Fixer = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   z-index: 1100;
   width: 100%;
`;
export const Wrapper = styled.header`
   position: relative;
   width: 1180px;
   height: 48px;
   margin: 0 auto;
   display: flex;
   gap: ${({ theme }) => theme.spacing(26)};
   align-items: center;
   border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
   padding: 0 ${({ theme }) => theme.spacing(2)};
   background-color: ${({ theme }) => theme.colors.white};
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
`
export const StyledSvg = styled.svg`
   width: 48px;
   height: 48px;
   stroke: ${({ theme }) => theme.colors.blue};
	 fill: blue;
`;

export const MainNav = styled.ul`
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const NavItem = styled.li`
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
  font-weight: 500;
  text-decoration: none;
  color: black;

  &:hover {
    color: ${({ theme }) => theme.colors.activeblue};
    background-color: ${({ theme }) => theme.colors.pipegray};
  }
  &.active {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Contact = styled.a`
  margin-left: auto;
   display: flex;
   align-items: center;
   gap: ${({ theme }) => theme.spacing(4)};
   font-size: 18px;
   font-weight: 500;
   text-decoration: none;
`;