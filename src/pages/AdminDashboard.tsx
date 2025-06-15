
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
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

        <Tabs defaultValue="stock-analysis" className="space-y-6 mb-8">
          <TabsList>
            <TabsTrigger value="stock-analysis">Stock Level Analysis</TabsTrigger>
            <TabsTrigger value="inventory-management">Inventory Management</TabsTrigger>
            <TabsTrigger value="applications">Beneficiary Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="stock-analysis" className="space-y-6">
            <InventoryTab stockData={stockData} />
          </TabsContent>

          <TabsContent value="inventory-management" className="space-y-6">
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Inventory Management</h3>
              <p className="text-gray-600 text-center max-w-md">
                Manage your food inventory items, add new items, update stock levels, and set thresholds.
              </p>
              <Link to="/inventory-management">
                <Button className="mt-4">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Go to Inventory Management
                </Button>
              </Link>
            </div>
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
