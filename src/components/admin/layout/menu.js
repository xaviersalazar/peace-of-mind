import { FiHome, FiServer, FiSettings } from "react-icons/fi";

export const MENU = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <FiHome className="mr-2" />,
  },
  {
    title: "Services",
    url: "/dashboard/services",
    icon: <FiServer className="mr-2" />,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: <FiSettings className="mr-2" />,
  },
];
