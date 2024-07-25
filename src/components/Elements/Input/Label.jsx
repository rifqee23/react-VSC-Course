const Label = (props) => {
  const { children, htmlFor } = props;
  return (
    <label className="block font-semibold" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
