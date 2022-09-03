import { HeaderBlock } from "./Header/HeaderBlock/HeaderBlock";
import { HeaderImage } from "./Header/HeaderImage/HeaderImage";

export function Header() {
  return (
    <header className="header">
      <HeaderImage />
      <HeaderBlock />
    </header>
  );
}
