import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <div>
      <AuthLayouts title="Register" type="register">
        <FormRegister />
      </AuthLayouts>
    </div>
  );
};

export default RegisterPage;
