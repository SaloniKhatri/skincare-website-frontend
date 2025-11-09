import { createContext, useState, useEffect } from "react";

// 1️⃣ Create context
export const formDataContext = createContext();

const UserContext = ({ children }) => {
  const [formData, setformData] = useState(null);

  // 🔹 Restore user from localStorage safely
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      if (token && storedUser && storedUser !== "undefined") {
        const parsedUser = JSON.parse(storedUser);
        setformData(parsedUser); // ✅ Restore user
      } else {
        setformData(null);
      }
    } catch (err) {
      console.error("Error parsing user:", err);
      localStorage.removeItem("user");
    }
  }, []);

  // 🔹 Logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setformData(null);
  };

  return (
    <formDataContext.Provider value={{ formData, setformData, logout }}>
      {children}
    </formDataContext.Provider>
  );
};

export default UserContext;
