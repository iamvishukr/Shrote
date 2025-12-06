"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MouseCursor from "@/app/components/MouseCursor";
import ContactUs from "./ContactUs";
import JoinOurTeam from "./JoinOurTeam";
import SideEnq from "./SideEnq";
import Users from "./Users";
import Dashboard1 from "./Dashboard1";
import Sidebar1 from "./Sidebar";
import PageHeader from "./PageHeader";
import { ChartContainer } from "@/components/ui/chart";
import Footer from "./Footer";
// import AccountsPage from "./accounts"
import CustomersPage from "../dashboard/customers"

export default function Dashboard() {
  const [active, setActive] = useState("Dashboards");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const uId = localStorage.getItem("uId");
    if (!email || !uId) router.push("/admin/login");
  }, [router]);

  const handleMenuToggle = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const handleSidebarCollapseChange = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  const renderComponent = () => {
    switch (active) {
      case "Dashboard":
        return (
          <ChartContainer>
            <Dashboard1 />
          </ChartContainer>
        );
      case  "customers":
        return (
          <ChartContainer>
            <CustomersPage />
          </ChartContainer>
        );
      case "Contact Us":
        return <ContactUs />;
      case "Join Our Team":
        return <JoinOurTeam />;
      case "Side Enquiry":
        return <SideEnq />;
      case "Users":
        return <Users />;

      
      default:
        return <Dashboard1 />;
    }
  };

  return (
    <div className="flex  h-screen bg-gray-300 overflow-hidden">
      <MouseCursor />

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Single instance that works for both mobile and desktop */}
      <div
        className={`
        fixed lg:relative z-50 h-full transition-transform duration-300
        ${
          isMobileSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        <Sidebar1
          active={active}
          setActive={setActive}
          onCollapseChange={handleSidebarCollapseChange}
          isMobileOpen={isMobileSidebarOpen}
          onMobileClose={() => setIsMobileSidebarOpen(false)}
        />
      </div>

      {/* Main Content */}
    <main
  className={`
    flex-1 pb-4 pr-5 pl-6 pt-3 bg-[#F3F3F3] 
    overflow-auto transition-all header-main duration-300
    scrollbar-thin  scrollbar-thumb-gray-400 scrollbar-track-gray-200
    scrollbar-thumb-rounded-full
    ${isSidebarCollapsed ? "lg:ml-[80px]" : "lg:ml-[260px]"}
  `}
>
  

  <div className="min-h-full w-full overflow-auto">
    <PageHeader onMenuToggle={handleMenuToggle} />
    {renderComponent()}
  </div>
  {/* <Footer /> */}
</main>


      <style jsx global>{`
        main::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        main::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        main::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 5px;
        }
        main::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
}
