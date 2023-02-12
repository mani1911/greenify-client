import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import { config } from "../../env";
import { useAuth } from "../../Utils/AuthContext";
const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const backendUrl = config.backend_url

  const handleLogin = async(e) => {
    e.preventDefault()
    const res = await axios.post(`${backendUrl}/auth/login`,{
      username,
      password
    })
    const data = res.data
    if(data.status!==200){
      alert(data.message)
    }
    else{
      localStorage.setItem("accessToken",JSON.stringify(data.token))
      navigate("/")
    }
  };

  useEffect(()=>{
    if(auth.auth){
      navigate("/")
    }
  },[auth])
  
  return (
    <main
      className={`h-[100vh] ${styles.container} flex items-center justify-center`}
    >
      <form className="w-[34.86%] h-[60%] bg-white p-10 px-19 font-bold min-w-[330px] flex flex-col gap-4" onSubmit={handleLogin}>
        <div className="flex items-center gap-3">
          <img src="assets/logo.png" alt="Our logo" className="w-[50px]" />
          <h1 className="text-2xl text-green-500">Greenify</h1>
          
        </div>
        <p className="mt-[5.5%] text-sm font-medium text-gray-500">Login to your account</p>
        <div>
          <div className="mt-[4.1%]">
            <p className="font-light">Username</p>
            <input
              className="w-[90%] h-[50px] mt-[2.8%] border-gray-500 border-2 rounded-lg px-5 font-light"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
              minLength={5}
            />
          </div>
          <div className="mt-[4.1%]">
            <p className="font-light">Password</p>
            <input
              className="w-[90%] h-[50px] mt-[2.8%] border-gray-500 border-2 rounded-lg px-5 font-light"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              required
              minLength={5}
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-3 w-[100%]">
          <div
            className="w-[100%] flex justify-center"
          >
            <button className="bg-green-400 text-white rounded-md w-[70%] h-[50px] flex justify-center items-center cursor-pointer hover:bg-green-500">Login</button>
          </div>

          <p className="mt-4 font-light text-center">
            Don't have an Account?{" "}
            <span
              className="text-green-500 cursor-pointer underline"
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign Up
            </span>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Login;
