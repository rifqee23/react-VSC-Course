import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { useState } from "react";

const products = [
  {
    id: 1,
    image:
      "/images/beautiful-blonde-girl-white-oversized-tshirt-blue-jeans-posing-gray-background.jpg",
    name: "Baju Wanita",
    price: 100000,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          inventore natus, aliquid dicta obcaecati repudiandae consectetur
          aliquam cupiditate repellendus odio nisi perferendis quas? Reiciendis
          quasi fugit explicabo, beatae ullam corrupti!`,
  },
  {
    id: 2,
    image: "/images/teenage-boy-white-tee-basic-youth-apparel-shoot.jpg",
    name: "Baju Pria",
    price: 80000,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. `,
  },
  {
    id: 3,
    image: "/images/teenage-boy-white-tee-basic-youth-apparel-shoot.jpg",
    name: "Baju Pria2",
    price: 90000,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. `,
  },
  {
    id: 4,
    image:
      "/images/beautiful-blonde-girl-white-oversized-tshirt-blue-jeans-posing-gray-background.jpg",
    name: "Baju Wanita22",
    price: 120000,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. `,
  },
];

const uName = localStorage.getItem("username");

const ProductPages = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };

  return (
    <>
      <div className="flex justify-end bg-blue-600 h-16 items-center px-10 text-white gap-5">
        <div>Hello, {uName}</div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5 gap-8">
        <div className="w-3/4 flex flex-wrap gap-8 px-8">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              >
                Add to chart
              </CardProduct.Footer>
            </CardProduct>
          ))}
        </div>

        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          {/* <ul>
            {cart.map((item) => (
              <li key={item.id}>{item.id}</li>
            ))}
          </ul> */}
          <table>
            <thead>
              <tr>
                <th className="px-4">Product</th>
                <th className="px-4">Price</th>
                <th className="px-4">Quantity</th>
                <th className="px-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td className="text-center">
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td className="text-center">{item.qty}</td>
                    <td className="text-center">
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ProductPages;
