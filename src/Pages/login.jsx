import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <AuthLayouts title="Login">
        <FormLogin />
        <p className="mt-2">
          Dont have an Account?{" "}
          <Link
            className="text-blue-600 font-semibold hover:underline-offset-4  hover:underline"
            to={"/register"}
          >
            Register
          </Link>
        </p>
      </AuthLayouts>
    </div>
  );
};

export default LoginPage;
