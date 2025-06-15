
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminHeader from "@/components/AdminHeader";
import StatsOverview from "@/components/StatsOverview";
import InventoryTab from "@/components/InventoryTab";
import ApplicationsTab from "@/components/ApplicationsTab";
import AnalyticsTab from "@/components/AnalyticsTab";

const AdminDashboard = () => {
  const [stockData] = useState([
    { name: "Rice", current: 75, max: 100, unit: "kg", status: "good" },
    { name: "Canned Food", current: 45, max: 80, unit: "units", status: "good" },
    { name: "Bread", current: 15, max: 50, unit: "loaves", status: "low" },
    { name: "Milk", current: 8, max: 40, unit: "cartons", status: "critical" },
    { name: "Vegetables", current: 30, max: 60, unit: "kg", status: "good" },
  ]);

  const [recentApplications] = useState([
    { id: "APP001", name: "Ahmad Abdullah", status: "pending", income: "RM 1,200", date: "2024-06-10" },
    { id: "APP002", name: "Siti Nurhaliza", status: "approved", income: "RM 900", date: "2024-06-09" },
    { id: "APP003", name: "Raj Kumar", status: "pending", income: "RM 1,500", date: "2024-06-08" },
    { id: "APP004", name: "Mary Tan", status: "rejected", income: "RM 2,800", date: "2024-06-07" },
  ]);

  const distributionData = [
    { name: "This Week", distributed: 150, applications: 45 },
    { name: "Last Week", distributed: 120, applications: 38 },
    { name: "2 Weeks Ago", distributed: 180, applications: 52 },
    { name: "3 Weeks Ago", distributed: 95, applications: 30 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatsOverview />

        <Tabs defaultValue="inventory" className="space-y-6 mb-8">
          <TabsList>
            <TabsTrigger value="inventory">Inventory & IoT</TabsTrigger>
            <TabsTrigger value="applications">Beneficiary Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="inventory" className="space-y-6">
            <InventoryTab stockData={stockData} />
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <ApplicationsTab recentApplications={recentApplications} />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <AnalyticsTab distributionData={distributionData} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
