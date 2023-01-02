const SkeletonLoader = () => (
  <div className="grid auto-rows-fr grid-cols-1 gap-6 pb-10 pt-10 px-10 md:p-16 lg:p-20 xl:p-[7rem] md:grid-cols-2 xl:grid-cols-3">
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <div
        key={item}
        className="card border-none bg-slate-50 h-80 animate-pulse"
      />
    ))}
  </div>
);

export default SkeletonLoader;
