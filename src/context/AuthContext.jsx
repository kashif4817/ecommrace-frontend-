import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
toast

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true)

    useEffect(() => {
        checkAuthStatus();
    }, [])


    const checkAuthStatus = () => {
        const token = localStorage.getItem('token')
        const userData = localStorage.getItem('user');

        if (token && userData) {
            setUser(JSON.parse(userData))
        }
        setLoding(false)
    }

    const signup = async (data) => {
        try {
            console.log("data from auth", data);
            const response = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.status === 200) {
                return {
                    success: true,
                    message: result.message || "Account created successfully!",
                    data: result.data
                };
            } else {
                return {
                    success: false,
                    message: result || "Signup failed",
                    error: result.error
                };
            }

        } catch (error) {
            console.log(error);
            return {
                success: false,
                message: "Network error. Please try again."
            };
        }
    };


    const login = async (formData) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(formData)
            });
       

            let result = await response.json();

            if (!response.ok) {
                return { success: false, message: result.message }  // Changed 'error' to 'message'
            }

            localStorage.setItem('token', result.accessToken)
            localStorage.setItem('user', JSON.stringify(result.user))
            setUser(result.user)

            return { success: true, user: result.user }


        } catch (error) {
            console.log("Login error:", error);
            return { success: false, message: "Network error" };
        }
    };


    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
    }

    const isAuthenticated = () => {
        return user !== null && localStorage.getItem('token') !== null
    }

    const value = {
        user,
        loding,
        login,
        logout,
        signup,
        isAuthenticated,
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

