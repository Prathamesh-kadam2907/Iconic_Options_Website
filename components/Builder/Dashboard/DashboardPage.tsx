// src/app/dashboard/page.tsx
import StatCard from "@/components/Builder/Dashboard/StatCard";
import PropertyCard from "@/components/Builder/Dashboard/PropertyCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      
      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
          Hi Prathamesh 👋, Welcome to your Dashboard
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your properties, track performance and view buyer activity
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StatCard
          title="Your Balance"
          value="₹1,800"
          subtitle="Magic Cash"
        />
        <StatCard
          title="Property Visibility"
          value="26%"
          subtitle="Buyers"
        />
        <StatCard
          title="Buyers Waiting"
          value="5"
          subtitle="Leads"
        />
      </div>

      {/* Property Listing Section */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            My Properties
          </h2>

          <button className="text-sm text-red-600 hover:underline font-medium">
            View All
          </button>
        </div>

        <PropertyCard />
      </div>
    </div>
  );
}
