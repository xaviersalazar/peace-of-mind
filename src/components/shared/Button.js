const Button = ({ children }) => (
  <button className="btn text-xs font-light h-8 min-h-[0] mt-6 border-none text-slate-600 normal-case rounded-2xl bg-primary relative md:text-sm">
    {children}
  </button>
);

export default Button;
