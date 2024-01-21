import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Wrapper } from "./SharedLayout.styled";
// import { Header, MainNav, StyledLink, Wrapper } from "./SharedLayout.styled";

export const SharedLayout = ()=>{
   // const location = useLocation();
   return (
      <Wrapper>
         <Header/>
         <Suspense fallback={<div>Loading page...</div>}>
            <Outlet/>
         </Suspense>
      </Wrapper>
   )
}
