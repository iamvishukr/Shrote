import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollUp = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollUp;
