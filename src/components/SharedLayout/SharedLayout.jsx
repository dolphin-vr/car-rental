import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const SharedLayout = ()=>{
   return (
      <>
         <Header/>
         <Suspense fallback={<div>Loading page...</div>}>
            <Outlet/>
         </Suspense>
      </>
   )
}
