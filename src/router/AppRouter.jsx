import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <>  
        
        <Routes>
            <Route path="login" element={<LoginPage/>} />


            {/* rutas privadas */}
            <Route path="/*" element={
              <PrivateRoute>
                  <HeroesRoutes/>
              </PrivateRoute>
            }/>
            {/* <Route path="/*" element={<HeroesRoutes/>}/> */}
        </Routes>
    </>
  )
}
