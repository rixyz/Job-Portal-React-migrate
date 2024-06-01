import { Outlet } from "react-router-dom";

const CompanyLayout = () => {
  return (
    <main className="bg-gray min-h-screen dark:bg-boxdark-2">
      <Outlet />
    </main>
  );
};

export default CompanyLayout;
