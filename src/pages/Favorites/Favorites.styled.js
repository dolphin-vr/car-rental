import styled from "styled-components";

export const Wrapper = styled.main`
   position: absolute;
   left: 110px;
   width: 1220px;
   height: calc(100hv - 48px);
   margin: 0 auto;
   padding: 20px;
   overflow-y: scroll;
   border: none;
   border-radius: ${({ theme }) => theme.radii.md};
   background-color: ${({ theme }) => theme.colors.white};
`;
