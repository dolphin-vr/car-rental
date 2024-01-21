import styled from "styled-components";

export const Wrapper = styled.div`
	width: 860px;
	display: flex;
	gap: 18px;
	margin: 0 auto 48px;
`

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
   padding: 14px;
   border: none;
   border-radius: 12px;
   font-size: 14px;
   font-weight: 600;
   color: ${({ theme }) => theme.colors.white};
   background: ${({ theme }) => theme.colors.blue};

   &:hover,
   &:focus {
      background: ${({ theme }) => theme.colors.activeblue};
   }
`;