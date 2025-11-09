import React, { useEffect } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// const API_URL = process.env.REACT_APP_API_URL;

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        // Backend URL se call
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/skinCareWebsiteUsers/logout`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include", // same as withCredentials: true
        });


        if (response.status === 200) {
          localStorage.removeItem('token');
          alert('Logout successful');
          navigate('/login');
        } else {
          alert('Logout failed');
        }
      } catch (error) {
        console.error('Logout error:', error);
        alert('Something went wrong while logging out');
      }
    };

    logoutUser();
  }, [navigate]);

  return (
    <div className="text-center text-gray-600 text-lg mt-10">
      Logging you out...
    </div>
  );
};

export default UserLogout;
