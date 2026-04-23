import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendMessage = async () => {
        try {
            await axios.post("https://web-applications-backend.onrender.com/api/contact", {
                name,
                email,
                message
            });
            alert("Message sent");
            setName("");
            setEmail("");
            setMessage("");
        } catch {
            alert("Error sending message");
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* Navbar */}
            <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
                <h1 className="text-xl font-bold text-blue-600">YesMotto Web</h1>

                <div className="space-x-4">
                    <Link
                        to="/login"
                        className="border px-4 py-1 rounded hover:bg-gray-100"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>

            {/*  Hero section */}
            <div className="bg-gradient-to-r from-blue-50 to-white py-16">
                <div className="flex flex-col md:flex-row items-center px-6 max-w-6xl mx-auto">

                    {/* Left */}
                    <div className="md:w-1/2">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                            Welcome to <span className="text-blue-600">Our Company</span>
                        </h1>

                        <p className="mt-4 text-gray-600">
                            We build modern web applications for your business growth.
                        </p>
                    </div>

                    {/* Right image */}
                    <div className="md:w-1/2 mt-10 md:mt-0">
                        <img
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
                            alt="hero"
                            className="rounded-lg shadow-xl w-full"
                        />
                    </div>
                </div>
            </div>

            {/*  About section */}
            <div className="py-16 bg-white">
                <div className="flex flex-col md:flex-row items-center px-6 max-w-6xl mx-auto">

                    {/* Image */}
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                            alt="about"
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>

                    {/* Text */}
                    <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
                        <h2 className="text-2xl font-bold text-blue-600">About Us</h2>

                        <p className="text-gray-600 mt-4">
                            We provide full-stack web development services using modern technologies.
                            Our team builds fast, secure, and scalable applications.
                        </p>

                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li>➤ Modern & Responsive Design</li>
                            <li>➤ Clean & Maintainable Code</li>
                            <li>➤ On-Time Delivery</li>
                            <li>➤ Client Satisfaction</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Contact */}
            <div className="py-16 bg-gray-100">
                <h2 className="text-2xl font-bold text-center text-blue-600">
                    Contact Form
                </h2>

                <div className="max-w-lg mx-auto mt-6 bg-white p-6 shadow-lg rounded">

                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border p-2 mb-3 rounded"
                        placeholder="Your Name"
                    />

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border p-2 mb-3 rounded"
                        placeholder="Your Email"
                    />

                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full border p-2 mb-3 rounded"
                        placeholder="Your Message"
                    />

                    <button
                        onClick={sendMessage}
                        className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700"
                    >
                        Send Message
                    </button>
                </div>
            </div>

            {/*  footer */}
            <div className="bg-blue-900 text-white text-center py-6">
                <p>© 2025 YesMotto Web. All Rights Reserved.</p>
            </div>

        </div>
    );
}

export default Home;
