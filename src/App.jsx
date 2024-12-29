import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import '../src/index.css';
import '../styles/globals.css';
import Preloader from './Utils/Preloader';
import ExitPreloader from './Utils/ExitPreloader';
import PageTransition from './Utils/PageTransition';
import ContactPage from './Components/Contact';
import ScheduleCallDialog from './Components/ScheduleCallDialog';

const Home = lazy(() => import('../Pages/Home'));
const Careers = lazy(() => import('../Pages/Careers'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    // Show the preloader for 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (isLoading) {
    // Render only the Preloader while loading
    return <Preloader />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Suspense fallback={<div className="loader">
              {/* <ExitPreloader /> */}
              {/* <PageTransition /> */}
            </div>}>
              <Routes>
              <Route path="/home" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/career" element={<Careers />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/schedule" element={<ScheduleCallDialog />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
