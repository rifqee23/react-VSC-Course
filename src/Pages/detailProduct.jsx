import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //fungsi/hook untuk menangkap parameter
import { getDetailProduct } from "../services/product.service";

function DetailProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);
  console.log(product);

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{product?.title}</h1>
      <img
        src={product?.image}
        alt={product?.title}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <p className="text-gray-700 mb-4">{product?.description}</p>
      <h2 className="text-xl font-semibold mb-4">${product?.price}</h2>
      <button
        onClick={() => handleAddToCart(product?.id)}
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default DetailProductPage;
