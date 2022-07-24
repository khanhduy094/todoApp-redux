import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./style.css";

const list = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "User-Manager",
    link: "/user-manager"
  },
  {
    name: "Todo-Redux",
    link: "/todo"
  },
  {
    name: "Form",
    link: "/form"
  },
];

export default function Header() {
  const [active, setActive] = useState("Home");
  const handleAddActive = (item) => {
    setActive(item);
  
  };

  return (
    <header className="header">
      <div className="header-contain">
        <ul className="header-list">
          {list.map((item) => (
            <li
              key={item.name}
              onClick={() => handleAddActive(item.name)}
              className={`header-item ${
                item.name === active ? "header-item-active" : null
              }`}
            >
              <Link to={item.link} style={{color: "white"}}>{item.name}</Link>
              
            </li>
          ))}
        </ul>
        
      </div>
    </header>
  );
}
