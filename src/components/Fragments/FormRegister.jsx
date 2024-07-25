import Button from "../Elements/Button";
import Inputs from "../Elements/Input/Input";
import Label from "../Elements/Input/Label";

const FormRegister = () => {
  return (
    <>
      <form action="">
        <div className="mt-2">
          <Label htmlFor="fullName">Fullname</Label>
          <Inputs
            name="fullName"
            id="fullName"
            placeholder="Insert Your Full Name"
          />
        </div>
        <div className="mt-2">
          <Label htmlFor="email">Email</Label>
          <Inputs
            type="email"
            name="email"
            id="email"
            placeholder="Insert Your Email"
          />
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
          <Label htmlFor="confirmPass">Confirm Password</Label>
          <Inputs
            type="password"
            name="confirmPass"
            id="confirmPass"
            placeholder="****"
          />
        </div>
        <div className="mt-2">
          <Button className="mt-4">Register</Button>
        </div>
      </form>
    </>
  );
};

export default FormRegister;
