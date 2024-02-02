import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.header`
   position: fixed;
   top: 0;
   left: 50%;
   transform: translateX(-50%);
   z-index: 1100;
   width: 1220px;
   height: 48px;
   margin: 0 auto;
   padding: 0 ${({ theme }) => theme.spacing(10)};
   display: flex;
   /* gap: ${({ theme }) => theme.spacing(26)}; */
   align-items: center;
   border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
   background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledSvg = styled.svg`
   width: 48px;
   height: 48px;
   fill: inherit;
`;

export const Logo = styled(Link)`
   display: flex;
   align-items: center;
   gap: ${({ theme }) => theme.spacing(8)};
   padding: 0 ${({ theme }) => theme.spacing(4)};
   font-size: 24px;
   font-weight: 600;
   text-decoration: none;
   fill: ${({ theme }) => theme.colors.blue};
   transition: color ${({ theme }) => theme.effect.cubic}, background-color ${({ theme }) => theme.effect.cubic};
   &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.gray};
   }
   &:hover {
      color: ${({ theme }) => theme.colors.activeblue};
      background-color: ${({ theme }) => theme.colors.scrollgray};
      fill: ${({ theme }) => theme.colors.activeblue};
   }
   &.active {
      outline: none;
   }
`;
export const MainNav = styled.ul`
   margin: 0 auto;
   display: flex;
   align-items: center;
   gap: ${({ theme }) => theme.spacing(2)};
   font-size: 18px;
`;

export const NavItem = styled.li`
`;

export const StyledLink = styled(NavLink)`
   display: inline-block;
   padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
   font-weight: 500;
   text-decoration: none;
   color: ${({ theme }) => theme.colors.lightblack};
   transition: color ${({ theme }) => theme.effect.cubic}, background-color ${({ theme }) => theme.effect.cubic};
   &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.gray};
   }
   &:hover {
      color: ${({ theme }) => theme.colors.activeblue};
      background-color: ${({ theme }) => theme.colors.pipegray};
   }
   &.active {
      outline: none;
      color: ${({ theme }) => theme.colors.blue};
   }
`;

export const Contact = styled.a`
   margin-left: auto;
   display: flex;
   align-items: center;
   gap: ${({ theme }) => theme.spacing(4)};
   padding: ${({ theme }) => theme.spacing(2)};
   font-size: 18px;
   font-weight: 500;
   text-decoration: none;
   color: ${({ theme }) => theme.colors.lightblack};
   &:visited {
      color: ${({ theme }) => theme.colors.lightblack};
   }
   &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.gray};
   }
   &:hover {
      color: ${({ theme }) => theme.colors.activeblue};
      background-color: ${({ theme }) => theme.colors.pipegray};
   }
`;