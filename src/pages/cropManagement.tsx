import { useState } from "react";
import Dropdown from "../components/Form/Dropdown";
import Layout from "../components/Layout/Layout";
import { cropOptions } from "./config";

export default function CropManagement() {
  const [selectedCrop, setSelectedCrop] = useState("");

  const handleCrop = (key: string) => {
    setSelectedCrop(key);
  };

  return (
    <Layout>
      <div className="flex flex-col space-y-10">
        <h2 className="text-xl font-bold text-zinc-500">Add Task</h2>

        <Dropdown
          title="Add Crop"
          options={cropOptions}
          value={selectedCrop}
          handleChange={handleCrop}
        />
      </div>
    </Layout>
  );
}
