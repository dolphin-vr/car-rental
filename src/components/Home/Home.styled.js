import styled from "styled-components";
import bgr from "../../img/bgr.jpg";

export const Wrapper = styled.main`
   width: 1180px;
   margin: 0 auto;
   padding: 40px;
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
   width: 80%;
   margin: 0 auto 100px;
   display: flex;
   gap: 40px;
   font-size: 22px;
`;
export const ProsItem = styled.li`
   text-align: center;
`;

export const Text = styled.p`
   font-size: 18px;
`;