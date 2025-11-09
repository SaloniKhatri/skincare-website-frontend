import React, { useState, useContext, useEffect } from "react";
import Logo from "../assets/images/SkincareLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { formDataContext } from "../context/userContext.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { formData, setformData } = useContext(formDataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (formData) {
      navigate("/profile");
    }
  }, [formData, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        }
      );

      const data = await response.json();
      console.log("Login Response:", data);

      if (response.status === 200) {
        // ✅ backend direct user bhej raha hai (not data.user)
        setformData(data);
        localStorage.setItem("user", JSON.stringify(data));

        // Agar token nahi mil raha backend se, to ye line optional hai
        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        alert("Login successful!");
        navigate("/profile");
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Check credentials or try again.");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-gray-50 h-[800px] flex justify-center items-center">
      <div className="h-[500px] w-[600px] flex justify-center items-center border-transparent rounded-md shadow-xl bg-white">
        <div className="w-[500px]">
          <div className="flex justify-center">
            <img className="w-30 text-center" src={Logo} alt="Logo" />
          </div>
          <h1 className="text-3xl text-center font-semibold mb-3">Log In</h1>

          <form className="space-y-4" onSubmit={submitHandler}>
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
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="border border-gray-400 rounded-md p-2 w-full"
              placeholder="password"
            />

            <button
              type="submit"
              className="cursor-pointer text-xl text-white bg-pink-600 border rounded-lg p-3 w-full font-semibold mt-8"
            >
              Log In
            </button>

            <p className="text-center">
              New here?{" "}
              <Link to="/usersignup" className="text-blue-600">
                Create new Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
