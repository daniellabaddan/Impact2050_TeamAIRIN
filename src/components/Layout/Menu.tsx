import { NavLink } from "react-router-dom";
import {
  AnalyticsIcon,
  CropIcon,
  DashboardIcon,
  InventoryIcon,
} from "../../assets/icons";
import { RoutePatterns } from "../../RoutePatterns";

export default function Header() {
  return (
    <ul className="flex justify-around items-center py-3 border-t-2 border-teal-400">
      <NavLink to={RoutePatterns.Dashboard}>
        <li className="flex flex-col items-center space-y-2">
          <div className="h-7 w-7">
            <DashboardIcon />
          </div>
          <span className="text-center text-sm">Dashboard</span>
        </li>
      </NavLink>

      <NavLink to={RoutePatterns.CropManagement}>
        <li className="flex flex-col items-center space-y-2 ">
          <div className="h-7 w-7">
            <CropIcon />
          </div>
          <span className="text-center text-sm">Crop</span>
        </li>
      </NavLink>

      <NavLink to={RoutePatterns.Financial}>
        <li className="flex flex-col items-center space-y-2 ">
          <div className="h-7 w-7">
            <InventoryIcon />
          </div>
          <span className="text-center text-sm">Finance</span>
        </li>
      </NavLink>

      <NavLink to={RoutePatterns.Analytics}>
        <li className="flex flex-col items-center space-y-2 ">
          <div className="h-7 w-7">
            <AnalyticsIcon />
          </div>
          <span className="text-center text-sm">Analyze</span>
        </li>
      </NavLink>
    </ul>
  );
}
