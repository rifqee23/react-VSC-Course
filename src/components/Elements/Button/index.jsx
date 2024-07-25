const Button = (props) => {
  const {
    warna = "bg-black",
    children = "...",
    type = "button",
    onClick = () => {},
  } = props;
  return (
    <button
      className={`h-10 px-6 mt-2 font-semibold rounded-md ${warna} text-white`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
