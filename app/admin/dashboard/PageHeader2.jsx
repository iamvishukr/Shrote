// Note: Keep your "@/lib/firebase" file with { db, auth } exports for Firestore and Auth. This component safely skips if it's missing.

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import {
  BellDot,
  CalendarX as Calendar1,
  Languages,
  LaptopMinimalIcon,
  LayoutDashboard,
  MonitorIcon as MonitorCog,
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
  Bell,
} from "lucide-react";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    function listener(e) {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    }
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default function PageHeader({ onMenuToggle }) {
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");
  const [mounted, setMounted] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [openLang, setOpenLang] = useState(false);
  const [openTheme, setOpenTheme] = useState(false);
  const [openShortcuts, setOpenShortcuts] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  const router = useRouter();

  // Refs for click-outside handling
  const langRef = useRef(null);
  const themeRef = useRef(null);
  const shortcutsRef = useRef(null);
  const notifRef = useRef(null);
  const userRef = useRef(null);

  useOnClickOutside(langRef, () => setOpenLang(false));
  useOnClickOutside(themeRef, () => setOpenTheme(false));
  useOnClickOutside(shortcutsRef, () => setOpenShortcuts(false));
  useOnClickOutside(notifRef, () => setOpenNotifications(false));
  useOnClickOutside(userRef, () => setOpenUser(false));

  useEffect(() => {
    setMounted(true);

    const email =
      typeof window !== "undefined" ? localStorage.getItem("userEmail") : null;
    const uId =
      typeof window !== "undefined"
        ? localStorage.getItem("uId")?.trim()
        : null;

    if (!email || !uId) {
      router.push("/admin/login");
      return;
    }

    async function fetchUser() {
      try {
        // Dynamically import your firebase exports if available
        const mod = await import("@/lib/firebase").catch(() => null);
        if (!mod?.db) return; // If no db, skip silently

        const userRef = doc(mod.db, "users", uId);
        const snap = await getDoc(userRef);
        if (snap.exists()) {
          const data = snap.data();
          setName(data?.name || "");
          setUserType(data?.userType || "");
        } else {
          console.log("No such user!");
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    }

    fetchUser();
  }, [router]);

  const handleLogout = async (e) => {
    e?.preventDefault?.();
    try {
      const mod = await import("@/lib/firebase").catch(() => null);
      const auth = mod?.auth;
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
    setShowMobileMenu((prev) => {
      const next = !prev;
      if (onMenuToggle) onMenuToggle(next);
      return next;
    });
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

  const handleSelectTheme = (theme) => {
    try {
      // You can swap this to work with your theme provider if you have one
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    } catch {}
    setOpenTheme(false);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenLang(false);
        setOpenTheme(false);
        setOpenShortcuts(false);
        setOpenNotifications(false);
        setOpenUser(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!mounted) return null;

  return (
    <header className="flex w-full h-14 bg-white rounded-[10px] p-2 mt-4 md:-mt-8 items-center justify-between mb-8 shadow-sm">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-gray-200 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={showMobileMenu}
        >
          <Menu size={24} className="text-slate-500" />
        </button>
      </div>

      {/* Right controls */}
      <nav className="flex-1 ">
        <div className="flex items-center justify-end w-full gap-2 ">
          {/* Language Dropdown */}
          <div className="relative  " ref={langRef}>
            <button
              onClick={() => setOpenLang((v) => !v)}
              className="inline-flex items-center mt-12 md:mt-0 justify-center h-10 w-10 rounded-full hover:bg-slate-200 focus:outline-none"
              aria-haspopup="menu"
              aria-expanded={openLang}
              aria-label="Select language"
            >
              <Languages size={20} className="text-slate-600" />
            </button>
            {openLang && (
              <div className="absolute right-0 -left-16 md:-left-24  w-40 bg-white border border-gray-200 rounded-[5px] shadow-lg z-50">
                <ul className="py-1">
                  {["English", "French", "Arabic", "German"].map((lang) => (
                    <li key={lang}>
                      <button
                        className="block w-full text-left  py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          console.log("Selected:", lang);
                          setOpenLang(false);
                        }}
                        role="menuitem"
                      >
                        {lang}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Theme Switcher */}
          <div className="relative" ref={themeRef}>
            <button
              onClick={() => setOpenTheme((v) => !v)}
              className="inline-flex items-center mt-12 md:mt-0 justify-center h-10 w-10 rounded-full hover:bg-slate-200 focus:outline-none"
              aria-haspopup="menu"
              aria-expanded={openTheme}
              aria-label="Select theme"
            >
              <Sun size={20} className="text-slate-600" />
            </button>
            {openTheme && (
              <div className="absolute right-0  -left-16 md:-left-24  w-40 bg-white border  border-gray-200 rounded-[5px] shadow-lg z-50">
                <ul className="py-1 text-sm text-gray-700">
                  <li>
                    <button
                      onClick={() => handleSelectTheme("light")}
                      className="flex w-full items-center gap-2  py-2 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <Sun size={18} className="text-slate-500" />
                      <span>Light</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSelectTheme("dark")}
                      className="flex w-full items-center gap-2  py-2 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <MoonStar size={18} className="text-slate-500" />
                      <span>Dark</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSelectTheme("system")}
                      className="flex w-full items-center gap-2  py-2 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <MonitorCog size={18} className="text-slate-500" />
                      <span>System</span>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Shortcuts */}
          <div className="relative" ref={shortcutsRef}>
            <button
              onClick={() => setOpenShortcuts((v) => !v)}
              className="inline-flex mt-12 md:mt-0 items-center justify-center h-10 w-10 hover:bg-slate-200 rounded-full focus:outline-none"
              aria-haspopup="menu"
              aria-expanded={openShortcuts}
              aria-label="Open shortcuts"
            >
              <LayoutDashboard size={20} className="text-slate-600" />
            </button>
            {openShortcuts && (
              <div className="absolute right-0  -left-40 md:-left-72 p-4 w-[300px] md:w-[400px] bg-white border  border-gray-200 rounded-[5px] shadow-lg z-50">
                {/* Header */}
                <div className="border-b  py-3 flex items-center justify-between">
                  <h6 className="mb-0 text-gray-800 font-semibold">
                    Shortcuts
                  </h6>
                  <button
                    className="p-2 text-gray-600 rounded-full hover:bg-gray-200"
                    title="Add shortcuts"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                {/* List */}
                <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center text-center hover:bg-gray-50 p-3 rounded-lg cursor-pointer transition">
                      <span className="bg-gray-100 rounded-full p-3 mb-2 inline-flex items-center justify-center">
                        <Calendar1 size={25} className="text-gray-600" />
                      </span>
                      <a
                        href="#"
                        className="font-medium no-underline text-gray-800"
                      >
                        Calendar
                      </a>
                      <small className="text-gray-500">Appointments</small>
                    </div>

                    <div className="flex flex-col items-center text-center hover:bg-gray-50 p-3 rounded-lg cursor-pointer transition">
                      <span className="bg-gray-100 rounded-full p-3 mb-2 inline-flex items-center justify-center">
                        <Receipt size={25} className="text-gray-600" />
                      </span>
                      <a
                        href="#"
                        className="font-medium no-underline text-gray-800"
                      >
                        Invoice App
                      </a>
                      <small className="text-gray-500">Manage Accounts</small>
                    </div>

                    <div className="flex flex-col items-center text-center hover:bg-gray-50 p-3 rounded-lg cursor-pointer transition">
                      <span className="bg-gray-100 rounded-full p-3 mb-2 inline-flex items-center justify-center">
                        <User size={25} className="text-gray-600" />
                      </span>
                      <a
                        href="#"
                        className="font-medium no-underline text-gray-800"
                      >
                        User App
                      </a>
                      <small className="text-gray-500">Manage Users</small>
                    </div>

                    <div className="flex flex-col items-center text-center hover:bg-gray-50 p-3 rounded-lg cursor-pointer transition">
                      <span className="bg-gray-100 rounded-full p-3 mb-2 inline-flex items-center justify-center">
                        <Users size={25} className="text-gray-600" />
                      </span>
                      <a
                        href="#"
                        className="font-medium no-underline text-gray-800"
                      >
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
                      <a
                        href="#"
                        className="font-medium no-underline text-gray-800"
                      >
                        Dashboard
                      </a>
                      <small className="text-gray-500">User Dashboard</small>
                    </div>

                    <div className="flex flex-col items-center text-center hover:bg-gray-50 p-3 rounded-lg cursor-pointer transition">
                      <span className="bg-gray-100 rounded-full p-3 mb-2 inline-flex items-center justify-center">
                        <Settings size={25} className="text-gray-600" />
                      </span>
                      <a
                        href="#"
                        className="font-medium no-underline text-gray-800"
                      >
                        Setting
                      </a>
                      <small className="text-gray-500">Account Settings</small>
                    </div>

                    <div className="flex flex-col items-center text-center hover:bg-gray-50 p-3 rounded-lg cursor-pointer transition">
                      <span className="bg-gray-100 rounded-full p-3 mb-2 inline-flex items-center justify-center">
                        <CircleCheck size={25} className="text-gray-600" />
                      </span>
                      <a
                        href="#"
                        className="font-medium no-underline text-gray-800"
                      >
                        FAQs
                      </a>
                      <small className="text-gray-500">FAQs & Articles</small>
                    </div>

                    <div className="flex flex-col items-center text-center hover:bg-gray-50 p-3 rounded-lg cursor-pointer transition">
                      <span className="bg-gray-100 rounded-full p-3 mb-2 inline-flex items-center justify-center">
                        <Square size={25} className="text-gray-600" />
                      </span>
                      <a
                        href="#"
                        className="font-medium no-underline text-gray-800"
                      >
                        Modals
                      </a>
                      <small className="text-gray-500">Useful Popups</small>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="relative" ref={notifRef}>
            {/* Bell button */}
            <button
              onClick={() => setOpenNotifications((v) => !v)}
              className="relative inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100"
            >
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>

            {openNotifications && (
             <div className="absolute right-0  top-full mt-2 -left-64 w-[420px] bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-50">

                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 bg-gray-50">
                  <h6 className="text-sm font-semibold text-gray-500">
                    Notifications
                  </h6>
                  <div className="flex items-center gap-2">
                    <span className="bg-indigo-100 text-indigo-600 text-xs font-semibold px-2 py-0.5 rounded">
                      8 New
                    </span>
                    <button
                      className="p-1 rounded-full hover:bg-gray-200"
                      title="Mark all as read"
                    >
                      <MailOpen size={16} className="text-gray-800" />
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="max-h-80 overflow-y-auto ">
                  <ul className="divide-y divide-gray-200">
                    {notificationsData.map((item) => (
                      <li key={item.id} className="list-none -ml-10">
                        {/* full-width row */}
                        <div className="flex items-start px-4 py-2  hover:bg-gray-50 group">
                          {/* Avatar */}
                          <div className="shrink-0">
                            {item.avatar ? (
                              <img
                                src={item.avatar || "/placeholder.svg"}
                                alt=""
                                className="h-10 w-10 rounded-full object-cover"
                              />
                            ) : (
                              <span
                                className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-bold ${
                                  item.bg || "bg-gray-400"
                                }`}
                              >
                                {item.initials}
                              </span>
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0 pl-3">
                            <h6 className="text-[13px] text-[#444050] opacity-90">
                              {item.title}
                            </h6>
                            <p className="text-[13px] text-[#6D6B77] truncate opacity-90">
                              {item.message}
                            </p>
                            <small className="text-xs text-gray-400">
                              {item.time}
                            </small>
                          </div>

                          {/* Actions */}
                          <div className="shrink-0 flex flex-col items-end justify-between">
                            <span className="h-2.5 w-2.5 rounded-full bg-indigo-400"></span>
                            <button className="text-gray-400 hover:text-red-600 mt-8 hidden group-hover:block">
                              <X size={20} />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-300 px-4 py-3 bg-gray-50 text-center">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded"
                  >
                    View all notifications
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative " ref={userRef}>
            <button
              onClick={() => setOpenUser((v) => !v)}
              className="relative inline-flex mt-12 md:mt-0 items-center justify-center h-12 w-12 rounded-full hover:bg-slate-200 focus:outline-none"
              aria-haspopup="menu"
              aria-expanded={openUser}
              aria-label="Open user menu"
            >
              <img
                src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                height={45}
                width={45}
                alt="Avatar"
                className="rounded-full h-10 w-10"
              />
            </button>

            {openUser && (
              <ul className="absolute right-0 mt-2 w-64 bg-white  rounded-[5px] shadow-lg z-50 p-2">
                <li>
                  <div className="px-2 py-2">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://media.licdn.com/dms/image/v2/D5603AQGOEOhBv69Qnw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732119841139?e=2147483647&v=beta&t=Q26v2UHMS6whoDJ28jTVDIVR01JsBKOyTF9X_cVaVpE"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="min-w-0">
                        <h6 className="mb-0 truncate text-gray-900 font-medium">
                          {name || "Alok"}
                        </h6>
                        <small className="text-gray-500">
                          {userType || "admin"}
                        </small>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="my-1 border-t border-gray-200" />
                </li>
                <li>
                  <button
                    className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center gap-2"
                    role="menuitem"
                  >
                    <User size={18} />
                    <span>My Profile</span>
                  </button>
                </li>
                <li>
                  <Link
                    className="w-full px-3 py-2 text-left no-underline text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center gap-2"
                    href="/admin/dashboard/profile-setting"
                    role="menuitem"
                  >
                    <Settings size={18} />
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <div className="px-2 pt-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
