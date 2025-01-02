import { Frown, Smile } from 'lucide-react';

export function ImageFrames() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="flex flex-col items-center">
        <span className="text-gray-500 font-medium mb-2">Before</span>
        <div className="bg-gray-100 p-2 rounded-xl shadow-md w-full">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/src/img/before.png"
              alt="Instagram post before extension"
              className="w-full h-auto"
            />
          </div>
          <div className="mt-2 bg-white p-3 rounded-lg flex justify-center">
            <Frown className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-gray-500 font-medium mb-2">After</span>
        <div className="bg-gray-100 p-2 rounded-xl shadow-md w-full">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/src/img/after.png"
              alt="Instagram post after extension"
              className="w-full h-auto"
            />
          </div>
          <div className="mt-2 bg-white p-3 rounded-lg flex justify-center">
            <Smile className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
}