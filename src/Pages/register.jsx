import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
const RegisterPage = () => {
  return (
    <div>
      <AuthLayouts title="Register">
        <FormRegister />
      </AuthLayouts>
    </div>
  );
};

export default RegisterPage;
