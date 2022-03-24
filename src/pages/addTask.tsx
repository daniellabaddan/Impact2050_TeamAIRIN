import { useState } from "react";
import Dropdown from "../components/Fields/Dropdown";
import Input from "../components/Fields/Input";
import TextArea from "../components/Fields/TextArea";
import Layout from "../components/Layout/Layout";

export default function AddTask() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categoryOptions = [
    {
      key: "precipitation",
      label: "Precipitation",
    },
    {
      key: "crop-loss",
      label: "Crop Loss",
    },
  ];

  const handleSubmit = () => {
    alert("Submit form");
  };

  const handleSelectCategory = (key: string) => {
    const selectedOption = categoryOptions.find(
      (category) => category.key === key
    );

    if (selectedOption) {
      setSelectedCategory(selectedOption.label);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col space-y-10">
        <h2 className="text-xl font-bold">Add Task</h2>

        <Input label="Task Name" placeholder="Enter task name" />

        <Dropdown
          title="Category"
          options={categoryOptions}
          value={selectedCategory}
          handleChange={handleSelectCategory}
        />

        <TextArea label="Description" placeholder="Enter description" />
      </div>

      <button
        className="bg-green-600 rounded text-white p-2 text-center w-full h-11 mt-16"
        onClick={handleSubmit}
      >
        Save
      </button>
    </Layout>
  );
}
