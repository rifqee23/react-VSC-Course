import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

const ProductPages = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) => {
          return item.id === id ? { ...item, qty: item.qty + 1 } : item;
        })
      );
    } else {
      console.log(id);

      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };

  // useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  // const totalPriceRef = useRef(null);

  return (
    <>
      <div className="flex justify-end bg-blue-600 h-16 items-center px-10 text-white gap-5">
        <div>{username}</div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5 gap-8">
        <div className="w-3/4 flex flex-wrap gap-8 px-8">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  AddToCart={handleAddToCart}
                >
                  Add to chart
                </CardProduct.Footer>
              </CardProduct>
            ))}
        </div>

        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>

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
              {products.length > 0 &&
                cart.map((item, index) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={index}>
                      <td>{product.title.substring(0, 10)}</td>
                      <td className="text-center">
                        {product.price.toLocaleString("en-En", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td className="text-center">{item.qty}</td>
                      <td className="text-center">
                        {(product.price * item.qty).toLocaleString("en-En", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr>
                <td className="ps-4 font-bold" colSpan={3}>
                  Total Price
                </td>
                <td>
                  {totalPrice.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ProductPages;
