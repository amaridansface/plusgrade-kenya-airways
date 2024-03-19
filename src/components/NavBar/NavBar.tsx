import { NavLink } from "react-router-dom";
import "./navbar.css";
import Hamburger from "hamburger-react";
import { useState } from "react";
import logo from "../../assets/kenya-airways-navbar-logo.png";

function NavBar({ navItems }: Props) {
  const [showNavBar, setShowNav] = useState(false);

  const handleShowNavbar = () => {
    setShowNav(!showNavBar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/Home">
            <img src={logo} alt="kenya-airways-logo" />
          </a>
        </div>

        <div className="menu-icon">
          <Hamburger onToggle={handleShowNavbar} />
        </div>

        <div className={`nav-elements  ${showNavBar && "active"}`}>
          <ul>
            {navItems.map(({ title, link }) => (
              <li key={link}>
                <NavLink to={`/${link}`}>{title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

interface NavItem {
  title: string;
  link: string;
}

interface Props {
  navItems: NavItem[];
}

export default NavBar;
