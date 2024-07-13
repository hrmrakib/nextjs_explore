export const GET = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return Response.json({
    data,
  });
};

export const POST = async (req) => {
  const data = await req.json();
  return Response.json({
    text: data,
    name: "post method of posts",
  });
};
