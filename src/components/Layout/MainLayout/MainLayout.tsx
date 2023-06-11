import NavBar from "@/components/NavBar/NavBar";
type MainLayout = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayout> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
