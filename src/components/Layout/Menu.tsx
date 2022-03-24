import {
  faChartLine,
  faDashboard,
  faSeedling,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { RoutePatterns } from "../../RoutePatterns";

const menu = [
  {
    label: "Dashboard",
    route: RoutePatterns.Dashboard,
    icon: (
      <FontAwesomeIcon icon={faDashboard} className="h-7 w-7 text-teal-500" />
    ),
  },
  {
    label: "Crop",
    route: RoutePatterns.CropManagement,
    icon: (
      <FontAwesomeIcon icon={faSeedling} className="h-7 w-7 text-teal-500" />
    ),
  },
  {
    label: "Finance",
    route: RoutePatterns.Financial,
    icon: (
      <FontAwesomeIcon icon={faTableList} className="h-7 w-7 text-teal-500" />
    ),
  },
  {
    label: "Analyze",
    route: RoutePatterns.Analytics,
    icon: (
      <FontAwesomeIcon icon={faChartLine} className="h-7 w-7 text-teal-500" />
    ),
  },
];

export default function Header() {
  return (
    <ul className="fixed bottom-0 w-full bg-white flex justify-around items-center py-3 border-t-2 border-teal-400">
      {menu.map((menuItem) => (
        <NavLink to={menuItem.route}>
          <li className="flex flex-col items-center space-y-2">
            {menuItem.icon}
            <span className="text-center text-sm">{menuItem.label}</span>
          </li>
        </NavLink>
      ))}
    </ul>
  );
}
