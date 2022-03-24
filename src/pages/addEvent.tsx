import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { useState } from "react";
import Layout from "../components/Layout/Layout";

export default function AddEvent() {
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const onSelect = ({ key }: { key: string }) => {
    setSelectedCategory(key);
    setVisible(false);
  };

  const menu = (
    <Menu onSelect={onSelect}>
      <MenuItem key="precipitation">Precipitation</MenuItem>
      <MenuItem key="crop-loss">Crop Loss</MenuItem>
    </Menu>
  );

  return (
    <Layout>
      <div className="flex flex-col space-y-10">
        <h1>Add Event</h1>

        <div className="flex flex-col space-x-5">
          <h4>Category</h4>
          <Dropdown
            trigger={["click"]}
            overlay={menu}
            animation="slide-up"
            visible={visible}
            onVisibleChange={setVisible}
          >
            <button className="bg-zinc-100">
              {selectedCategory || "Select"}
            </button>
          </Dropdown>
        </div>

        <div className="flex flex-col space-x-5">
          <h4>Description</h4>
          <textarea className="py-4" placeholder="Enter category" />
        </div>

        <div className="flex justify-between space-x-8">
          <button className="bg-green-600 rounded text-white p-2 text-center w-1/2">
            Save
          </button>

          <button className="bg-zinc-200 rounded p-2text-center w-1/2">
            Cancel
          </button>
        </div>
      </div>
    </Layout>
  );
}
