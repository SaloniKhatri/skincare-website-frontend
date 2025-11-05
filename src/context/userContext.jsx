import { createContext, useState, useEffect } from "react";

// 1️⃣ Create context
export const formDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [formData, setformData] = useState({
    email: '',
    name: ''
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
     const user = localStorage.getItem("user");
    if (token && user) {
      setformData(JSON.parse(user)); // Restore login state
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setformData({ token }); // Optional: fetch profile data from backend
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token"); // Token delete
     localStorage.removeItem("user");
    setformData(null); // Clear context
  };


  return (
    <div>
      <formDataContext.Provider value={{ formData, setformData, logout }}>
        {children}
      </formDataContext.Provider>
    </div>
  )
}

export default UserContext