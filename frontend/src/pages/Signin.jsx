import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 
  const navigate = useNavigate()

  async function handleClick(){
    const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
      email,
      password
    })

    localStorage.setItem("token", response.data.token)
    navigate("/dashboard")
  }

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Header label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox onChange={(e) => {
            setEmail(e.target.value)
          }} placeholder="harkirat@gmail.com" label={"Email"} />
          <InputBox onChange={(e) => {
            setPassword(e.target.value)
          }} placeholder="123456" label={"Password"} />
          <div className="pt-4">
            <Button onClick={handleClick} label={"Sign in"} />
          </div>
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
        </div>
      </div>
    </div>
  );
}
