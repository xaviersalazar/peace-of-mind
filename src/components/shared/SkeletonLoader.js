const SkeletonLoader = () => (
  <div className="flex flex-wrap gap-6">
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <div
        key={item}
        className="card border-none bg-slate-50 h-auto flex-1 basis-full md:basis-1/3 lg:basis-1/4 animate-[pulse_1s_infinite]"
      >
        <img
          className="w-10/12 xl:w-8/12 rounded-xl mx-auto mt-12"
          src={`${process.env.PUBLIC_URL}/placeholder-service.jpg`}
          alt="placeholder"
        />
        <div className="card-body items-center text-center flex-none">
          <div className="w-3/4 bg-slate-100 h-4 rounded-xl" />
          <hr className="w-2/4 md:w-6/12 xl:w-3/12 mx-auto my-4 border-slate-100" />
          <div className="w-2/4 bg-slate-100 h-4 rounded-xl" />
          <div className="w-1/4 bg-slate-100 h-4 rounded-xl" />
        </div>
      </div>
    ))}
  </div>
);

export default SkeletonLoader;
