"use client";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronRight,
  CircleDot,
  Fence,
  ImageUp,
  Users,
  Newspaper,
  Menu,
  ChevronLeft,
  MailOpen,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";
import { IconColorSwatch, IconSmartHome } from "@tabler/icons-react";
import { IconPhotoQuestion } from "@tabler/icons-react";

const sidebarData = [
  {
    title: "Dashboards",
    icon: <IconSmartHome stroke={2} size={22} />,
    key: "Dashboards",
  },
  {
    title: "Inquiry Management",
    subtitle: "INQUIRY MANAGEMENT",
    children: [
      { title: "New Enquiry", key: "New Enquiry" },
      { title: "Pending Enquiry", key: "Pending Enquiry" },
      { title: "Closed Enquiry", key: "Closed Enquiry" },
      { title: "Not Interested Enquiry", key: "Not Interested Enquiry" },
    ],
    icon: <IconPhotoQuestion stroke={2} size={22} />,
  },
  {
    title: "Customers",
    subtitle: "CUSTOMERS",
    children: [
      { title: "New Customer", key: "New Customer" },
      { title: "Customers List", key: "Customers List" },
    ],
    icon: <Users size={22} />,
  },
  {
    title: "Masters",
    subtitle: "MASTERS",
    children: [
      { title: "Contact Us", key: "Contact Us" },
      { title: "Join Our Team", key: "Join Our Team" },
      { title: "Side Enquiry", key: "Side Enquiry" },
      { title: "Users", key: "Users" },
      { title: "Service", key: "Service" },
      { title: "Contract Head", key: "Contract Head" },
      {
        title: "Terms And Conditions For..",
        key: "Terms And Conditions For..",
      },
      { title: "Role Manager", key: "Role Manager" },
      { title: "Frequency", key: "Frequency" },
      { title: "Unit Of Measure", key: "Unit Of Measure" },
      { title: "Chemical", key: "Chemical" },
      { title: "Area", key: "Area" },
      { title: "Term & Condition", key: "Term & Condition" },
      { title: "Country", key: "Country" },
      { title: "Designation", key: "Designation" },
      { title: "Department", key: "Department" },
      { title: "State", key: "State" },
      { title: "City", key: "City" },
      { title: "Tax", key: "Tax" },
      { title: "Company", key: "Company" },
    ],
    icon: <IconColorSwatch stroke={2} size={22} />,
  },
  {
    title: "Human Resource",
    subtitle: "HUMAN RESOURCE",
    children: [{ title: "Employee", key: "Employee" }],
    icon: <Newspaper size={22} />,
  },
];

export default function Sidebar({
  active,
  setActive,
  onCollapseChange,
  isMobileOpen,
  onMobileClose,
}) {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [collapsed, setCollapsed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on a mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const toggleDropdown = (title) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const toggleSidebar = () => {
    if (isMobile) {
      // For mobile, we only want to toggle the mobile sidebar
      if (isMobileOpen && onMobileClose) {
        onMobileClose();
      }
    } else {
      // For desktop, toggle collapsed state
      setCollapsed(!collapsed);
      setHovered(false);
    }
  };
  // Inside Sidebar component
  useEffect(() => {
    if (!active) {
      setActive("Dashboards"); // Set Dashboard as active on load
    }
  }, [active, setActive]);

  const handleItemClick = (key) => {
    setActive(key);
    // Close mobile sidebar after selection
    if (isMobile && isMobileOpen && onMobileClose) {
      setTimeout(() => onMobileClose(), 100);
    }
  };

  const isExpanded = !collapsed || hovered;

  // Notify parent of collapse state for main content
  useEffect(() => {
    if (onCollapseChange) {
      onCollapseChange(collapsed);
    }
  }, [collapsed, onCollapseChange]);

  // Determine sidebar classes based on device and state
  const getSidebarClasses = () => {
    if (isMobile) {
      return `bg-white text-gray-600 pl-4 text-[15px] flex flex-col fixed h-full overflow-auto transition-all duration-300 z-40 left-0 top-0
        ${
          isMobileOpen
            ? "translate-x-0 w-[250px]"
            : "-translate-x-full w-[250px]"
        }`;
    } else {
      return `bg-white text-gray-600 pl-2 text-[15px] flex flex-col fixed h-full overflow-auto transition-all duration-300 z-40
        ${isExpanded ? "w-[260px]" : "w-[80px]"}`;
    }
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={getSidebarClasses()}
        onMouseEnter={!isMobile ? () => setHovered(true) : undefined}
        onMouseLeave={!isMobile ? () => setHovered(false) : undefined}
      >
        <div className="p-4 ml-8 -mt-2 border-gray-200 flex items-center justify-between">
          {(!collapsed || hovered || isMobileOpen) && (
            <img
              src="https://www.marswebsolution.com/images/logo.png"
              alt="Admin Panel Logo"
              className="w-40 h-10 "
            />
          )}
          <button
            onClick={toggleSidebar}
            className={`  ${!isExpanded && !isMobile ? "-ml-[25px]" : ""} ${
              isMobile ? "block" : ""
            }`}
          >
            {isMobile ? (
              <p
                onClick={onMobileClose}
                className="
                w-8 h-8 
                flex items-center justify-center 
                rounded-full 
                bg-gray-200 text-gray-800 
                cursor-pointer 
                hover:bg-gray-300 hover:text-gray-900
                transition
              "
              >
                X
              </p>
            ) : isExpanded ? (
              <ChevronLeft size={20} />
            ) : (
              <span className="pl-8">
                <Menu size={20} />
              </span>
            )}
          </button>
        </div>

        <div className="flex-1 -mt-8 overflow-y-auto py-4 ">
          {sidebarData.map((item) => (
            <div key={item.title} className="mb-2 px-2 ">
              {item.subtitle && (isExpanded || isMobileOpen) && (
                <p className="uppercase mb-1 mt-4 mb-2 pl-[12px] pb-[2px] text-[13px] font-medium text-gray-400">
                  {item.subtitle}
                </p>
              )}

              {!item.children ? (
                <button
  className={`flex items-center text-[15px] rounded w-[235px] transition-all
    ${
      isExpanded || isMobileOpen
        ? active === item.key
          ? "bg-gradient-to-r from-[#7367F0] to-[#9b8cf2] text-white opacity-90"
          : "hover:bg-gray-300"
        : "" // collapsed → no hover or active styles
    }
    ${
      isExpanded || isMobileOpen
        ? "justify-start mb-2 pl-[12px] pr-[8px] pt-[8px] pb-[7px]"
        : "justify-start ml-3 mb-2  p-2"
    }
  `}
  onClick={() => handleItemClick(item.key)}
  title={item.title}
>
  {item.icon && (
    <span className={isExpanded || isMobileOpen ? "mr-2" : ""}>
      {item.icon}
    </span>
  )}
  {(isExpanded || isMobileOpen) && item.title}
</button>

              ) : (
                <div>
                  <button
  className={`flex font-medium opacity-90 items-center rounded mb-1 transition-all
    ${
      isExpanded || isMobileOpen
        ? "pl-[12px] pr-2 w-[235px] pt-2 pb-2 justify-between"
        : "justify-center w-[60px] h-[40px]"
    }
    ${
      item.children.some((child) => child.key === active)
        ? "bg-gray-200 text-gray-400"
        : "hover:bg-gray-300"
    }`}
  onClick={() =>
    (isExpanded || isMobileOpen) && toggleDropdown(item.title)
  }
  title={item.title}
>
  <div className="flex items-center gap-2">
    {item.icon}
    {(isExpanded || isMobileOpen) && (
      <span className="truncate text-md">{item.title}</span>
    )}
  </div>
  {(isExpanded || isMobileOpen) &&
    (openDropdowns[item.title] ? (
      <ChevronDown size={18} />
    ) : (
      <ChevronRight size={18} />
    ))}
</button>


                  {(isExpanded || isMobileOpen) &&
                    openDropdowns[item.title] && (
                      <div className="flex flex-col">
                        {item.children.map((child) => (
                          <button
                            key={child.key}
                            className={`flex items-center gap-2 p-2 font-medium rounded w-[235px] transition-all text-left

                            ${
                              active === child.key
                                ? "bg-indigo-500 text-white opacity-80"
                                : "hover:bg-gray-300"
                            }`}
                            onClick={() => handleItemClick(child.key)}
                          >
                            {/* <CircleSmall size={12} /> */}
                            <span className="text-[10px] p-1">
                              <FontAwesomeIcon icon={farCircle} />
                            </span>

                            <span
                              className="truncate w-full text-sm min-w-0"
                              title={child.title}
                            >
                              {child.title}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
