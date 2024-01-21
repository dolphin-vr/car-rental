import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
position: relative;
   /* top: 0; */
   /* left: 0; */
   /* position: fixed; */
   width: 1440px;
   height: 100vh;
   margin: 0 auto;
   /* overflow: hidden; */
   /* padding: 20px; */
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
  padding: 4px;
`;

export const MainNav = styled.ul`
  display: flex;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.lightblack};

  &.active {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const ErrMsg = styled.div`
  margin: ${({theme}) => theme.spacing(8)} auto;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`