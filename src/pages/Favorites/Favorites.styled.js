import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Empty = styled.p`
   margin: ${({ theme }) => theme.spacing(32)} auto;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 0.8px;
   text-align: center;
`;

export const StyledLink = styled(NavLink)`
   color: ${({ theme }) => theme.colors.blue};
   transition: color ${({ theme }) => theme.effect.cubic};
   &:visited {
      color: ${({ theme }) => theme.colors.blue};
   }
   &:hover {
      color: ${({ theme }) => theme.colors.activeblue};
   }
`;