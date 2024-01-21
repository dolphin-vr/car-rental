import styled from "styled-components";

export const Item = styled.li`
	position: relative;
	width: 274px;
`
const getStroke = props => props.$isliked ? ({ theme }) => theme.colors.blue : ({ theme }) => theme.colors.white;
const getFill = props => props.$isliked ? ({ theme }) => theme.colors.blue : ({ theme }) => theme.colors.gray;
const getFillOpac = props => props.$isliked ? 1 : 0.3;

export const Like = styled.button`
	position: absolute;
	top: 14px;
	right: 14px;
	width: 18px;
	height: 18px;
	cursor: pointer;
	border: none;
	background-color: transparent;
   stroke: ${getStroke};
	 fill: ${getFill};
	 fill-opacity: ${getFillOpac};
`
export const StyledSvg = styled.svg`
   width: 18px;
   height: 18px;
`;

export const Pic = styled.img`
	width: 274px;
	height: 268px;
	margin-bottom: 14px;
	border: none;
	border-radius: 14px;
`
const getFontSz = props =>{
	if (props.$len > 26) return "14px";
	if (props.$len > 21) return "15px";
	return "16px";
}
export const Text = styled.p`
	display: flex;
	margin: 0 0 8px;
	color: #121417;
	font-size: ${getFontSz};
	font-weight: 500;
	white-space: nowrap;
	overflow: hidden;
`
export const Span = styled.span`
   margin-left: 4px;
   color: ${({ theme }) => theme.colors.blue};
`;
export const Price = styled.span`
	display: inline-block;
	margin-left: auto;
`

export const InfoString =styled.span`
	display: block;
	min-width: 100%;
	height: 18px;
	margin-bottom: 4px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`
export const InfoSpan = styled.span`
	color: ${({ theme }) => theme.colors.spangray};
	&:nth-child(n+2){
		margin-left: 6px;
		padding-left: 6px;
		border-left: 1px solid ${({ theme }) => theme.colors.pipegray};
	}
`

export const BtnLearn = styled.button`
   cursor: pointer;
   width: 100%;
   margin-top: 24px;
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