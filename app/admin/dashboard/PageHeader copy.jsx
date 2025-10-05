"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import {
  Bell,
  BellDot,
  Calendar1,
  ChevronDown,
  Languages,
  LaptopMinimalIcon,
  LayoutDashboard,
  MonitorCog,
  MoonStar,
  Receipt,
  Settings,
  Sun,
  User,
  Users,
  Square,
  CircleCheck,
  Plus,
  MailOpen,
  X,
  Menu,
} from "lucide-react";
import { Chevron } from "react-day-picker";
import { CircleQuestionMark } from "lucide-react";
import Link from "next/link";

function PageHeader({ onMenuToggle }) {
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");
  const [mounted, setMounted] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    const email = localStorage.getItem("userEmail");
    const uId = localStorage.getItem("uId")?.trim();

    if (!email || !uId) {
      router.push("/admin/login");
    } else {
      const fetchUser = async () => {
        try {
          const userRef = doc(db, "users", uId); // Use dynamic uId here
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const userData = userSnap.data();
            setName(userData.name); // Set the 'name' from Firestore document
            setUserType(userData.userType); // Set 'userType' from Firestore document
          } else {
            console.log("No such user!");
          }
        } catch (err) {
          console.error("Error fetching user:", err);
        }
      };
      fetchUser();
    }
  }, [router]);

  const handleLogout = async (e) => {
    e?.preventDefault?.();
    try {
      if (auth) {
        await signOut(auth);
      }
    } catch (err) {
      console.warn("Sign out failed, proceeding to clear local session:", err);
    } finally {
      try {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("uId");
      } catch {}
      router.push("/admin/login");
    }
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    if (onMenuToggle) {
      onMenuToggle(!showMobileMenu);
    }
  };

  const notificationsData = [
    {
      id: 1,
      avatar:
        "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg",
      initials: "LT",
      title: "Congratulation Lettie 🎉",
      message: "Won the monthly best seller gold badge",
      time: "1h ago",
      read: false,
    },
    {
      id: 2,
      avatar: null,
      initials: "CF",
      title: "Charles Franklin",
      message: "Accepted your connection",
      time: "12hr ago",
      read: false,
      bg: "bg-red-500",
    },
    {
      id: 3,
      avatar:
        "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg",
      title: "New Message ✉️",
      message: "You have new message from Natalie",
      time: "1h ago",
      read: true,
    },
    {
      id: 4,
      avatar: null,
      initials: "SC",
      title: "Whoo! You have new order 🛒",
      message: "ACME Inc. made new order $1,154",
      time: "1 day ago",
      read: false,
      bg: "bg-green-500",
      icon: "shopping-cart",
    },
    {
      id: 5,
      avatar:
        "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg",
      title: "Application has been approved 🚀",
      message: "Your ABC project application has been approved.",
      time: "2 days ago",
      read: true,
    },
    {
      id: 6,
      avatar: null,
      initials: "CP",
      title: "Monthly report is generated",
      message: "July monthly financial report is generated",
      time: "3 days ago",
      read: true,
      bg: "bg-yellow-500",
      icon: "chart-pie",
    },
    {
      id: 7,
      avatar:
        "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg",
      title: "Send connection request",
      message: "Peter sent you connection request",
      time: "4 days ago",
      read: true,
    },
    {
      id: 8,
      avatar:
        "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg",
      title: "New message from Jane",
      message: "Your have new message from Jane",
      time: "5 days ago",
      read: false,
    },
    {
      id: 9,
      avatar: null,
      initials: "CPU",
      title: "CPU is running high",
      message: "CPU Utilization Percent is currently at 88.63%",
      time: "5 days ago",
      read: true,
      bg: "bg-yellow-400",
      icon: "alert-triangle",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="flex w-full bg-[#FFFFFF] h-[55px] p-2 rounded-[5px] justify-between items-center mb-6">
      {/* Mobile Menu Button - Only visible on small screens */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-gray-200 focus:outline-none"
          aria-label="Toggle menu"
        >
          <Menu size={24} className="text-slate-500" />
        </button>
      </div>

      <nav
        className="layout-navbar container-xxl navbar-detached navbar navbar-expand-xl align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div
          className="navbar-nav-right d-flex align-items-center justify-content-end w-100"
          id="navbar-collapse"
        >
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            {/* Language Dropdown */}
            <li className="nav-item dropdown-language dropdown">
              <a href="javascript:void(0)" data-bs-toggle="dropdown">
                <span className="inline-flex items-center justify-center h-10 w-10 hover:bg-slate-400 hover:rounded-full">
                  <Languages size={20} className="text-slate-600" />
                </span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end mt-4 md:mt-0 w-full md:w-auto">
                <li>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0)"
                    data-language="en"
                    data-text-direction="ltr"
                  >
                    <span>English</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0)"
                    data-language="fr"
                    data-text-direction="ltr"
                  >
                    <span>French</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0)"
                    data-language="ar"
                    data-text-direction="rtl"
                  >
                    <span>Arabic</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0)"
                    data-language="de"
                    data-text-direction="ltr"
                  >
                    <span>German</span>
                  </a>
                </li>
              </ul>
            </li>

            {/* Theme Switcher */}
            <li className="nav-item dropdown">
              <a
                id="nav-theme"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
              >
                <span className="inline-flex items-center justify-center h-10 w-10 hover:bg-slate-400 hover:rounded-full">
                  <Sun size={20} className="text-slate-600" />
                </span>

                <span className="d-none ms-2" id="nav-theme-text">
                  Toggle theme
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end mt-2 md:mt-0 w-full md:w-auto"
                aria-labelledby="nav-theme-text"
              >
                <li>
                  <button
                    type="button"
                    className="dropdown-item d-flex items-center gap-2 !bg-transparent !text-gray-700 hover:bg-gray-100"
                    data-bs-theme-value="light"
                  >
                    <Sun size={20} className="text-slate-500" />
                    <span>Light</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item d-flex items-center gap-2 !bg-transparent !text-gray-700 hover:bg-gray-100"
                    data-bs-theme-value="dark"
                  >
                    <MoonStar size={20} className="text-slate-500" />
                    <span>Dark</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item d-flex items-center gap-2 !bg-transparent !text-gray-700 hover:bg-gray-100"
                    data-bs-theme-value="system"
                  >
                    <MonitorCog size={20} className="text-slate-500" />
                    <span>System</span>
                  </button>
                </li>
              </ul>
            </li>

            {/* Quick links */}
            <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown">
              <a
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <span className="inline-flex items-center justify-center h-10 w-10 hover:bg-slate-400 hover:rounded-full">
                  <LayoutDashboard size={20} className="text-slate-600" />
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-end p-0 mt-2 md:mt-0 w-full md:w-[350px]">
                {/* Header */}
                <div className="border-b px-4 py-3 flex items-center justify-between">
                  <h6 className="mb-0 text-gray-800 font-semibold">
                    Shortcuts
                  </h6>
                  <button
                    className="py-2 px-3 text-gray-600 rounded-full hover:bg-gray-200"
                    title="Add shortcuts"
                  >
                    <Plus size={20} />
                  </button>
                </div>

                {/* Shortcuts List */}
                <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Shortcut item */}
                    <div className="flex flex-col items-center text-center hover:bg-gray-50 p-3 rounded-lg cursor-pointer transition">
                      <span className="bg-gray-100 rounded-full p-3 mb-2 inline-flex items-center justify-center">
                        <Calendar1 size={25} className="text-gray-600" />
                      </span>
                      <a href="#" className="font-medium text-gray-800">
                        Calendar
                      </a>
                      <small className="text-gray-500">Appointments</small>
                    </div>

                    <div className="flex flex-col items-center text-center hover:bg-gray-50 p-3 rounded-lg cursor-pointer transition">
                      <span className="bg-gray-100 rounded-full p-3 mb-2 inline-flex items-center justify-center">
                        <Receipt size={25} className="text-gray-600" />
                      </span>
                      <a href="#" className="font-medium text-gray-800">
                        Invoice App
                      </a>
                      <small className="text-gray-500">Manage Accounts</small>
                    </div>

                    <div className="flex flex-col items-center text-center hover:bg-gray-50 p-3 rounded-lg cursor-pointer transition">
                      <span className="bg-gray-100 rounded-full p-3 mb-2 inline-flex items-center justify-center">
                        <User size={25} className="text-gray-600" />
                      </span>
                      <a href="#" className="font-medium text-gray-800">
                        User App
                      </a>
                      <small className="text-gray-500">Manage Users</small>
                    </div>

                    <div className="flex flex-col items-center text-center hover:bg-gray-50 p-3 rounded-lg cursor-pointer transition">
                      <span className="bg-gray-100 rounded-full p-3 mb-2 inline-flex items-center justify-center">
                        <Users size={25} className="text-gray-600" />
                      </span>
                      <a href="#" className="font-medium text-gray-800">
                        Role Management
                      </a>
                      <small className="text-gray-500">Permission</small>
                    </div>

                    <div className="flex flex-col items-center text-center hover:bg-gray-50 p-3 rounded-lg cursor-pointer transition">
                      <span className="bg-gray-100 rounded-full p-3 mb-2 inline-flex items-center justify-center">
                        <LaptopMinimalIcon
                          size={25}
                          className="text-gray-600"
                        />
                      </span>
                      <a href="#" className="font-medium text-gray-800">
                        Dashboard
                      </a>
                      <small className="text-gray-500">User Dashboard</small>
                    </div>

                    <div className="flex flex-col items-center text-center hover:bg-gray-50 p-3 rounded-lg cursor-pointer transition">
                      <span className="bg-gray-100 rounded-full p-3 mb-2 inline-flex items-center justify-center">
                        <Settings size={25} className="text-gray-600" />
                      </span>
                      <a href="#" className="font-medium text-gray-800">
                        Setting
                      </a>
                      <small className="text-gray-500">Account Settings</small>
                    </div>

                    <div className="flex flex-col items-center text-center hover:bg-gray-50 p-3 rounded-lg cursor-pointer transition">
                      <span className="bg-gray-100 rounded-full p-3 mb-2 inline-flex items-center justify-center">
                        <CircleCheck size={25} className="text-gray-600" />
                      </span>
                      <a href="#" className="font-medium text-gray-800">
                        FAQs
                      </a>
                      <small className="text-gray-500">FAQs & Articles</small>
                    </div>

                    <div className="flex flex-col items-center text-center hover:bg-gray-50 p-3 rounded-lg cursor-pointer transition">
                      <span className="bg-gray-100 rounded-full p-3 mb-2 inline-flex items-center justify-center">
                        <Square size={25} className="text-gray-600" />
                      </span>
                      <a href="#" className="font-medium text-gray-800">
                        Modals
                      </a>
                      <small className="text-gray-500">Useful Popups</small>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Notification */}
            <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
              <a
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <span className="position-relative">
                  <BellDot size={20} className="text-slate-600 ml-1" />
                  <span className="badge rounded-pill ml-2 bg-danger badge-dot badge-notifications border"></span>
                </span>
              </a>

              <ul
                className="dropdown-menu dropdown-menu-end p-0 shadow-lg mt-2 md:mt-0 w-full md:w-[400px]"
              >
                {/* Header */}
                <li className="dropdown-menu-header border-bottom bg-light">
                  <div className="dropdown-header d-flex align-items-center py-3 px-3">
                    <h6 className="mb-0 me-auto fw-semibold">Notifications</h6>
                    <div className="d-flex align-items-center h6 mb-0">
                      <span className="bg-slate-200 p-1 rounded text-[#685DD8]">
                        8 New
                      </span>
                      <a
                        href="#"
                        className="dropdown-notifications-all p-2 btn btn-icon rounded-circle btn-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Mark all as read"
                      >
                        <MailOpen size={18} />
                      </a>
                    </div>
                  </div>
                </li>

                {/* Notifications List */}
                <li
                  className="dropdown-notifications-list scrollable-container"
                  style={{ maxHeight: "350px", overflowY: "auto" }}
                >
                  <ul className="list-group list-group-flush">
                    {notificationsData.map((item) => (
                      <li
                        key={item.id}
                        className={`list-group-item list-group-item-action dropdown-notifications-item py-3 ${
                          item.read ? "marked-as-read" : ""
                        }`}
                      >
                        <div className="d-flex">
                          {/* Avatar */}
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              {item.avatar ? (
                                <img
                                  src={item.avatar}
                                  alt=""
                                  className="rounded-circle"
                                  style={{ width: "40px", height: "40px" }}
                                />
                              ) : (
                                <span
                                  className={`avatar-initial rounded-circle d-flex align-items-center justify-content-center fw-bold ${
                                    item.bg || "bg-secondary"
                                  } text-white`}
                                  style={{ width: "40px", height: "40px" }}
                                >
                                  {item.initials}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Message */}
                          <div className="flex-grow-1">
                            <h6 className="small mb-1 fw-semibold">
                              {item.title}
                            </h6>
                            <small className="mb-1 d-block text-muted">
                              {item.message}
                            </small>
                            <small className="text-body-secondary">
                              {item.time}
                            </small>
                          </div>

                          {/* Actions */}
                          <div className="flex-shrink-0 dropdown-notifications-actions d-flex flex-column justify-content-between ms-2">
                            <a
                              href="#"
                              className="dropdown-notifications-read mb-2 text-gray-500 hover:text-gray-700 flex items-center"
                            >
                              <span className="badge-dot w-2.5 h-2.5 bg-[#948ed1] rounded-full mr-2"></span>
                            </a>

                            <a
                              href="#"
                              className="dropdown-notifications-archive text-danger fw-bold"
                            >
                              <X size={18} />
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Footer */}
                <li className="border-top bg-light">
                  <div className="d-grid p-3">
                    <a
                      href="#"
                      className="w-full px-4 py-2 text-sm font-semibold text-white bg-[#685DD8] rounded-lg shadow  flex justify-center items-center"
                    >
                      View all notifications
                    </a>
                  </div>
                </li>
              </ul>
            </li>

            {/* User */}
            <li className="nav-item navbar-dropdown me-3 me-xl-2 ml-1 dropdown-user dropdown">
              <a href="javascript:void(0);" data-bs-toggle="dropdown">
                <div className="relative inline-flex items-center justify-center h-12 w-12 hover:bg-slate-200 hover:rounded-full cursor-pointer">
                  <img
                    src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                    height={45}
                    width={45}
                    alt="Avatar"
                    className="rounded-full"
                  />

                  {/* Online indicator */}
                  {/* <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span> */}
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end mt-2 md:mt-0 w-full md:w-auto">
                <li>
                  <a className="dropdown-item mt-0" href="javascript:void(0);">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-2">
                        <div className="avatar avatar-online">
                          <img
                            src="assets/img/avatars/1.png"
                            alt=""
                            className="rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://media.licdn.com/dms/image/v2/D5603AQGOEOhBv69Qnw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732119841139?e=2147483647&v=beta&t=Q26v2UHMS6whoDJ28jTVDIVR01JsBKOyTF9X_cVaVpE" // Replace with your image URL
                          alt="User Avatar"
                          className="w-10 h-10 rounded-full -ml-4 object-cover" // Adjust the size and round the image
                        />

                        <div className="flex-grow-1">
                          <h6 className="mb-0">{name || "Alok"}</h6>
                          <small className="text-body-secondary">
                            {userType || "admin"}
                          </small>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider my-1 mx-n2"></div>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="javascript:void(0);"
                  >
                    <User size={18} className="me-2" />
                    <span className="align-middle">My Profile</span>
                  </a>
                </li>

                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    href="/admin/dashboard/profile-setting" // Correct path to the page
                  >
                    <Settings size={18} className="me-2" />
                    <span className="align-middle">Settings</span>
                  </Link>
                </li>
                <li>
                  <div className="d-grid px-2 pt-2 pb-1">
                    <button
                      type="button"
                      className="btn btn-sm btn-danger d-flex"
                      onClick={handleLogout}
                    >
                      <small className="align-middle">Logout</small>
                      <i className="icon-base ti tabler-logout ms-2 icon-14px"></i>
                    </button>
                  </div>
                </li>
              </ul>
            </li>
            {/* / User */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default PageHeader;