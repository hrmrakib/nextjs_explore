import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const AboutPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return <div>About Page</div>;
};

export default AboutPage;
