import { redirect } from "next/navigation";

const isAccess = false;

const DeepNested = () => {
  if (!isAccess) {
    redirect("/login");
    return;
  }

  return <div>Deep Nested</div>;
};

export default DeepNested;
