import { Clock, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header 
      className="container mx-auto px-4 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-4"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl blur-lg opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div 
              className="relative bg-white p-2.5 rounded-xl shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Clock className="h-6 w-6 text-purple-600" />
            </motion.div>
          </div>
          
          <div className="flex flex-col">
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ backgroundSize: '200% auto' }}
            >
              Exact Date
            </motion.span>
            <span className="text-sm font-medium tracking-wide">
              for <span className="text-purple-600 font-semibold">Instagram</span>
            </span>
          </div>
        </motion.div>

        <motion.a
          href="#download"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full transition-all duration-200 flex items-center space-x-2 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="h-5 w-5" />
          <span>Download</span>
        </motion.a>
      </div>
    </motion.header>
  );
}