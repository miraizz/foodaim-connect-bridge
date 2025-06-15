
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Apple, FileText, BarChart3, Clock } from "lucide-react";
import BeneficiaryHeader from "@/components/BeneficiaryHeader";
import WelcomeSection from "@/components/WelcomeSection";
import OverviewTab from "@/components/OverviewTab";
import FoodAvailabilityTab from "@/components/FoodAvailabilityTab";
import ApplyAssistanceTab from "@/components/ApplyAssistanceTab";
import ApplicationStatusTab from "@/components/ApplicationStatusTab";

const BeneficiaryPortal = () => {
  const [upcomingPickups] = useState([
    {
      id: 1,
      location: "Community Center - Downtown",
      date: "2024-01-15",
      time: "10:00 AM - 2:00 PM",
      status: "confirmed",
      items: ["Fresh Vegetables", "Bread", "Canned Goods"]
    },
    {
      id: 2,
      location: "Student Center - Westside",
      date: "2024-01-18",
      time: "9:00 AM - 12:00 PM",
      status: "pending",
      items: ["Rice", "Pasta", "Dairy Products"]
    }
  ]);

  const [recentActivity] = useState([
    { id: 1, action: "Food package collected", location: "Community Center", date: "2024-01-10" },
    { id: 2, action: "Application submitted", location: "Online", date: "2024-01-05" },
    { id: 3, action: "Profile updated", location: "Online", date: "2024-01-03" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <BeneficiaryHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <WelcomeSection />

        {/* Main Content with Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="food-availability" className="flex items-center space-x-2">
              <Apple className="h-4 w-4" />
              <span>Food Availability</span>
            </TabsTrigger>
            <TabsTrigger value="apply-assistance" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Apply for Assistance</span>
            </TabsTrigger>
            <TabsTrigger value="application-status" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Application Status</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <OverviewTab 
              upcomingPickups={upcomingPickups} 
              recentActivity={recentActivity} 
            />
          </TabsContent>

          <TabsContent value="food-availability">
            <FoodAvailabilityTab />
          </TabsContent>

          <TabsContent value="apply-assistance">
            <ApplyAssistanceTab />
          </TabsContent>

          <TabsContent value="application-status">
            <ApplicationStatusTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BeneficiaryPortal;
