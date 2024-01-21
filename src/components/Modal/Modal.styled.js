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
   z-index: 1200;
`;

export const Content = styled.div`
   position: relative;
   width: 540px;
   padding: 40px;
   border-radius: 24px;
   background-color: ${({ theme }) => theme.colors.white};
`;

export const CloseBtn = styled.button`
   position: absolute;
   top: 16px;
   right: 16px;
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
   background-color: transparent;
   color: transparent;

   :hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.grey};
   }
`;

export const StyledSvg = styled.svg`
   width: 24px;
   height: 24px;
`;
export const Pic = styled.img`
   width: 460px;
   height: 248px;
   margin-bottom: 16px;
   border: none;
   border-radius: 14px;
`;

export const Text = styled.p`
   display: flex;
   margin: 0 0 8px;
   color: #121417;
   font-size: 18px;
   font-weight: 500;
   white-space: nowrap;
   overflow: hidden;
`;
export const Span = styled.span`
   margin-left: 4px;
   color: blue;
`;
export const InfoString = styled.span`
   display: block;
   min-width: 100%;
   margin-bottom: 4px;
   &:last-child {
      margin-bottom: 0;
   }
`;
export const InfoWrap = styled.div`
   margin-bottom: 16px;
`;
export const InfoSpan = styled.span`
   color: ${({ theme }) => theme.colors.spangray};
   &:nth-child(n + 2) {
      margin-left: 6px;
      padding-left: 6px;
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
   margin: 24px 0;
   display: flex;
   flex-direction: column;
`;
export const Conditions = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 8px;
`;

export const FeatureTitle = styled.p`
   margin: 0 0 8px;
   color: ${({ theme }) => theme.colors.lightblack};
   font-size: 14px;
   line-height: 1.42;
`;

export const Additions = styled.span`
   height: 32px;
   padding: 6px 14px;
   border-radius: 36px;
   letter-spacing: 0.4px;
   background: #f9f9f9;
   color: #363535;
`;

export const Values = styled.span`
   font-weight: 600;
`;

export const BtnRent = styled.a`
   display: inline-block;
   cursor: pointer;
   width: 168px;
   height: 44px;
   margin-top: 32px;
   padding: 12px;
   border: none;
   border-radius: 12px;
   font-size: 14px;
   font-weight: 600;
   line-height: 1.42;
   text-decoration: none;
   text-align: center;
   color: ${({ theme }) => theme.colors.white};
   background: ${({ theme }) => theme.colors.blue};
   &:hover,
   &:focus {
      background: ${({ theme }) => theme.colors.activeblue};
   }
`;
