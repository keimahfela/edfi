import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ImageFrameProps {
  label: string;
  imageSrc: string;
  imageAlt: string;
  Icon: LucideIcon;
  iconColor: string;
}

export function ImageFrame({ label, imageSrc, imageAlt, Icon, iconColor }: ImageFrameProps) {
  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span 
        className="text-gray-500 font-medium mb-2"
        whileHover={{ scale: 1.05 }}
      >
        {label}
      </motion.span>
      <motion.div 
        className="bg-gradient-to-br from-purple-100 to-pink-100 p-2 rounded-xl shadow-lg w-full transform-gpu"
        whileHover={{ 
          scale: 1.05,
          y: -10,
          rotateY: 5,
          transition: { 
            type: "spring", 
            stiffness: 300,
            damping: 15
          }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div 
          className="rounded-lg overflow-hidden bg-white"
          whileHover={{
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
          }}
        >
          <img 
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto"
          />
        </motion.div>
        <motion.div 
          className="mt-2 bg-white p-3 rounded-lg flex justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}