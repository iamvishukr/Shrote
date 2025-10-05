"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MouseCursor from "@/app/components/MouseCursor";
import ContactUs from "../ContactUs";
import JoinOurTeam from "../JoinOurTeam";
import SideEnq from "../SideEnq";
import Users from "../Users";
import AddressCard from "./AdrressCard";
import Sidebar1 from "../Sidebar";
import PageHeader from "../PageHeader";
import { ChartContainer } from "@/components/ui/chart";
import Footer from "../Footer";

export default function Dashboard() {
  const [active, setActive] = useState("Dashboards");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const uId = localStorage.getItem("uId");
    if (!email || !uId) router.push("/admin/login");
  }, [router]);

  const handleMobileToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleMobileClose = () => {
    setIsMobileOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-300 overflow-hidden">
      <MouseCursor />

      <Sidebar1
        active={active}
        setActive={setActive}
        onCollapseChange={(collapsed) => setIsSidebarCollapsed(collapsed)}
        isMobileOpen={isMobileOpen}
        onMobileClose={handleMobileClose}
      />

     <main
        className={`
          flex-1 p-3 bg-[#F3F3F3] overflow-auto  transition-all duration-300
          ${isSidebarCollapsed ? 'lg:ml-[70px]' : 'lg:ml-[250px]'}
        `}
      >
        <PageHeader onMenuToggle={handleMobileToggle} />
        <div className="min-h-full w-full overflow-auto mt-4">
          <ChartContainer>
            <AddressCard />
          </ChartContainer>
        </div>
        <Footer />
      </main>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={handleMobileClose}
        />
      )}

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