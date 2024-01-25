import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Empty = styled.p`
   /* width: 30%; */
	 margin: 64px auto;
   font-size: 20px;
   font-weight: 500;
	 letter-spacing: 0.8px;
	 text-align: center;
`;

export const StyledLink = styled(NavLink)`
   /* display: inline-block; */
   /* padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)}; */
   /* font-weight: 500;
  text-decoration: none; */
   color: ${({ theme }) => theme.colors.blue};
`;