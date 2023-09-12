import { Item } from "../types/ItemTypes";

interface ItemProps {
  item: Item;
}

// Instead of using props.item.var, destructure and use item.var
// switch case between kind
const ItemPage = ({ item }: ItemProps) => {
  switch (item.kind) {
    case "food":
      return (
        <>
          <h1>{item.name}</h1>
          <p>FOOD</p>
          <p>{item.quantity}</p>
          <button>click!</button>
        </>
      );
    case "other":
      return (
        <>
          <h1>{item.name}</h1>
          <p>other</p>
          <p>{item.quantity}</p>
        </>
      );
  }
};

export default ItemPage;
