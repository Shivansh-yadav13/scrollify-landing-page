import React from "react";
import ReactLogo from "../../assets/react.svg";

const navItems = [
  {
    text: "Features",
    href: "#features",
  },
  {
    text: "Widgets",
    href: "#widgets",
  },
  // {
  //   text: "Demo",
  //   href: "#demo",
  // },
];

export default function Navbar() {
  return (
    <nav className="flex justify-start w-fit gap-2 mx-auto my-6 items-center p-2 rounded-xl bg-linear-to-b from-zinc-700 via-zinc-800 to-zinc-900 to-90% to text-white">
      <div className="flex justify-between items-center gap-2 pr-4">
        <img className="w-10" src="/Scrollify_logo.png" alt="logo" />
        <p>Scrollify</p>
      </div>
      <div>
        <ul className="flex justify-between gap-2">
          {navItems.map((v, i) => (
            <a href={v.href}>
              <li
                className="py-2 px-4 rounded-md transform transition-all duration-300 text-white hover:bg-white hover:text-black"
                key={i}
              >
                {v.text}
              </li>
            </a>
          ))}
        </ul>
      </div>
      {/* <div>
        <ul className="flex justify-between gap-2">
          <a href="">
            <li className="py-2 px-4 rounded-md transform transition-all duration-300 text-white hover:bg-white hover:text-black">
              Login
            </li>
          </a>
          <a href="">
            <li className="py-2 px-4 rounded-md transform transition-all duration-300 text-white hover:bg-white hover:text-black">
              Join Waitlist
            </li>
          </a>
        </ul>
      </div> */}
    </nav>
  );
}
