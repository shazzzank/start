import { Link } from '@tanstack/react-router';
import { menu, seo } from '@/utils/data';

export default function Header() {
  return (
    <header className="glass">
      <span>{seo.find(item => item.name === 'brandName')?.value}</span>
      <div>
        {menu.map((item, idx) => <Link to={item.href} key={idx}>{item.icon}</Link>)}
      </div>
    </header>
  );
}
