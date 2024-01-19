import { Route, Routes, Navigate } from "react-router-dom"
import { SharedLayout } from "./components/SharedLayout/SharedLayout"
import { GlobalStyle } from "./components/GlobalStyle"
import { HomePage } from "./pages/HomePage/HomePage"
import { Catalog } from "./pages/Catalog/Catalog"

export const App = () => {

  return (<>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path="catalog" element={<Catalog/>}/>
        {/* <Route  path="car/:id" element={<Car/>}>
          <Route path="desc" element={<Desc/>}/>
          <Route path="favorites" element={<Review/>}/>
        </Route> */}
      </Route>
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
      <GlobalStyle />
  </>
  )
}
