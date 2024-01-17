import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, MainNav, StyledLink, Wrapper } from "./SharedLayout.styled";

export const SharedLayout = ()=>{
   // const location = useLocation();
   return (
      <Wrapper>
      <Header>
         <MainNav>
            <li><StyledLink to="/" >Home</StyledLink></li>
            {/* <li><StyledLink to="movies" end>Movies</StyledLink></li> */}
         </MainNav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
         <Outlet/>
      </Suspense>
      </Wrapper>
   )
}
