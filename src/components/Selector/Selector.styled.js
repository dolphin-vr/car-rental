import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
`;
export const Label = styled.label`
   margin-bottom: ${({ theme }) => theme.spacing(4)};
   color: ${({ theme }) => theme.colors.gray};
   font-size: 14px;
   font-weight: 500;
   line-height: 1.28;
`;
export const Input = styled.input`
   height: 48px;
   padding: 14px 40px 14px 18px;
   outline: none;
   border: none;
   border-radius: ${({ theme }) => theme.radii.md};
   background: ${({ theme }) => theme.colors.darkwhite};
   color: ${({ theme }) => theme.colors.lightblack};
   font-size: 18px;
   font-weight: 500;
   line-height: 1.11;
   &::-webkit-outer-spin-button,
   &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }
`;
export const BtnOpen = styled.button`
	position: absolute;
	top: 38px;
	right: 16px;
	width: 20px;
	height: 20px;
	padding: 0;
	cursor: pointer;
	border: none;
	background: transparent;
`;
export const StyledSvg = styled.svg`
	width: 20px;
	height: 20px;
`;

const getDisplay = props => {
	if (props.$isopen) {
		return "flex"
	} else {
		return 'none'
	}
}

export const Options = styled.ul`
   display: ${getDisplay};
   position: absolute;
   top: 78px;
   left: 0;
   z-index: 9;
   width: 100%;
   max-height: 272px;
   flex-direction: column;
   gap: ${({ theme }) => theme.spacing(2)};
   padding: ${({ theme }) => theme.spacing(7)} ${({ theme }) => theme.spacing(9)};
   border-radius: ${({ theme }) => theme.radii.md};
   border: 1px solid rgba(18, 20, 23, 0.05);
   background: ${({ theme }) => theme.colors.white};
   box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
   overflow-y: scroll;
   &::-webkit-scrollbar {
      width: 8px;
      margin-right: 8px;
   }
   &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.scrollgray};
      border-radius: 4px;
      margin-right: 8px;
   }
   &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.white};
   }
`;
export const Option = styled.li`
   cursor: context-menu;
   padding: ${({ theme }) => theme.spacing(2)};
   color: rgba(18, 20, 23, 0.2);
   font-size: 16px;
   font-weight: 500;
   line-height: 1.25;
   &:hover {
      background-color: ${({ theme }) => theme.colors.darkwhite};
   }
`;