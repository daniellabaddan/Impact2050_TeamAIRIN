interface Props {
  checked: boolean;
  label: string;
  onClick: (checked: boolean) => void;
}

export default function Checkbox({ checked, label, onClick }: Props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-teal-600 checked:border-teal-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        checked={checked}
        onClick={() => onClick(!checked)}
      />
      <label
        className="form-check-label inline-block text-gray-800"
        htmlFor="flexCheckDefault"
      >
        {label}
      </label>
    </div>
  );
}
