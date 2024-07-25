import CardProduct from "../components/Fragments/CardProduct";

const ProductPages = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/beautiful-blonde-girl-white-oversized-tshirt-blue-jeans-posing-gray-background.jpg" />
        <CardProduct.Body title="Baju baru">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          inventore natus, aliquid dicta obcaecati repudiandae consectetur
          aliquam cupiditate repellendus odio nisi perferendis quas? Reiciendis
          quasi fugit explicabo, beatae ullam corrupti!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 100.000">Add to chart</CardProduct.Footer>
      </CardProduct>
    </div>
  );
};
export default ProductPages;
