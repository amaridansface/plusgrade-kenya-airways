import { PropsWithChildren } from "react";
import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import NavBar from "../NavBar/NavBar";
import CONSTANTS from "../../../constants";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header>
        <Contact />
        <NavBar navItems={CONSTANTS.NAV_BAR_TABS} />
      </Header>
      <main className="page-content">{children}</main>
      <Footer footerItems={CONSTANTS.FOOTER_LINKS} />
    </>
  );
}
