function ProductCategoryCard({ name, image }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg">
      <img
        src={image}
        alt={`${name} image`}
        className="object-center h-96 rounded-lg"
      />
      <p className="font-semibold text-center text-md">{name}</p>
    </div>
  );
}

export default ProductCategoryCard;
