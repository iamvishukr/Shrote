import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
const images = [
  { src: hero1, placeholder: '/placeholder-hero1.jpg' },
  { src: hero2, placeholder: '/placeholder-hero2.jpg' },
  { src: hero3, placeholder: '/placeholder-hero3.jpg' },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export function BackgroundCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imageRef = useRef(null);

  const imageIndex = Math.abs(page % images.length);

  const paginate = useCallback((newDirection) => {
    setPage([page + newDirection, newDirection]);
    setIsImageLoaded(false);
  }, [page]);

  useEffect(() => {
    const preloadNextImage = () => {
      const nextIndex = (imageIndex + 1) % images.length;
      const img = new Image();
      img.src = images[nextIndex].src;
    };

    preloadNextImage();
  }, [imageIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [paginate]);

  useEffect(() => {
    if (imageRef.current) {
      if (imageRef.current.complete) {
        setIsImageLoaded(true);
      } else {
        imageRef.current.onload = () => setIsImageLoaded(true);
      }
    }
  }, [imageIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
            style={{ 
              backgroundImage: `url(${images[imageIndex].placeholder})`,
              opacity: isImageLoaded ? 0 : 1 
            }}
          />
          <img
            ref={imageRef}
            src={images[imageIndex].src}
            alt={`Hero image ${imageIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isImageLoaded ? 1 : 0 }}
          />
          {/* Softer overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-transparent to-gray-900/70" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === imageIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setPage([index, index > imageIndex ? 1 : -1])}
          />
        ))}
      </div>
    </div>
  );
}

