import styled from "styled-components";

export const Wrapper = styled.section`
   display: flex;
   justify-content: center;
   gap: ${({ theme }) => theme.spacing(9)};
   margin: 0 auto 48px;
`;

export const BrandSelector = styled.div`
	width: 224px;
`

export const PriceSelector = styled.div`
	width: 124px;
`

export const BtnClear = styled.button`
   cursor: pointer;
   height: 48px;
   margin-top: auto;
   padding: ${({ theme }) => theme.spacing(7)};
   border: none;
   border-radius: ${({ theme }) => theme.radii.lm};
   font-size: 14px;
   font-weight: 600;
   color: ${({ theme }) => theme.colors.white};
   background: ${({ theme }) => theme.colors.blue};
   transition: background-color ${({ theme }) => theme.effect.cubic};
   &:hover,
   &:focus {
      background: ${({ theme }) => theme.colors.activeblue};
   }
`;