import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-600 selection:text-white">
      <Header />

      <main className="relative pt-20 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
