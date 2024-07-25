import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <div>
      <AuthLayouts title="Login">
        <FormLogin />
      </AuthLayouts>
    </div>
  );
};

export default LoginPage;
