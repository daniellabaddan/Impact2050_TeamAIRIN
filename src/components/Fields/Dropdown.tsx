import RCDropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { useState } from "react";

interface Props {
  value: string;
  title: string;
  options: { key: string; label: string }[];
  handleChange: (key: string) => void;
}

export default function Dropdown({
  value,
  title,
  options,
  handleChange,
}: Props) {
  const [visible, setVisible] = useState(false);

  const handleSelect = (key: string) => {
    handleChange(key);
    setVisible(false);
  };

  const dropdownOptions = (
    <Menu onSelect={({ key }) => handleSelect(key)}>
      {options.map(({ key, label }) => (
        <MenuItem key={key} className="h-11 text-2xl">
          {label}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <div className="flex flex-col space-y-4">
      <h4>{title}</h4>
      <RCDropdown
        trigger={["click"]}
        overlay={dropdownOptions}
        animation="slide-up"
        visible={visible}
        onVisibleChange={setVisible}
      >
        <button className="h-11 bg-teal-100">{value || "Select"}</button>
      </RCDropdown>
    </div>
  );
}
