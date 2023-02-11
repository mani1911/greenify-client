import React from "react";
import styles from "./styles.module.css";
import DashboardElement from "../../Components/DashboardElement/DashboardElement";

const Dashboard = () => {

    const websites = [
        {
            initiator:"https://google.com",
            date:new Date(),
            bytes:30,
            emission:21.21,
        },
        {
            initiator:"https://google.com",
            date:new Date(),
            bytes:30,
            emission:21.21,
        },
        {
            initiator:"https://google.com",
            date:new Date(),
            bytes:30,
            emission:21.21,
        },
        {
            initiator:"https://google.com",
            date:new Date(),
            bytes:30,
            emission:21.21,
        },
        {
            initiator:"https://google.com",
            date:new Date(),
            bytes:30,
            emission:21.21,
        },
        {
            initiator:"https://google.com",
            date:new Date(),
            bytes:30,
            emission:21.21,
        },
    ]

  return (
    <main
      className={`min-h-[100vh] ${styles.container} flex justify-center items-start`}
    >
    <section className="w-[90%] min-h-[90vh] bg-[rgba(102,102,102,0.4)] mt-10 backdrop-blur-md p-10 rounded-md flex flex-col items-center gap-9">
        <nav className="flex items-center justify-between w-full">
            <h1 className="text-4xl text-green-200">Greenify</h1>
            <h3 className="text-white">Hi, John Doe</h3>
        </nav>
        <h1 className="text-xl tracking-wider">Your digital carbon footprint</h1>
        <div className="bg-[rgba(0,0,0,0.2)] w-full grid grid-cols-5 p-5 rounded-md">
            <h1 className="text-md place-self-center text-white">Visited On</h1>
            <h1 className="text-md col-span-2 place-self-center text-white">Website</h1>
            <h1 className="text-md text-white">Carbon Emissions (in g)</h1>
            <h1 className="text-md place-self-center text-white">Data (in bytes)</h1>
        </div>
        <div className="w-full flex flex-col items-center gap-7">
            {websites.map(website=>(
                <DashboardElement initiator={website.initiator} date={website.date} bytes={website.bytes} emission ={website.emission}/>
            ))}
        </div>
    </section>
    </main>
  );
};

export default Dashboard;