interface Props {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick: () => void;
}

export default function ({ children, icon, onClick }: Props) {
  return (
    <button
      className="bg-green-600 rounded text-white p-2 text-center w-full h-11 mt-16 flex justify-center"
      onClick={onClick}
    >
      <div className="mr-4">{icon}</div>
      {children}
    </button>
  );
}
