import styled from "styled-components";
import bgr from "../../img/bgr.jpg";
import sprite from "../../assets/sprite.svg"

export const Wrapper = styled.main`
   width: 1220px;
   margin: 0 auto;
   /* padding: 40px; */
`;
export const Hero = styled.section`
   display: block;
   height: 400px;
   background-image: url(${bgr});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
`;
export const Info = styled.section`
	padding: 40px;
`
export const Title = styled.h1`
	margin: 80px auto;
	text-align: center;
	font-size: 36px;
`

export const Title2 = styled.h2`
   width: 80%;
   margin: 0 auto 40px;
   text-align: center;
   font-size: 22px;
`;

export const ProsList = styled.ul`
   margin: 0 auto;
   display: flex;
   gap: 80px;
   font-size: 22px;
`;
export const ProsItem = styled.li`
   width: calc((100% - 80px) / 3);
   padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(24)};
   text-align: center;
   border-radius: ${({ theme }) => theme.radii.md};
   background-color: ${({ theme }) => theme.colors.scrollgray};
   &::before {
      content: "";
      display: block;
      height: 112px;
      margin-bottom: 8px;
      /* background-color: ${({ theme }) => theme.colors.selgray}; */
      border-radius: 4px;
      background-repeat: no-repeat;
      /* background-position: center; */
      /* background-size: 96px;
      background-size: contain;
      background-size: cover; */
   }
   &:nth-child(1):before {
      background-position: 88px 0px;
      background-size: 132px;
      background-image: url(${sprite}#24_7);
   }
   &:nth-child(2):before {
      background-position: center top;
      background-image: url(${sprite}#advice);
   }
   &:nth-child(3):before {
      background-position: center top;
      background-size: 118px;
      background-image: url(${sprite}#travel);
   }
`;

export const Text = styled.p`
   font-size: 18px;
   text-align: justify;
   text-indent: 3%;
`;