import styled from "styled-components";

export const Wrapper = styled.main`
   width: 1180px;
   margin: 0 auto;
	 padding: 40px;
   background-color: transparent;
`;
export const Title = styled.h1`
	margin: 80px auto;
	text-align: center;
	font-size: 36px;
	/* font-weight: 600; */
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
   /* width: calc((100% - 16px) / 3); */
`;

export const Text = styled.p`
   font-size: 18px;
`;