import { Routes, Route, useMatch, Navigate } from "react-router-dom";
import { useItemsQuery } from "./services/itemQuery";
import { useAppSelector } from "./hooks/hook";
import App from "./App";
import ItemPage from "./components/ItemPage";
import ItemList from "./components/ItemList";
import Login from "./components/Login";
import Account from "./components/Account";
import Signup from "./components/Signup";
import Cart from "./components/Cart";

const Router = () => {
  const { items } = useItemsQuery();

  const user = useAppSelector((state) => state.user);

  const match = useMatch("/items/:id");
  const item = match
    ? items.find((item) => item.id === Number(match.params.id))
    : null;

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/items" element={<ItemList items={items} />} />
      <Route
        path="/items/:id"
        element={item ? <ItemPage item={item} /> : null}
      />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/account"
        element={user ? <Account /> : <Navigate replace to="/login" />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Router;
