import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "../components/Form/Button";
import Dropdown from "../components/Form/Dropdown";
import TextArea from "../components/Form/TextArea";
import Layout from "../components/Layout/Layout";
import { categoryOptions } from "./config";

export default function AddEvent() {
  const [selectedCategory, setSelectedCategory] = useState("");

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
        <h2 className="text-xl font-bold text-zinc-500">Add Event</h2>

        <Dropdown
          title="Category"
          options={categoryOptions}
          value={selectedCategory}
          handleChange={handleSelectCategory}
        />

        <TextArea label="Description" placeholder="Enter description" />
      </div>

      <Button onClick={handleSubmit} icon={<FontAwesomeIcon icon={faCheck} />}>
        Save
      </Button>
    </Layout>
  );
}
