import { createContext, useContext, useEffect, useState } from "react";
import { config } from "../env";
import axios from "axios";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const backendUrl = config.backend_url
    const [auth,setAuth] = useState()

    useEffect(() => {
        const token = localStorage.getItem("accessToken")
        if(!token){
            setAuth(false)
        }
        else{
            axios.get(`${backendUrl}/auth`,{
                headers:{
                    authorization: `Bearer ${JSON.parse(token)}`,
                }
            }).then(res=>{
                setAuth(res.data.auth)
            }).catch(err=>{
                console.error(err)
            })
        }
    }, [])

    const logout = async () => {
		const token = localStorage.getItem("accessToken");
		if (token === null) {
			return;
		} else {
			localStorage.removeItem("accessToken");
			location.replace("/");
			return;
		}
	};

	return (
		<AuthContext.Provider value={{ auth,  logout }}>
			{children}
		</AuthContext.Provider>
	);
}


export const useAuth = () => {
	return useContext(AuthContext);
};