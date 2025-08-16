import axios from "axios"
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"


export const Appbar = () => {
    const [me, setMe] = useState({})
    const navigate = useNavigate()

    const location = useLocation()

    function handleLogout(){
        localStorage.removeItem("token")
        navigate("/signin")
    }

    useEffect(() => {
        axios.get("https://wallet-d2ob.onrender.com/api/v1/user/me", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(response => {
            setMe(response.data.selfUser)
        })
    }, [])



    const buttonConfig = {
      "/dashboard": [
        <button onClick={handleLogout} className="cursor-pointer hover:underline text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">Logout</button>,

        <div className="relative">
          <div className="group relative rounded-full h-12 w-12 bg-gray-700 text-white flex items-center justify-center text-xl mr-[15px] cursor-pointer">
            {me?.firstName?.[0]?.toUpperCase()}          
          </div>
      </div>
      ], 

      "/send": [
      <button onClick={() => {navigate("/dashboard")}} className="cursor-pointer hover:underline text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">Go to Dashboard</button>,

      <button onClick={handleLogout} className="cursor-pointer hover:underline text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">Logout</button>,

        <div className="relative">
          <div className="group relative  rounded-full h-12 w-12 bg-gray-700 text-white flex items-center justify-center text-xl mr-[15px] cursor-pointer">
            {me?.firstName?.[0]?.toUpperCase()}          
          </div>
        </div>
      ], 

      "/landing": [
      <button className="hover:underline cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => {navigate("/signin")}}>Login</button>
      ]
    }


    const currentButtons = buttonConfig[location.pathname] || []

    return (
    <div className="shadow h-14 flex justify-between items-center px-4">
      <div className="text-2xl font-extrabold ml-[15px]">PayTM App</div>

      {/* Avatar with Hover Popup */}
      <div className="flex justify-between items-center gap-[10px]">
         {currentButtons.map((item) => item)}
        
      </div>
      
    </div>
  );
}