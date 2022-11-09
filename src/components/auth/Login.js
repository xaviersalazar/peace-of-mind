const Login = () => (
  <div className="relative top-0 px-10 pt-0 pb-10 lg:px-20 xl:px-[7rem] h-[100vh] overflow-hidden">
    <div className="z-50 relative mt-12">
      <img
        className="w-[128px] mx-auto mb-12"
        src={`${process.env.PUBLIC_URL}/logo-black.png`}
        alt="background"
      />
      <div
        className="mt-4 mx-auto bg-slate-50 rounded-2xl p-8 md:w-3/4 lg:w-7/12 xl:w-6/12"
        id="login-form"
      >
        <h1 className="text-5xl font-bold text-center mb-8">Login</h1>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-light">Email address</span>
          </label>
          <input
            type="text"
            className="input w-full h-10 font-light rounded-lg"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-light">Password</span>
          </label>
          <input
            type="text"
            className="input w-full h-10 font-light rounded-lg"
          />
        </div>
        <button className="btn-primary w-full mt-8 p-2 rounded-lg text-slate-700 font-light">
          Submit
        </button>
      </div>
    </div>
    <img
      className="md:hidden w-[100vw] absolute left-0 bottom-0 z-0"
      src={`${process.env.PUBLIC_URL}/wave-bg.svg`}
      alt="background"
    />
    <img
      className="hidden md:block xl:hidden w-[100vw] absolute left-0 bottom-0"
      src={`${process.env.PUBLIC_URL}/wave-bg-md.svg`}
      alt="background"
    />
    <img
      className="hidden xl:block w-[100vw] absolute left-0 bottom-0"
      src={`${process.env.PUBLIC_URL}/wave-bg-lg.svg`}
      alt="background"
    />
  </div>
);

export default Login;
