import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

export function DownloadButton() {
  return (
    <motion.div
      className="flex justify-center mt-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.a
        href="https://gofile.io/d/TXSkrD"
        className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download className="w-5 h-5" />
        <span>Download Extension</span>
        <motion.div
          className="absolute right-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
          initial={false}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </motion.div>
  );
}