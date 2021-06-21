import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

export default function Header() {
  return (
    <nav className="header">
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/products"}>Produtos</Link></li>
        <li><Link to={"/about"}>Carrinho</Link></li>
      </ul>
    </nav>
  )
}
