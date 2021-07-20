
import { createContext, useState, useEffect } from "react";
import router, { useRouter } from "next/router";
import { API_URL, NEXT_URL } from "@/config/index";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    // useEffect(()=> checkUserLoggedIn(),[])

    return (
        <AuthContext.Provider value={{ user, error}}>
          {children}
        </AuthContext.Provider>
      );
}


export default AuthContext;