// src/components/dashboard/PropertyCard.tsx
export default function PropertyCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-lg">
            Property ID - 35689155
          </h3>
          <p className="text-sm text-gray-500">
            Looking to Sell • Status: Refreshed
          </p>
        </div>

        <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg">
          Deactivate
        </button>
      </div>

      <div className="mt-4 flex gap-4">
        <button className="text-red-600 text-sm">Preview Listing</button>
        <button className="text-blue-600 text-sm">Share</button>
      </div>
    </div>
  );
}
