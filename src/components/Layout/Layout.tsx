import Header from "./Header";
import Menu from "./Menu";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-screen h-[calc(100%-80px)] flex flex-col pb-28">
      <Header />
      <div className="flex-1 px-4 mt-8">{children}</div>
      <Menu />
    </div>
  );
}
