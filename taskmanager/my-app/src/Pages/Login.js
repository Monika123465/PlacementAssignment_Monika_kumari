import React from 'react'
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
 const [username, setUsername] = useState("eve.holt@reqres.in");
 const [password, setPassword] = useState("cityslicka");
 const [isLoading, setIsLoading] = useState(false);

 const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
   const { data } = await axios.post("https://reqres.in/api/login", {
    email: username,
    password: password,
   });
   localStorage.setItem("token", data.token);

   navigate("/");
  } catch (error) {
   alert(error.response.data.error);
  } finally {
   setIsLoading(false);
  }
 };

 return (
  <div>
   <form onSubmit={handleLogin}>
    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
    <button disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>
   </form>
  </div>
 );
};

export default Login;
