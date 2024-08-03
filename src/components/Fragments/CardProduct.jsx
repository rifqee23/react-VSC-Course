import { Link } from "react-router-dom";
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
  const { image, id } = props;
  return (
    <>
      <Link to={`/product/${id}`} className="flex justify-center px-4">
        <img
          src={image}
          alt="product"
          className="py-4 h-60 w-full rounded-t-lg"
        />
      </Link>
    </>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white mb-5">
          {title.substring(0, 20)}...
        </h5>
        <p className="text-white">{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, children, AddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-4 pb-4">
      <span className="text-xl font-bold text-white">
        {price.toLocaleString("en-EN", {
          style: "currency",
          currency: "USD",
        })}
      </span>
      <Button warna={"bg-blue-500"} onClick={() => AddToCart(id)}>
        {children}
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
