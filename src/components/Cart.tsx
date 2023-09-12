import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { Category, Item } from "../types/ItemTypes";
import { reduceQuantity } from "../reducers/cartReducer";
import VisibilityFilter from "./VisibilityFilter";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(({ filter, cart }) => {
    if (filter === "ALL") {
      return cart;
    }
    return filter === "FOOD"
      ? cart.filter((item: Item) => item.kind === Category.FOOD)
      : cart.filter((item: Item) => item.kind === Category.OTHER);
  });

  return (
    <div>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>
              {item.name} {item.quantity}
            </Link>
            <button onClick={() => dispatch(reduceQuantity(item.id))}>-</button>
          </li>
        ))}
      </ul>
      <VisibilityFilter />
    </div>
  );
};

export default Cart;
