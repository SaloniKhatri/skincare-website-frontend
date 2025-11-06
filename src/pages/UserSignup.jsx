import React, { useState } from "react";
import Logo from "../assets/images/SkincareLogo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const Signup = () => {
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${API_URL}/api/users/register`,
        formData,
        { withCredentials: true }
      );

      if (response.status === 201) {
        alert("User created successfully!");
        navigate("/");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("🚫 Registration failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed.");
    }

    setname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-gray-50 h-[800px] flex justify-center items-center">
      <div className="h-[600px] w-[600px] flex justify-center items-center border-transparent rounded-md shadow-xl bg-white">
        <div className="w-[500px]">
          <div className="flex justify-center">
            <img className="w-30 text-center" src={Logo} alt="Logo" />
          </div>
          <h1 className="text-3xl text-center font-semibold mb-3">Sign Up</h1>
          <form onSubmit={submitHandler} className="space-y-4">
            <label className="text-gray-600 font-semibold">Name</label>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
              type="text"
              className="border border-gray-400 rounded-md p-2 w-full"
              placeholder="Enter your name"
            />

            <label className="text-gray-600 font-semibold">Email</label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="border border-gray-400 rounded-md p-2 w-full"
              placeholder="email@example.com"
            />

            <label className="text-gray-600 font-semibold">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              className="border border-gray-400 rounded-md p-2 w-full"
              placeholder="password"
            />

            <button
              type="submit"
              className="cursor-pointer text-xl text-white bg-pink-600 border rounded-lg p-3 w-full font-semibold mt-8"
            >
              Create Account
            </button>

            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
