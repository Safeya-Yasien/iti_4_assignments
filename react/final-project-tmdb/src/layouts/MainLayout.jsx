import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-600 selection:text-white">
      <Header />

      <main className="relative pt-20 pb-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
