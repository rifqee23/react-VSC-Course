import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div>
          <h2 className="text-2xl font-semibold text-blue-600">{title}</h2>
          <h3 className="text-md font-semibold text-slate-600 mt-2">
            Welcome please enter your detail
          </h3>

          {children}
          <p className="mt-2">
            {type === "login"
              ? "Don't have an Account? "
              : "Already have an Account? "}

            <Link
              className="text-blue-600 font-semibold hover:underline-offset-4  hover:underline"
              to={type === "login" ? "/register" : "/login"}
            >
              {type === "login" ? "Register" : "Login"}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default AuthLayouts;
