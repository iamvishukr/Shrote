import React, { Suspense, lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import "../src/index.css";
import "../styles/globals.css";
import Preloader from "./Utils/Preloader";
import ContactPage from "./Components/Contact";
import ScheduleCallDialog from "./Components/ScheduleCallDialog";
import AboutUs from "../Pages/AboutUs";
import ErrorPage from "../Pages/Error";
import ScrollUp from "./Components/ScrollUp";
import AdminDashboard from "../Pages/Dashboard";

const Home = lazy(() => import("../Pages/Home"));
const Careers = lazy(() => import("../Pages/Careers"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Router>
      <ScrollUp />
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Layout>
          <AnimatePresence mode="wait">
            <Suspense fallback={<div className="loader"></div>}>
              <Routes>
                {/* Redirect /home to / */}
                <Route path="/home" element={<Navigate to="/" />} />

                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/career" element={<Careers />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Admin Route */}
                <Route path="/admin" element={<AdminDashboard />} />

                {/* Fallback Route */}
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </Layout>
      </div>
    </Router>
  );
}

function Layout({ children }) {
  const location = useLocation();

  // Exclude Header and Footer for "/admin" route
  const isDashboard = location.pathname.startsWith("/admin");

  return (
    <>
      {!isDashboard && <Header />}
      <main className="flex-grow">{children}</main>
      {!isDashboard && <Footer />}
      <ScrollToTop />
    </>
  );
}

export default App;
