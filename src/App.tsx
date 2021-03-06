import "rc-dropdown/assets/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEvent from "./pages/addEvent";
import AddTask from "./pages/addTask";
import Analytics from "./pages/analytics";
import Automation from "./pages/automation";
import CropManagement from "./pages/cropManagement";
import Dashboard from "./pages/dashboard";
import Financial from "./pages/financial";
import Inventory from "./pages/inventory";
import { RoutePatterns } from "./RoutePatterns";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={RoutePatterns.Dashboard} element={<Dashboard />} />
        <Route
          path={RoutePatterns.CropManagement}
          element={<CropManagement />}
        />
        <Route path={RoutePatterns.Automation} element={<Automation />} />
        <Route path={RoutePatterns.Inventory} element={<Inventory />} />
        <Route path={RoutePatterns.Financial} element={<Financial />} />
        <Route path={RoutePatterns.Analytics} element={<Analytics />} />

        <Route path={RoutePatterns.AddEvent} element={<AddEvent />} />
        <Route path={RoutePatterns.AddTask} element={<AddTask />} />
      </Routes>
    </Router>
  );
}
