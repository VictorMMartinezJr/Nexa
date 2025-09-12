const ProductGrid = () => {
  return (
    <div className="flex flex-col gap-1">
      <img src="https://placehold.co/600x400" alt="" />
      <p>Description</p>
      <p className="text-sm">Category</p>
      <p className="py-1">$20.00</p>
    </div>
  );
};

export default ProductGrid;
