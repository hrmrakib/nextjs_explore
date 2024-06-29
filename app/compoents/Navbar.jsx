"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname.includes("dashboard")) {
    return <div>Dashboard</div>;
  }

  return (
    <div className='my-6'>
      <ul className='flex items-center justify-center gap-5'>
        <li>
          <Link href='/' className={`${pathname === "/" && "active"}`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className={`${pathname === "/about" && "active"}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href='/about/nested'
            className={`${pathname === "/about/nested" && "active"}`}
          >
            About nested
          </Link>
        </li>
        <li>
          <Link
            href='/about/nested/deepNested'
            className={`${pathname === "/about/nested/deepNested" && "active"}`}
          >
            About nested - deepNested
          </Link>
        </li>
        <li>
          <Link href='/users'>Users</Link>
        </li>
        <li>
          <Link href='/service'>Service</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
        <li>
          <Link href='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <button onClick={() => router.push("/login")}>Login</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
