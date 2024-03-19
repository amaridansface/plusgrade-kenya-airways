import { NavLink } from "react-router-dom";
import "./footer-column.css";

function FooterColumn({ subtitle, links }: Props) {
  return (
    <div className="footer-column">
      <div className="footer-subtitle">{subtitle}</div>
      <ul className="links">
        {links.map((link) => (
          <li key={link}>
            <NavLink to={`/${link}`}>{link}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface Props {
  subtitle: string;
  links: string[];
}

export default FooterColumn;
