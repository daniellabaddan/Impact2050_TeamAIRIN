interface Props {
  label: string;
  placeholder: string;
}

export default function Input({ label, placeholder }: Props) {
  return (
    <div className="flex flex-col space-y-4">
      <h4>{label}</h4>
      <input
        placeholder={placeholder}
        className="my-5 ml-0 border border-teal-400 rounded p-2 active:border-teal-400"
      />
    </div>
  );
}
