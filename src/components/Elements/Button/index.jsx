const Button = (props) => {
  const { warna = "bg-black", children = "...", type = "button" } = props;
  return (
    <button
      className={`h-10 px-6 mt-2 font-semibold rounded-md ${warna} text-white`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
