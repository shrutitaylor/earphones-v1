// RippleEffect.js
import React from 'react';
import { motion } from 'framer-motion';

const RippleEffect = () => {
  const rippleVariants = {
    initial: {
      scale: 0,
      opacity: 1,
    },
    animate: {
      scale: 3,
      opacity: 0,
      transition: {
        duration: 2,
        ease: 'easeOut',
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-64 h-64 border-2 border-blue-500 rounded-full"
          variants={rippleVariants}
          initial="initial"
          animate="animate"
          style={{
            borderColor: 'rgba(139, 139, 139, 0.5)',
          }}
        />
      ))}
    </div>
  );
};

export default RippleEffect;