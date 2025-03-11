import { ItemNavBar } from "../../Ui/ItemNavBar/ItemNavBar";

export const NavBar = () => {
  return (
    <nav>
      <ul className="List">
        <ItemNavBar contenido="Home" />
        <ItemNavBar contenido="Services" />
        <ItemNavBar contenido="Projects" />
      </ul>
    </nav>
  );
};