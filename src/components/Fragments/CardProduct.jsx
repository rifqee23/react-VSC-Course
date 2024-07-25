import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-800 border-gray-200 rounded-lg shadow py-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <>
      <a href="#" className="flex justify-center">
        <img
          src={image}
          alt="product"
          className="py-4 rounded-t-lg"
          width={150}
        />
      </a>
    </>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, children } = props;
  return (
    <div className="flex items-center justify-between px-4 pb-4">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button warna={"bg-blue-500"}>{children}</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
