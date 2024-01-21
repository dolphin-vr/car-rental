import styled from "styled-components";

export const Wrapper = styled.main`
   position: absolute;
   left: 110px;
   top: 48px;
   width: 1220px;
   margin: 0 auto 20px;
   padding: 8px 20px;
   border: none;
   border-radius: ${({ theme }) => theme.radii.md};
   background-color: ${({ theme }) => theme.colors.white};
`;

