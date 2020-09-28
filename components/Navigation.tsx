import React from "react";
import Link from "next/link";
import { Anchor } from "./Anchor";

function Navigation() {
  return (
    <nav className="max-w-2xl mx-auto">
      <ul className="flex">
        {navLinks.map((link) => (
          <li className="mr-4 last:mr-0">
            <Link key={link.path} href={link.path}>
              <a className="font-medium">{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Coffee", path: "/coffee" },
  { label: "House", path: "/house" },
  { label: "More Stuff", path: "/more" },
];

export { Navigation };
