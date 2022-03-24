import { NavLink } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { RoutePatterns } from "../RoutePatterns";

export default function Dashboard() {
  return (
    <Layout>
      <div className="flex w-full space-x-8 justify-center">
        <NavLink
          to={RoutePatterns.AddEvent}
          className="bg-green-600 rounded text-white p-2 w-40 text-center"
        >
          Add Event
        </NavLink>
        <NavLink
          to={RoutePatterns.AddTask}
          className="bg-teal-700 rounded text-white p-2 w-40 text-center"
        >
          Add Task
        </NavLink>
      </div>

      <div className="bg-teal-200 w-full p-2 rounded mt-20">Upcoming Tasks</div>
      <div className="flex py-10 items-center space-x-4">
        <div className="flex flex-col items-center bg-emerald-100 rounded-lg p-2">
          <span className="block text-xl">24</span>
          <span className="block">March</span>
        </div>
        <div>Tomato: Fertilizer Application</div>
      </div>

      <div className="bg-teal-200 w-full p-2 rounded mt-20">Notifications</div>
    </Layout>
  );
}
