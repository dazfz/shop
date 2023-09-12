// Declarar interface
interface HeaderProps {
  name: string;
}

// Header recibe name de la interfaz
const Header = (props: HeaderProps) => {
  return <h1>{props.name}</h1>;
};

export default Header;
