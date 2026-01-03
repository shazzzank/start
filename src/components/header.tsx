import "@/styles/header.css";
import User from "@/components/icons/user";
import Cart from "@/components/icons/cart";
import Search from "@/components/icons/search";
import { siteName } from "@/data";

export default function Header() {
  return (
    <div id="header-container">
      <h1 id="header-title">{siteName}</h1>
      <div id="header-items">
        <Search width={25} height={25} />
        <User width={25} height={25} />
        <Cart width={25} height={25} />
      </div>
    </div>
  );
}
