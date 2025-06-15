
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { Link } from "react-router-dom";
import UserProfileDropdown from "@/components/UserProfileDropdown";
import LowStockAlerts from "@/components/LowStockAlerts";

const AdminHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/4fe827b8-33ce-4e98-9695-5d8eb08a5ca1.png" 
                alt="FoodAim Logo" 
                className="w-12 h-12"
              />
              <span className="text-xl font-bold text-gray-900">FoodAim Admin</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <LowStockAlerts />
            <UserProfileDropdown />
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
