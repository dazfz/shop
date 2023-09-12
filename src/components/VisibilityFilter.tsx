import { useDispatch } from "react-redux";
import { filterChange } from "../reducers/filterReducer";

const VisibilityFilter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      all
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange("ALL"))}
      />
      food
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange("FOOD"))}
      />
      other
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange("OTHER"))}
      />
    </div>
  );
};

export default VisibilityFilter;
