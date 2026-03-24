import React from "react";

let navbarData = [ 
  {
    name: "home",
    path: "/home",
    id: 1,
  },
  {
    name: "About",
    path: "/about ",
    id: 2,
  },
  {
    name: "Contact",
    path: "/contact",
    id: 3,
  },
  {
    name: "Blog",
    path: "/blog",
    id: 4,
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul className="capitalize">
        {navbarData.map((navbarName) => (
          <a key={navbarName.id} href={navbarName.path} className="mr-10">{navbarName.name}</a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
