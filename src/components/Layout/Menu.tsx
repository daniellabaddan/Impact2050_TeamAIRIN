import { Link } from "react-router-dom";
import {
  AnalyticsIcon,
  CropIcon,
  DashboardIcon,
  DropletIcon,
  InventoryIcon,
  MoneyIcon,
} from "../../assets/icons";
import { RoutePatterns } from "../../RoutePatterns";

export default function Header() {
  return (
    <ul className="flex space-x-3 justify-around items-center py-3 border-t-2 border-teal-400">
      <Link to={RoutePatterns.Dashboard}>
        <li className="w-7 border">
          <DashboardIcon />
        </li>
      </Link>

      <Link to={RoutePatterns.CropManagement}>
        <li className="w-7">
          <CropIcon />
        </li>
      </Link>

      <Link to={RoutePatterns.Automation}>
        <li className="w-7">
          <DropletIcon />
        </li>
      </Link>

      <Link to={RoutePatterns.Inventory}>
        <li className="w-7">
          <InventoryIcon />
        </li>
      </Link>

      <Link to={RoutePatterns.Financial}>
        <li className="w-7">
          <MoneyIcon />
        </li>
      </Link>

      <Link to={RoutePatterns.Analytics}>
        <li className="w-7">
          <AnalyticsIcon />
        </li>
      </Link>
    </ul>
  );
}
