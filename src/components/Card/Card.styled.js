import styled from "styled-components";

export const Item = styled.li`
	position: relative;
	width: 274px;
`

export const Like = styled.button`
	position: absolute;
	top: 14px;
	right: 14px;
	width: 18px;
	height: 18px;
	cursor: pointer;
	border: none;
	background-color: transparent;
`

export const StyledSvg = styled.svg`
   width: 16px;
   height: 16px;
   stroke: ${({ theme }) => theme.colors.blue};
`;

export const Pic = styled.img`
	margin-bottom: 14px;
	border: none;
	border-radius: 14px;
`

export const Text = styled.p`
	display: flex;
	/* width: 100%; */
	margin: 0 0 8px;
	color: #121417;
	font-size: 16px;
	font-weight: 500;
`
export const Span = styled.span`
	margin-left: 4px;
	color: blue;
`
export const Price = styled.span`
	display: inline-block;
	margin-left: auto;
	/* margin-right: 8px; */
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
	color: white;
	background: #3470FF;
`