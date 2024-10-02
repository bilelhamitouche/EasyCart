function FeatureCard({ feature, icon }) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-8 rounded-lg border-2 border-blue-700 transition-transform hover:scale-105">
      {icon}
      <h3 className="text-xl font-bold text-black dark:text-white">
        {feature}
      </h3>
    </div>
  );
}

export default FeatureCard;
