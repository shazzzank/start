import { footer, seo } from "@/utils/data";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <div className="footer-container">
      <footer>
        {footer.map(menu =>
          <div>
            <h4>{menu.name}</h4>
            <div className="links">
              {menu.items.map(submenu => <Link to={submenu.href} className="link">{submenu.name}</Link>)}
            </div>
          </div>
        )}
      </footer>
      <p>&copy; {new Date().getFullYear()} {seo.find(item => item.name === 'brandName')?.value}. All Rights Reserved.</p>
    </div>
  );
}
