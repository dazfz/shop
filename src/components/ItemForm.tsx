import { useField } from "../hooks";
import { Category, NewItem } from "../types/ItemTypes";
import { useAppSelector } from "../hooks/hook";
import { useItemsQuery } from "../services/itemQuery";

const ItemForm = () => {
  const { newItemMutation } = useItemsQuery();
  const user = useAppSelector((state) => state.user);
  const name = useField("text");

  const handleResetFields = () => {
    name.reset();
  };

  const addItem = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const newItem: NewItem = {
      name: name.inputProps.value,
      quantity: 10,
      seller: user,
      kind: Category.OTHER,
    };

    newItemMutation.mutate(newItem);
    handleResetFields();
  };

  return (
    <div>
      <form onSubmit={addItem}>
        name:
        <input {...name.inputProps} placeholder="cap" />
        <button type="submit">create</button>
      </form>
      <button onClick={handleResetFields}>reset</button>
      <div>{name.inputProps.value}</div>
    </div>
  );
};

export default ItemForm;
