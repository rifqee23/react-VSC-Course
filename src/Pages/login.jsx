import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <AuthLayouts title="Login" type="login">
        <FormLogin />
      </AuthLayouts>
    </div>
  );
};

export default LoginPage;
