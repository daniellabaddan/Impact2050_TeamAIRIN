import Header from "./Header";
import Menu from "./Menu";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex-1 px-4">{children}</div>
      <Menu />
    </div>
  );
}
