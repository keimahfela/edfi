import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export function Step({ number, title, description, Icon }: StepProps) {
  return (
    <motion.div 
      className="grid grid-cols-[auto_1fr] gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
    >
      {/* Number Circle */}
      <motion.div 
        className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold"
        whileHover={{ scale: 1.1 }}
      >
        {number}
      </motion.div>

      {/* Content */}
      <div className="flex flex-col">
        {/* Title and Icon */}
        <div className="flex items-center space-x-2 mb-1">
          <Icon className="w-5 h-5 text-purple-600" />
          <h3 className="font-semibold text-gray-800">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 pl-7 -mt-1">{description}</p>
      </div>
    </motion.div>
  );
}