import classNames from "classnames";

interface Props {
  label: string;
  placeholder: string;
  className?: string;
}

export default function Input({
  label,
  placeholder,
  className = "w-full",
}: Props) {
  return (
    <div className={classNames("flex flex-col space-y-4", className)}>
      <h4>{label}</h4>
      <input
        placeholder={placeholder}
        className="my-5 border border-teal-400 rounded p-2 active:border-teal-400"
      />
    </div>
  );
}
