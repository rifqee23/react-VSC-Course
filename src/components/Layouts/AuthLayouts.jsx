const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div>
          <h2 className="text-2xl font-semibold text-blue-600">{title}</h2>
          <h3 className="text-md font-semibold text-slate-600 mt-2">
            Welcome please enter your detail
          </h3>

          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayouts;
