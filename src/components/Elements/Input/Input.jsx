const Input = (props) => {
  const { name, id, type = "text", placeholder } = props;
  return (
    <input
      className="text-sm border mt-2 rounded-xl py-2 px-3 text-slate-700 "
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default Input;
