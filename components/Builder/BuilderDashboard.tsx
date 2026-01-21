// src/app/dashboard/layout.tsx
import Sidebar from "@/components/Builder/Dashboard/Sidebar";
import DashboardPage from "./Dashboard/DashboardPage";
import BuilderRegister from "./Pages/BuilderRegister";

export default function BuilderDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <div className="flex min-h-screen px-20 bg-gray-100">
  <Sidebar />

  {/* Main Content */}
  <div className="flex-1 p-6 px-20 space-y-6">
    <DashboardPage />
    <BuilderRegister />
  </div>
</div>

    
  );
}