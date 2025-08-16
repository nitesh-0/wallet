import axios from "axios"
import { useEffect, useState } from "react"

export const Balance = () => {
    const [userBalance, setUserBalance] = useState(0)

    useEffect(() => {
        axios.get("https://wallet-d2ob.onrender.com/api/v1/account/balance", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(response => {
            setUserBalance(response.data.amount)
        })
    }, [])

    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance is
        </div>
        <div className="font-bold ml-2 text-lg">
            Rs. {userBalance}
        </div>
    </div>
}