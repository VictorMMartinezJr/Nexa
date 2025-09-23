const ProductGrid = ({ name, category, price }) => {
  return (
    <div className="flex flex-col gap-1">
      <img src="https://placehold.co/600x400" alt="" />
      <p>{name}</p>
      <p className="text-sm">{category}</p>
      <p className="py-1">{price}</p>
    </div>
  );
};

export default ProductGrid;
