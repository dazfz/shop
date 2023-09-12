import { Link, useNavigate } from "react-router-dom";
import { Item } from "../types/ItemTypes";
import { useAppDispatch } from "../hooks/hook";
import { addItem } from "../reducers/cartReducer";
import ItemForm from "./ItemForm";

interface ItemsProps {
  items: Item[];
}

const ItemList = ({ items }: ItemsProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  return (
    <div>
      <button onClick={() => navigate("/")}>back</button>
      <ItemForm />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
            <button onClick={() => dispatch(addItem(item))}>add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
