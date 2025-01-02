import { Clock, Download } from 'lucide-react';

export function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Animated logo container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-xl blur-lg opacity-30 animate-pulse"></div>
            <div className="relative bg-white p-2.5 rounded-xl shadow-lg transform transition-transform hover:scale-105">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          
          {/* Title with creative styling */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Exact Date
            </span>
            <span className="text-sm font-medium tracking-wide">
              for <span className="text-purple-600 font-semibold">Instagram</span>
            </span>
          </div>
        </div>

        {/* Original download button */}
        <a
          href="#download"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors duration-200 flex items-center space-x-2"
        >
          <Download className="h-5 w-5" />
          <span>Download</span>
        </a>
      </div>
    </header>
  );
}