const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <>
      <h2 className="text-2xl font-semibold text-blue-600">{title}</h2>
      <h3 className="text-md font-semibold text-slate-600 mt-2">
        Welcome please enter your detail
      </h3>

      {children}
    </>
  );
};

export default AuthLayouts;
