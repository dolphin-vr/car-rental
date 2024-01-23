import styled from "styled-components";
import { BtnClear } from "../Filter/Filter.styled";

export const Wrapper = styled.div`
	/* width: 320px; */
   /* display: flex; */
`;
export const Form = styled.form`
   display: flex;
   flex-direction: column;
	 gap: 8px;
   color: #8a8a89;
   font-size: 14px;
   font-weight: 500;
   line-height: 1.28;
`;
export const Placer = styled.label`
   position: relative;
   height: 48px;
	 display: inline-block;
	 /* display: block; */
`;
export const Span = styled.span`
   position: absolute;
   top: 0;
   left: 0;
   z-index: 1;
   padding: 14px 0 14px 20px;
   color: #121417;
   font-size: 18px;
   font-weight: 500;
   line-height: 1.11;
   background-color: transparent;
`;
const Input = styled.input`
   width: 160px;
   height: 48px;
   outline: none;
   border: none;
   background: ${({ theme }) => theme.colors.darkwhite};
   color: #121417;
   font-size: 18px;
   font-weight: 500;
   line-height: 1.11;
`;
export const FromInput = styled(Input)`
   padding: 14px 14px 14px 68px;
   border-radius: 14px 0px 0px 14px;
   border-right: 1px solid rgba(138, 138, 137, 0.2);
`;
export const ToInput = styled(Input)`
   padding: 14px 14px 14px 48px;
   border-radius: 0px 14px 14px 0px;
`;

export const BtnSearch = styled(BtnClear)`
margin-left: 18px;
	padding: 14px 44px;
`