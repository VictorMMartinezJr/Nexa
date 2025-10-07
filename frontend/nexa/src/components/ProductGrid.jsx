import { useNavigate } from "react-router-dom";

const ProductGrid = ({ name, category, price, productId, handleCancel }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${productId}`);
    handleCancel();
  };

  return (
    <div className="flex flex-col gap-1 cursor-pointer" onClick={handleClick}>
      <img src="https://placehold.co/600x400" alt="" />
      <p>{name}</p>
      <p className="text-sm">{category}</p>
      <p className="py-1">{price}</p>
    </div>
  );
};

export default ProductGrid;
