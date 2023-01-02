const SkeletonLoader = () => (
  <div className="flex flex-wrap gap-6">
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <div
        key={item}
        className="card border-none bg-slate-50 h-80 flex-1 basis-full md:basis-1/3 lg:basis-1/4 animate-pulse"
      />
    ))}
  </div>
);

export default SkeletonLoader;
