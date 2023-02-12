import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import DashboardElement from "../../Components/DashboardElement/DashboardElement";
import { useAuth } from "../../Utils/AuthContext";
import {  useNavigate } from "react-router-dom";
import { config } from "../../env";
import axios from "axios";


const Dashboard = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const backendUrl = config.backend_url
    const [websites,setWebsites] = useState()
    const token = localStorage.getItem("accessToken")

    
    useEffect(()=>{
        axios.get(`${backendUrl}/api/websites`,{
            headers:{
                authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then(res=>{
            console.log(res.data);
            setWebsites(res.data.message)
            if(!auth.auth){
                navigate("/login")

            }
        })
    },[])
    
        return (
            <main
            className={`min-h-[100vh] ${styles.container} flex justify-center items-start`}
            >
                    <section className="w-[90%] min-h-[90vh] bg-[rgba(102,102,102,0.4)] mt-10 backdrop-blur-md p-10 rounded-md flex flex-col items-center gap-9">
                        <nav className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-5">
                                <img src="assets/logo.png" alt="Our logo" className="w-[100px]"/>
                                <h1 className="text-4xl text-green-200">Greenify</h1>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <h3 className="text-white">Hi, {auth?.auth?.username}</h3>
                                <button onClick={auth.logout} className="bg-green-600 text-white text-xs py-1 px-3 rounded-md">Logout</button>
                            </div>
                        </nav>
                        <h1 className="text-xl tracking-wider">Your digital carbon footprint</h1>
                        <div className="bg-[rgba(0,0,0,0.2)] w-full grid grid-cols-5 p-5 rounded-md">
                            <h1 className="text-md place-self-center text-white">Visited On</h1>
                            <h1 className="text-md col-span-2 place-self-center text-white">Website</h1>
                            <h1 className="text-md text-white">Carbon Emissions (in g)</h1>
                            <h1 className="text-md place-self-center text-white">Data (in MB)</h1>
                        </div>
                        <div className="w-full flex flex-col items-center gap-7">
                            {websites && websites.map((website,idx)=>{
                                const BtoMB = Math.round(((website.bytes/(1024*1024)) + Number.EPSILON) * 100000) / 100000
                                return(
                                    <DashboardElement initiator={website.initiator} date={new Date(website.visitTimes)} bytes={BtoMB} emission ={website.emissions} key={idx}/>
                                )
                            })}
                        </div>
                    </section>
                </main>
            );//Math.round(((website.bytes/(1024*1024)) + Number.EPSILON) * 100000) / 100000
            //(website.bytes/(1024*1024))
};

export default Dashboard;