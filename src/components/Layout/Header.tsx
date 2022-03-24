import logo from "../../assets/images/AirinLogo.png";

export default function Header() {
  return (
    <div className="p-4 flex items-center space-x-5">
      <img src={logo} className="w-12" />
    </div>
  );
}
