function ProductCategoryCard({ name, image }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg">
      <div className="h-96">
        <img
          src={image}
          alt={`${name} image`}
          className="object-center max-h-full rounded-lg shadow-md shadow-gray-650"
          loading="lazy"
        />
      </div>
      <p className="font-semibold text-center text-md">{name}</p>
    </div>
  );
}

export default ProductCategoryCard;
