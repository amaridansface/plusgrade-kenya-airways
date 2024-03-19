import FooterColumn from "../FooterColumn/FooterColumn";
import FooterMobileApps from "../FooterMobileApp/FooterMobileApps";
import FooterSocials from "../FooterSocials/FooterSocials";
import "./footer.css";

function Footer({ footerItems }: Props) {
  return (
    <footer className="footer">
      {footerItems.map((column) => (
        <FooterColumn
          subtitle={column.subtitle}
          links={column.links}
        ></FooterColumn>
      ))}
      <div>
        <FooterSocials />
        <FooterMobileApps />
      </div>
    </footer>
  );
}

interface FooterItem {
  subtitle: string;
  links: string[];
}

interface Props {
  footerItems: FooterItem[];
}

export default Footer;
