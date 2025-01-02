import React from 'react';
import { motion } from 'framer-motion';

interface TimeDisplayProps {
  weeks: number;
  date: string;
}

export function TimeDisplay({ weeks, date }: TimeDisplayProps) {
  return (
    <>
      <motion.span 
        className="inline-flex items-center mx-2 px-3 py-1 bg-gray-100 rounded-full font-mono text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {weeks}w
      </motion.span>
      into precise dates like
      <motion.span 
        className="inline-flex items-center mx-2 px-3 py-1 bg-purple-100 rounded-full font-mono text-purple-600"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {date}
      </motion.span>
    </>
  );
}