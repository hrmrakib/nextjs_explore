"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [user, setUser] = useState({});
  // const param = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params?.user}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className='border p-2'>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
};

export default page;
