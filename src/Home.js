import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

function Home() {

  const navigate = useNavigate()
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome home!</p>
      {/* <button onClick={()=> navigate('lg')}>abs</button> */}
      < LoginForm/>
    </div>
  );
}

export default Home;
