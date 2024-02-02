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
   top: 10px;
   right: 10px;
   width: 22px;
   height: 22px;
   padding: ${({ theme }) => theme.spacing(1)};
   cursor: pointer;
   border: none;
   border-radius: ${({ theme }) => theme.radii.sm};
   background-color: transparent;
   stroke: ${getStroke};
   fill: ${getFill};
   fill-opacity: ${getFillOpac};
   transition: stroke ${({ theme }) => theme.effect.cubic};
   &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.darkwhite};
   }
   &:hover {
      stroke: ${({ theme }) => theme.colors.activeblue};
   }
`;
export const StyledSvg = styled.svg`
   width: 18px;
   height: 18px;
`;

export const Pic = styled.img`
   width: 274px;
   height: 268px;
   margin-bottom: ${({ theme }) => theme.spacing(7)};
   border: none;
   border-radius: ${({ theme }) => theme.radii.md};
`;
const getFontSz = props =>{
	if (props.$len > 26) return "14px";
	if (props.$len > 21) return "15px";
	return "16px";
}
export const Text = styled.p`
   display: flex;
   margin: 0 0 ${({ theme }) => theme.spacing(4)};
   color: ${({ theme }) => theme.colors.lightblack};
   font-size: ${getFontSz};
   font-weight: 500;
   white-space: nowrap;
   overflow: hidden;
`;
export const Span = styled.span`
   margin-left: ${({ theme }) => theme.spacing(2)};
   color: ${({ theme }) => theme.colors.blue};
`;
export const Price = styled.span`
	display: inline-block;
	margin-left: auto;
`

export const InfoString = styled.span`
   display: block;
   min-width: 100%;
   height: 18px;
   margin-bottom: ${({ theme }) => theme.spacing(2)};
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;
export const InfoSpan = styled.span`
   color: ${({ theme }) => theme.colors.spangray};
   &:nth-child(n + 2) {
      margin-left: ${({ theme }) => theme.spacing(3)};
      padding-left: ${({ theme }) => theme.spacing(3)};
      border-left: 1px solid ${({ theme }) => theme.colors.pipegray};
   }
`;

export const BtnLearn = styled.button`
   cursor: pointer;
   width: 100%;
   margin-top: ${({ theme }) => theme.spacing(12)};
   padding: ${({ theme }) => theme.spacing(7)};
   border: none;
   border-radius: ${({ theme }) => theme.radii.lm};
   font-size: 14px;
   font-weight: 600;
   color: ${({ theme }) => theme.colors.white};
   background: ${({ theme }) => theme.colors.blue};
   transition: background-color ${({ theme }) => theme.effect.cubic};

   &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.darkwhite};
   }
   &:hover,
   &:focus {
      background: ${({ theme }) => theme.colors.activeblue};
   }
`;