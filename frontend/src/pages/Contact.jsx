import { useState } from "react";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const send = async () => {
    await axios.post("https://web-applications-backend.onrender.com/api/contact", {
      name,
      email,
      message
    });

    alert("Message sent");
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 shadow-lg rounded">
      <h2 className="text-xl font-bold mb-4">Contact</h2>

      <input className="w-full border p-2 mb-3"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)} />

      <input className="w-full border p-2 mb-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} />

      <input className="w-full border p-2 mb-3"
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)} />

      <button onClick={send}
        className="w-full bg-orange-500 text-white p-2 rounded">
        Send
      </button>
    </div>
  );
}

export default Contact;
