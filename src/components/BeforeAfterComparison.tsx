export function BeforeAfterComparison() {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-gray-100 p-4 rounded-xl w-full max-w-[200px] shadow-sm">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-sm text-gray-500 font-medium mb-2">Before</div>
            <div className="bg-white px-3 py-2 rounded-lg text-center shadow-sm text-gray-600 font-medium text-sm">
              25w
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500 font-medium mb-2">After</div>
            <div className="bg-white px-3 py-2 rounded-lg text-center shadow-sm text-purple-600 font-medium text-sm">
              Jul 9, 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}