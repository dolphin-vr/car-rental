import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	width: 224px;
	display: flex;
	flex-direction: column;
`;
export const Label = styled.label`
	/* display: block; */
	display: flex;
	flex-direction: column;
	/* width: 100%; */
	margin-bottom: 8px;
	color: #8a8a89;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.28;
`;
export const Input = styled.input`
	height: 48px;
	margin-bottom: 4px;
	padding: 14px 64px 14px 18px;
	border-radius: 14px;
	background: #f7f7fb;
	color: #121417;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.11;
`;
export const BtnOpen = styled.button`
	position: absolute;
	top: 26px;
	right: 0;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	border-radius: 14px;
	background: transparent;
`
export const StyledSvg = styled.svg`
   width: 20px;
   height: 20px;
`;

const getDisplay = props => {
	if (props.isopen) {
		return "flex"
	} else {
		return 'none'
	}
}

export const Options = styled.ul`
	height: 272px;
	display: ${getDisplay};
	flex-direction: column;
	gap: 8px;
	padding: 14px 18px;
	border-radius: 14px;
	border: 1px solid rgba(18, 20, 23, 0.05);
	background: #FFF;
	box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
		margin-right: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.white};
  }
`
export const Option = styled.li`
	color: rgba(18, 20, 23, 0.20);
	font-size: 16px;
	font-weight: 500;
	line-height: 1.25;
`