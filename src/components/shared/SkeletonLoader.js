const SkeletonLoader = () => (
  <>
    <div className="text-center w-max-my-0 mx-auto" id="loader-container">
      <div
        className="bg-slate-50 rounded-xl h-12 w-7/12 mx-auto mb-2 animate-pulse md:w-5/12 lg:w-4/12 xl:w-3/12"
        id="loader-title"
      />
      <div
        className="bg-slate-50 rounded-xl h-4 w-4/12 mx-auto animate-pulse md:w-3/12 lg:w-2/12 xl:w-1/12"
        id="loader-subtitle"
      />
    </div>
    <div className="grid auto-rows-fr grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="card border-none bg-slate-50 h-48 animate-pulse"
        />
      ))}
    </div>
  </>
);

export default SkeletonLoader;
