import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [name,setName]=useState("");
  const navigate=useNavigate();

  useEffect(()=>{
    const token=localStorage.getItem("token");

    if(!token){
      navigate("/login");
      return;
    }

    axios.get("http://localhost:5000/api/dashboard",{
      headers:{ Authorization:"Bearer "+token }
    })
    .then(res=>setName(res.data.name))
    .catch(()=>navigate("/login"));

  },[]);

  const logout=()=>{
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow text-center w-full max-w-md">

        <h2 className="text-xl font-bold">Dashboard</h2>

        <p className="mt-4 text-lg">Welcome {name} </p>

        <button onClick={logout}
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Logout
        </button>

      </div>
    </div>
  );
}

export default Dashboard;