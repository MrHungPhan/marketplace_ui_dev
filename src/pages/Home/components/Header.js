import React from "react";
import Logo from "../../../images/logo.png";
import { BsArrowLeft } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <nav className="header">
        <img alt="" src={Logo} />
        <ul className="nav-menu">
          <li className="nav-menu_choose">
            <span>Market</span>
            <span>Main</span>
            <span>Free</span>
          </li>
          <li className="nav-menu_item">N-Fi</li>
          <li className="nav-menu_item">My NFT</li>
          <button className="btn-link-to">
            <BsArrowLeft size={16} />
            Go to klayhub
          </button>
          <button className="btn-connect">연결</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
