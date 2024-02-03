import styled from "styled-components";

export const BackDrop = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${({ theme }) => theme.colors.spangray};
   z-index: 100;
`;

export const Content = styled.div`
   position: relative;
   width: 540px;
   padding: ${({ theme }) => theme.spacing(20)};
   border-radius: ${({ theme }) => theme.radii.lg};
   background-color: ${({ theme }) => theme.colors.white};
`;

export const CloseBtn = styled.button`
   position: absolute;
   top: 12px;
   right: 12px;
   width: 28px;
   height: 28px;
   padding: ${({ theme }) => theme.spacing(1)};
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
   border-radius: ${({ theme }) => theme.radii.sm};
   background-color: transparent;
   color: transparent;
   transition: background-color ${({ theme }) => theme.effect.cubic};
   &:hover,
   &.active {
      background-color: ${({ theme }) => theme.colors.selgray};
   }
`;

export const StyledSvg = styled.svg`
   width: 24px;
   height: 24px;
`;
export const Pic = styled.img`
   width: 460px;
   height: 248px;
   margin-bottom: ${({ theme }) => theme.spacing(8)};
   border: none;
   border-radius: ${({ theme }) => theme.radii.md};
`;

export const Text = styled.p`
   display: flex;
   margin: 0 0 ${({ theme }) => theme.spacing(4)};
   color: ${({ theme }) => theme.colors.lightblack};
   font-size: 18px;
   font-weight: 500;
   white-space: nowrap;
   overflow: hidden;
`;
export const Span = styled.span`
   margin-left: ${({ theme }) => theme.spacing(2)};
   color: ${({ theme }) => theme.colors.blue};
`;
export const InfoString = styled.span`
   display: block;
   min-width: 100%;
   margin-bottom: ${({ theme }) => theme.spacing(2)};
   &:last-child {
      margin-bottom: 0;
   }
`;
export const InfoWrap = styled.div`
   margin-bottom: ${({ theme }) => theme.spacing(8)};
`;
export const InfoSpan = styled.span`
   color: ${({ theme }) => theme.colors.spangray};
   &:nth-child(n + 2) {
      margin-left: ${({ theme }) => theme.spacing(3)};
      padding-left: ${({ theme }) => theme.spacing(3)};
      border-left: 1px solid ${({ theme }) => theme.colors.pipegray};
   }
`;

export const Descript = styled.p`
   width: 100%;
   margin: 0;
   color: ${({ theme }) => theme.colors.lightblack};
   font-size: 14px;
   line-height: 1.42;
`;
export const FeatureWrap = styled.div`
   margin: ${({ theme }) => theme.spacing(12)} 0;
   display: flex;
   flex-direction: column;
`;
export const Conditions = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: ${({ theme }) => theme.spacing(4)};
`;

export const FeatureTitle = styled.p`
   margin: 0 0 ${({ theme }) => theme.spacing(4)};
   color: ${({ theme }) => theme.colors.lightblack};
   font-size: 14px;
   line-height: 1.42;
`;

export const Additions = styled.span`
   height: 32px;
   padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(7)};
   border-radius: ${({ theme }) => theme.radii.xl};
   letter-spacing: 0.4px;
   background: ${({ theme }) => theme.colors.lightgray};
   color: ${({ theme }) => theme.colors.mediumgray};
`;

export const Values = styled.span`
   font-weight: 600;
   color: ${({ theme }) => theme.colors.blue};
`;

export const BtnRent = styled.a`
   display: inline-block;
   cursor: pointer;
   width: 168px;
   height: 44px;
   margin-top: ${({ theme }) => theme.spacing(16)};
   padding: ${({ theme }) => theme.spacing(6)};
   border: none;
   border-radius: ${({ theme }) => theme.radii.lm};
   font-size: 14px;
   font-weight: 600;
   line-height: 1.42;
   text-decoration: none;
   text-align: center;
   color: ${({ theme }) => theme.colors.white};
   background: ${({ theme }) => theme.colors.blue};
   transition: background-color ${({ theme }) => theme.effect.cubic};
   &:hover,
   &:focus {
      background: ${({ theme }) => theme.colors.activeblue};
   }
`;
