import { Route, Routes } from "react-router-dom"
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
          <Route path="review" element={<Review/>}/>
        </Route> */}
      </Route>
    </Routes>
      <GlobalStyle />
  </>
  )
}
