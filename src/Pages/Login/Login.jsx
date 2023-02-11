import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/button";
import styles from "./styles.module.css";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    console.log(username, password);
  };
  return (
    <main
      className={`h-[100vh] ${styles.container} flex items-center justify-center`}
    >
      <div className="w-[34.86%] h-[60%] bg-white p-10 px-19 font-bold min-w-[330px]">
        <p className="text-3xl text-green-500">Greenify</p>
        <p className="mt-[5.5%] text-lg font-medium text-gray-500">Login to your account</p>
        <div>
          <div className="mt-[4.1%]">
            <p className="font-light">Username</p>
            <input
              className="w-[90%] h-[50px] mt-[2.8%] border-gray-500 border-2 rounded-lg px-5 font-light"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="mt-[4.1%]">
            <p className="font-light">Password</p>
            <input
              className="w-[90%] h-[50px] mt-[2.8%] border-gray-500 border-2 rounded-lg px-5 font-light"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-7 w-[100%]">
          <div
            className="w-[100%] flex justify-center"
            onClick={() => {
              loginHandler();
            }}
          >
            <Button />
          </div>

          <p className="mt-4 font-light">
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
      </div>
    </main>
  );
};

export default Login;
