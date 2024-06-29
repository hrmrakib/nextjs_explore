"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div clasName='grid grid-cols-3 gap-10 border-2 p-5'>
      {users?.map((user) => (
        <div key={user.id} className='border p-5 rounded-md'>
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
          <Link href={`/users/${user?.id}`}>
            <button className='bg-blue-400 p-2'>Detail of ({user?.id})</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default page;
