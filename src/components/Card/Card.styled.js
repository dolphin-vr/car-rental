import styled from "styled-components";

export const Item = styled.li`
	position: relative;
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

export const Pic = styled.img`
	border: none;
	border-radius: 14px;
`

export const Text = styled.p`
	margin: 0;
	color: #121417;
	font-size: 16px;
	font-weight: 500;
`
export const Span = styled.span`
	color: blue;
`
export const Price = styled.span`
	margin-left: auto;
`

export const Info =styled.span`
	color: ${({ theme }) => theme.colors.spangray};
`

export const BtnLearn = styled.button`
	cursor: pointer;
	border: none;
	border-radius: 12px;	
	font-size: 14px;
	font-weight: 600;
	color: white;
	background: #3470FF;
`