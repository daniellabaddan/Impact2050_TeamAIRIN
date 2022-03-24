import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "../components/Form/Button";
import Checkbox from "../components/Form/Checkbox";
import Dropdown from "../components/Form/Dropdown";
import Input from "../components/Form/Input";
import TextArea from "../components/Form/TextArea";
import Layout from "../components/Layout/Layout";
import { categoryOptions, employeeOptions, statusOptions } from "./config";

export default function AddTask() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [repeatTask, setRepeatTask] = useState(false);

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

  const handleAssignee = (key: string) => {
    const selectedOption = employeeOptions.find(
      (category) => category.key === key
    );

    if (selectedOption) {
      setSelectedEmployee(selectedOption.label);
    }
  };

  const handleStatus = (key: string) => {
    const selectedOption = statusOptions.find(
      (category) => category.key === key
    );

    if (selectedOption) {
      setSelectedStatus(selectedOption.label);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col space-y-10">
        <h2 className="text-xl font-bold text-zinc-500">Add Task</h2>

        <div className="flex space-x-6">
          <Input label="Task Name" placeholder="Enter task name" />

          <Dropdown
            title="Assign to"
            options={employeeOptions}
            value={selectedEmployee}
            handleChange={handleAssignee}
          />
        </div>

        <Dropdown
          title="Category"
          options={categoryOptions}
          value={selectedCategory}
          handleChange={handleSelectCategory}
        />

        <TextArea label="Description" placeholder="Enter description" />

        <div className="flex space-x-8 w-full">
          <Input
            label="Start Date"
            placeholder="MM/DD/YYYY"
            className="w-2/5"
          />
          <Input label="End Date" placeholder="MM/DD/YYYY" className="w-2/5" />
        </div>

        <div className="flex space-x-8 w-full">
          <Input label="Start Time" placeholder="00:00" className="w-2/5" />
          <Input label="End Time" placeholder="00:00" className="w-2/5" />
        </div>

        <Checkbox
          label="Repeat Task"
          checked={repeatTask}
          onClick={() => setRepeatTask(!repeatTask)}
        />

        <Dropdown
          title="Task Status"
          options={statusOptions}
          value={selectedStatus}
          handleChange={handleStatus}
        />
      </div>

      <Button onClick={handleSubmit} icon={<FontAwesomeIcon icon={faCheck} />}>
        Save
      </Button>
    </Layout>
  );
}
