const Notice = ({ children }) => (
  <p className="text-[0.65rem] font-light text-slate-300 mb-2 text-center md:text-sm">
    NOTICE: {children || "Prices are subject to change without prior notice"}
  </p>
);

export default Notice;
