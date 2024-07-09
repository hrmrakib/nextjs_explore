import React from "react";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const page = async () => {
  const posts = await getPosts();

  return (
    <div className='m-10'>
      {posts?.map((post) => (
        <div className='border-2 p-5 mb-3'>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default page;
