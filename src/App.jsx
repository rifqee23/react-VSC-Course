import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import FormRegister from "./components/Fragments/FormRegister";
function App() {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div>
          {/* <LoginPage /> */}
          <RegisterPage />
        </div>
      </div>
    </>
  );
}

export default App;
