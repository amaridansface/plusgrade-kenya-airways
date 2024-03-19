import { PropsWithChildren } from "react";
import "./header.css";

function Header({ children }: PropsWithChildren) {
  return <header className="header-wrapper">{children}</header>;
}

export default Header;
