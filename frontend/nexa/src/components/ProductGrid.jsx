import { useNavigate } from "react-router-dom";

const ProductGrid = ({
  name,
  category,
  price,
  productId,
  imgURL,
  handleCancel,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (handleCancel) handleCancel();
    navigate(`/product/${productId}`);
  };

  return (
    <div className="flex flex-col gap-1 cursor-pointer" onClick={handleClick}>
      <img src={imgURL ? imgURL : "https://placehold.co/600x400"} alt="" />
      <p>{name}</p>
      <p className="text-sm">{category}</p>
      <p className="py-1">${price}</p>
    </div>
  );
};

export default ProductGrid;
