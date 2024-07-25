import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <div>
      <AuthLayouts title="Register">
        <FormRegister />
        <p className="mt-2">
          have an Account?{" "}
          <Link
            className="text-blue-600 font-semibold hover:underline-offset-4  hover:underline"
            to={"/login"}
          >
            Login
          </Link>
        </p>
      </AuthLayouts>
    </div>
  );
};

export default RegisterPage;
