import { Button as DaisyButton } from "react-daisyui";

export const Button = ({ children }) => (
  <DaisyButton className="text-xs font-light h-8 min-h-[0] mt-6 border-none text-slate-600 normal-case rounded-2xl bg-primary relative">
    {children}
  </DaisyButton>
);
