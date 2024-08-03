import { useEffect, useState, useRef } from "react";

import Button from "../Elements/Button";
import Inputs from "../Elements/Input/Input";
import Label from "../Elements/Input/Label";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("username", event.target.username.value);
    // localStorage.setItem("password", event.target.password.value);

    // window.location.href = "/product";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const uNameRef = useRef(null);

  useEffect(() => {
    uNameRef.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={handleLogin}>
        {loginFailed && <p className="text-red-500">{loginFailed}</p>}
        <div className="mt-2">
          <Label htmlFor="username">Username</Label>
          <Inputs
            name="username"
            id="username"
            placeholder="Username"
            ref={uNameRef}
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
          <Button className="mt-4" type="submit">
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
