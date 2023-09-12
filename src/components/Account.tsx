import { useNavigate } from "react-router-dom";
import { clearUser } from "../reducers/userReducer";
import { deleteUser } from "../services/userService";
import { useAppDispatch, useAppSelector } from "../hooks/hook";

const Account = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(clearUser());
    window.localStorage.clear();
    navigate("/");
  };

  const deleteUsr = () => {
    dispatch(clearUser());
    window.localStorage.clear();
    deleteUser(user.id);
    navigate("/");
  };

  return (
    <>
      <h1>{user.username}</h1>
      <button onClick={() => navigate("/")}>back</button>
      <button onClick={handleLogout}>logout</button>
      <button onClick={deleteUsr}>delete</button>
    </>
  );
};

export default Account;
