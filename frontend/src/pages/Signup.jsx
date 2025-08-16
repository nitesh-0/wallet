import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export function Signup() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  async function handleClick(){
    const response = await axios.post("https://wallet-d2ob.onrender.com/api/v1/user/signup", {
      email,
      password,
      firstName,
      lastName
    })

    const token = response.data.token
    localStorage.setItem("token", token)

    navigate("/dashboard")

  }


  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Header label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox onChange = {(e) => {
            setFirstName(e.target.value)
          }} label={"First Name"} placeholder={"John"} />

          <InputBox onChange={(e) => {
            setLastname(e.target.value)
          }} label={"Last Name"} placeholder={"Doe"} />

          <InputBox onChange={(e) => {
            setEmail(e.target.value)
          }} label={"Email"} placeholder={"john123@gmail.com"} />

          <InputBox onChange={(e) => {
            setPassword(e.target.value)
          }} label={"Password"} placeholder={"123456"} />

          <div className="pt-4">
            <Button onClick={handleClick} label={"Sign up"} />
          </div>

          <BottomWarning label={"Already have an account?"} buttonText={"sign in"} to={"/signin"}/>
        </div>
      </div>
    </div>
  );
}
