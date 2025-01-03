import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="container mx-auto px-4 py-12 mt-16 border-t">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="inline-flex items-center space-x-2 text-gray-600"
          whileHover={{ scale: 1.05 }}
        >
          <span>Made with</span>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Heart className="w-5 h-5 text-red-500 fill-current" />
          </motion.div>
          <span>in</span>
          <span className="font-bold text-gray-800">India</span>
        </motion.div>
      </motion.div>
    </footer>
  );
}