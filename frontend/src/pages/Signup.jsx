import { useState } from "react";
import axios from "axios";

function Signup() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const signup = async () => {
    await axios.post("http://localhost:5000/api/auth/signup", {
      name,email,password
    });
    alert("Signup done");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">

        <h2 className="text-xl font-bold mb-4 text-center">Signup</h2>

        <input onChange={(e)=>setName(e.target.value)}
          className="border p-2 w-full mb-3 rounded" placeholder="Name" />

        <input onChange={(e)=>setEmail(e.target.value)}
          className="border p-2 w-full mb-3 rounded" placeholder="Email" />

        <input type="password" onChange={(e)=>setPassword(e.target.value)}
          className="border p-2 w-full mb-3 rounded" placeholder="Password" />

        <button onClick={signup}
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600">
          Signup
        </button>

      </div>
    </div>
  );
}

export default Signup;