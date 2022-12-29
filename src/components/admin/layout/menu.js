import { FiHome, FiServer } from "react-icons/fi";

export const MENU = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: <FiHome className="mr-2" />,
  },
  {
    title: "Services",
    url: "/admin/services",
    icon: <FiServer className="mr-2" />,
  },
];
