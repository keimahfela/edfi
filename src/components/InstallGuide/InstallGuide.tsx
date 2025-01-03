import { motion } from 'framer-motion';
import { Download, Chrome, Settings, Power, Check } from 'lucide-react';
import { Step } from './Step';
import { DownloadButton } from './DownloadButton';

export function InstallGuide() {
  const steps = [
    {
      Icon: Download,
      title: "Download the Extension",
      description: "Get started by downloading and extracting our extension package to your computer."
    },
    {
      Icon: Chrome,
      title: "Open Chrome Extensions",
      description: "Navigate to chrome://extensions in your Chrome browser."
    },
    {
      Icon: Settings,
      title: "Enable Developer Mode",
      description: "Look for the Developer mode toggle in the top right corner and enable it."
    },
    {
      Icon: Power,
      title: "Load the Extension",
      description: "Click 'Load unpacked' and select the folder containing the extracted extension files."
    },
    {
      Icon: Check,
      title: "You're All Set!",
      description: "The extension is now installed and ready to transform your Instagram experience."
    }
  ];

  return (
    <motion.div 
      className="relative bg-white p-8 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-2xl -z-10"
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
      
      <motion.h2 
        className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
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
        Quick Installation Guide
      </motion.h2>

      <div className="space-y-2">
        {steps.map((step, index) => (
          <Step
            key={index}
            number={index + 1}
            title={step.title}
            description={step.description}
            Icon={step.Icon}
          />
        ))}
      </div>

      <DownloadButton />
    </motion.div>
  );
}