import React, { useState } from "react";
import TabButton from "./TabButton";
import SecurityContent from "./SecurityContent";
import {
  Bell,
  Bookmark,
  Link2,
  LockKeyhole,
  UserRoundCheck,
} from "lucide-react";

const SecuritySettings = () => {
  const [activeTab, setActiveTab] = useState("security");

  return (
    <>
      {/* Tabs Section */}
      <div
  className="
    w-full md:w-[800px] 
    mb-6 flex flex-wrap 
    gap-2 md:-gap-4   // ✅ keeps mobile spacing, reduces desktop spacing
    
    md:-ml-4 
  "
>
  <TabButton
    icon={<UserRoundCheck size={20} />}
    label="Account"
    isActive={activeTab === "account"}
    onClick={() => setActiveTab("account")}
    className="w-[90%] sm:w-[45%] md:w-auto"
  />
  <TabButton
    icon={<LockKeyhole size={20} />}
    label="Security"
    isActive={activeTab === "security"}
    onClick={() => setActiveTab("security")}
    className="w-[90%] sm:w-[45%] md:w-auto"
  />
  <TabButton
    icon={<Bookmark size={20} />}
    label="Billing & Plans"
    isActive={activeTab === "billing"}
    onClick={() => setActiveTab("billing")}
    className="w-[90%] sm:w-[45%] md:w-auto"
  />
  <TabButton
    icon={<Bell size={20} />}
    label="Notifications"
    isActive={activeTab === "notifications"}
    onClick={() => setActiveTab("notifications")}
    className="w-[90%] sm:w-[45%] md:w-auto"
  />
  <TabButton
    icon={<Link2 size={20} />}
    label="Connections"
    isActive={activeTab === "connections"}
    onClick={() => setActiveTab("connections")}
    className="w-[90%] sm:w-[45%] md:w-auto"
  />
</div>


      {/* Content Section */}
      <div
        className="
          w-full md:w-[700px] 
          -ml-0 md:-ml-3
        "
      >
        {activeTab === "security" && <SecurityContent />}

        {activeTab === "account" && (
          <div className="min-h-40 md:h-96 bg-white border rounded-lg p-4">
            Account Content
          </div>
        )}
        {activeTab === "billing" && (
          <div className="min-h-40 md:h-96 bg-white border rounded-lg p-4">
            Billing & Plans Content
          </div>
        )}
        {activeTab === "notifications" && (
          <div className="min-h-40 md:h-96 bg-white border rounded-lg p-4">
            Notifications Content
          </div>
        )}
        {activeTab === "connections" && (
          <div className="min-h-40 md:h-96 bg-white border rounded-lg p-4">
            Connections Content
          </div>
        )}
      </div>
    </>
  );
};

export default SecuritySettings;
