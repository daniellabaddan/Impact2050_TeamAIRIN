import { Link } from "react-router-dom";
import { RoutePatterns } from "../../RoutePatterns";

export default function Header() {
  return (
    <ul>
      <Link to={RoutePatterns.Dashboard}>
        <li>Monitoring dashboard</li>
      </Link>

      <Link to={RoutePatterns.CropManagement}>
        <li>Crop Management</li>
      </Link>

      <Link to={RoutePatterns.Automation}>
        <li>Automation</li>
      </Link>

      <Link to={RoutePatterns.Inventory}>
        <li>Inventory</li>
      </Link>

      <Link to={RoutePatterns.Financial}>
        <li>Financial</li>
      </Link>

      <Link to={RoutePatterns.Analytics}>
        <li>Analytics</li>
      </Link>
    </ul>
  );
}
