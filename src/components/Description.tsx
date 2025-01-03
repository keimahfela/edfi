import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getRandomWeeks, calculateDateFromWeeks } from '../utils/dateUtils';

export function Description() {
  const [weeks, setWeeks] = useState(0);
  const [date, setDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomWeeks = getRandomWeeks();
      setWeeks(randomWeeks);
      setDate(calculateDateFromWeeks(randomWeeks));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <p className="text-xl text-gray-600 mb-12 leading-relaxed">
        Tired of Instagram's cryptic timestamps? We transform those puzzling{' '}
        <AnimatePresence mode="wait">
          <motion.span
            key={weeks}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="inline-flex items-center mx-2 px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full font-mono text-purple-600 shadow-sm"
          >
            {weeks}w
          </motion.span>
        </AnimatePresence>
        into crystal-clear dates like{' '}
        <AnimatePresence mode="wait">
          <motion.span
            key={date}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="inline-flex items-center mx-2 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-mono shadow-md"
          >
            {date}
          </motion.span>
        </AnimatePresence>
        {' '}— because your time is too precious for guesswork.
      </p>
      
      <motion.div
        className="absolute -z-10 inset-0 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-3xl blur-xl"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
}