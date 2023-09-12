import { Link } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header name="shop"></Header>
      <Link to="/items">items </Link>
      <Link to="/cart">cart </Link>
      <Link to="/account">account </Link>
    </div>
  );
};

export default App;
