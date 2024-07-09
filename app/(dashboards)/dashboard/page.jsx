import { Oswald } from "next/font/google";
import React from "react";

const oswald = Oswald({ subsets: ["latin"] });

const getTime = async () => {
  const res = await fetch("http://localhost:3000/time", { cache: "no-store" });
  const time = time.json();
  return time.currentTime;
};

const DashboardPage = async () => {
  const currentTime =await getTime();
  return (
    <div className={`${oswald.className}`}>
      Dashboard Home
      <h3>Now: {currentTime}</h3>
    </div>
  );
};

export default DashboardPage;
