import { useNavigate } from "react-router-dom";
import { signup } from "../services/userService";

const Signup = () => {
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);
    try {
      await signup({
        username: String(data.get("username")) ?? "",
        password: String(data.get("password")) ?? "",
      });
      navigate("/login");
    } catch (exception) {
      console.error(exception);
    }
  };

  return (
    <div>
      <h2>signup</h2>
      <form onSubmit={onSubmit}>
        <div>
          username: <input id="username" name="username" />
        </div>
        <div>
          password: <input type="password" name="password" id="password" />
        </div>
        <button type="submit">signup</button>
      </form>
    </div>
  );
};

export default Signup;
