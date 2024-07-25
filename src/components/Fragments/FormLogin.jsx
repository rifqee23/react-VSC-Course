import Button from "../Elements/Button";
import Inputs from "../Elements/Input/Input";
import Label from "../Elements/Input/Label";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);

    window.location.href = "/product";
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="mt-2">
          <Label htmlFor="username">Username</Label>
          <Inputs name="username" id="username" placeholder="Username" />
        </div>
        <div className="mt-2">
          <Label htmlFor="password">Password</Label>
          <Inputs
            type="password"
            name="password"
            id="password"
            placeholder="****"
          />
        </div>
        <div className="mt-2">
          <Button className="mt-4" type="submit">
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
