import { HeaderBlock } from "./HeaderBlock/HeaderBlock";
import { HeaderBanner } from "./HeaderBanner/HeaderBanner";

export const Header = () => {
  return (
    <header className="header">
      <HeaderBanner />
      <HeaderBlock />
    </header>
  );
};
