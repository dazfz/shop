import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../services/userService";
import { setToken } from "../services/itemService";
import { setUser } from "../reducers/userReducer";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    try {
      const user = await login({
        username: String(data.get("username")) ?? "",
        password: String(data.get("password")) ?? "",
      });

      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      setToken(user.token);
      dispatch(setUser(user));

      navigate("/account");
    } catch (exception) {
      console.error(exception);
    }
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        <div>
          username: <input id="username" name="username" />
        </div>
        <div>
          password:
          <input type="password" name="password" id="password" />
        </div>
        <button id="login-button" type="submit">
          login
        </button>
      </form>
      <Link to="/signup">signup</Link>
    </div>
  );
};

export default Login;
