export const GET = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return Response.json({
    data,
  });
};

export const POST = async () => {
  
  return Response.json({
    "post method of posts"
  });
};
