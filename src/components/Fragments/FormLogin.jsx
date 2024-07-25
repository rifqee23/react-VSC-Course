import Button from "../Elements/Button";
import Inputs from "../Elements/Input/Input";
import Label from "../Elements/Input/Label";

const FormLogin = () => {
  return (
    <>
      <form action="">
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
          <Button className="mt-4">Login</Button>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
