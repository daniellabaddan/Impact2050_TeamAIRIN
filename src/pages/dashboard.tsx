import { NavLink } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { RoutePatterns } from "../RoutePatterns";

export default function Dashboard() {
  return (
    <Layout>
      <div className="flex w-full space-x-3 justify-between">
        <NavLink
          to={RoutePatterns.AddEvent}
          className="bg-teal-800 rounded text-white p-2 w-1/2 text-center"
        >
          Add Event
        </NavLink>
        <NavLink
          to={RoutePatterns.AddTask}
          className="bg-teal-700 rounded text-white p-2 w-1/2 text-center"
        >
          Add Task
        </NavLink>
      </div>

      <div className="bg-teal-500 w-full p-2 rounded mt-20 text-zinc-100">
        Upcoming Tasks
      </div>

      <div className="flex py-4 items-center space-x-4">
        <div className="flex flex-col items-center border rounded-lg border-teal-500 py-2 px-4">
          <span className="block text-xl">24</span>
          <span className="block">March</span>
        </div>
        <div>Tomato: Fertilizer Application</div>
      </div>

      <div className="flex py-4 items-center space-x-4">
        <div className="flex flex-col items-center border rounded-lg border-teal-500 py-2 px-4">
          <span className="block text-xl">25</span>
          <span className="block">March</span>
        </div>
        <div>Okra: Fertilizer Application</div>
      </div>

      <div className="bg-teal-500 w-full p-2 rounded mt-20 text-zinc-100">
        Notifications
      </div>
    </Layout>
  );
}
