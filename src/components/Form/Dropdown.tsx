import RCDropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { useState } from "react";

interface Props {
  value: string;
  title: string;
  options: { key: string; label: string; image?: React.ReactNode }[];
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
      {options.map(({ key, label, image }) => (
        <MenuItem key={key}>
          <div className="text-base">{label}</div>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <div className="flex flex-col space-y-4 w-full">
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
