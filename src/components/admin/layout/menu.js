import { FiHome, FiServer, FiSettings } from "react-icons/fi";

export const MENU = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <FiHome className=" text-slate-400 mr-2" />,
  },
  {
    title: "Services",
    url: "/dashboard/services",
    icon: <FiServer className=" text-slate-400 mr-2" />,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: <FiSettings className=" text-slate-400 mr-2" />,
  },
];
