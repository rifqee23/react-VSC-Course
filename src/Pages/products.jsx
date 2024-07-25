import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    image:
      "/images/beautiful-blonde-girl-white-oversized-tshirt-blue-jeans-posing-gray-background.jpg",
    name: "Baju Wanita",
    price: "Rp 100.000",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          inventore natus, aliquid dicta obcaecati repudiandae consectetur
          aliquam cupiditate repellendus odio nisi perferendis quas? Reiciendis
          quasi fugit explicabo, beatae ullam corrupti!`,
  },
  {
    id: 2,
    image: "/images/teenage-boy-white-tee-basic-youth-apparel-shoot.jpg",
    name: "Baju Pria",
    price: "Rp 80.000",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. `,
  },
];

const uName = localStorage.getItem("username");

const handleLogout = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("password");

  window.location.href = "/login";
};

const ProductPages = () => {
  return (
    <>
      <div className="flex justify-end bg-blue-600 h-16 items-center px-10 text-white gap-5">
        <div>Hello, {uName}</div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5 gap-8">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}>
              Add to chart
            </CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </>
  );
};
export default ProductPages;
