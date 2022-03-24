import Layout from "../components/Layout/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div className="flex w-full space-x-8 justify-center">
        <button className="bg-green-600 rounded text-white p-2 w-40">
          Add Event
        </button>
        <button className="bg-teal-700 rounded text-white p-2 w-40">
          Add Task
        </button>
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
