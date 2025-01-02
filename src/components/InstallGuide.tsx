export function InstallGuide() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Installation Guide</h2>
      <ol className="list-decimal list-inside space-y-4 text-left mb-6">
        <li>Download and unzip the extension</li>
        <li>Open Chrome and go to <code className="bg-gray-100 px-2 py-1 rounded">chrome://extensions</code></li>
        <li>Enable "Developer mode" in the top right corner</li>
        <li>Click "Load unpacked" and select the unzipped extension folder</li>
        <li>The extension will now be installed and ready to use!</li>
      </ol>
      <a
        href="https://gofile.io/d/TXSkrD"
        className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200"
        download
      >
        <span>Download Extension</span>
      </a>
    </div>
  );
}