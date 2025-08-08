import { Navigate } from "react-router-dom";


export function PrivateRouter({children}){
  return localStorage.getItem("token") ? children : <Navigate to = "/signin"/>
}