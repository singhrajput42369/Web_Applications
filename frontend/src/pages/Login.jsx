import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post("https://web-applications-backend.onrender.com/api/auth/login", {
        email, password
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">

        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input onChange={(e)=>setEmail(e.target.value)}
          className="border p-2 w-full mb-3 rounded" placeholder="Email" />

        <input type="password" onChange={(e)=>setPassword(e.target.value)}
          className="border p-2 w-full mb-3 rounded" placeholder="Password" />

        <button onClick={login}
          className="bg-green-500 text-white p-2 w-full rounded hover:bg-green-600">
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;
