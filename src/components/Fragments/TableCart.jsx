import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

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

  //   const totalPriceRef = useRef(null);

  //   useEffect(() => {
  //     if (cart.length > 0) {
  //       totalPriceRef.current.style.display = "table-row";
  //     } else {
  //       totalPriceRef.current.style.display = "none";
  //     }
  //   }, [cart]);
  return (
    <>
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
    </>
  );
};

export default TableCart;
