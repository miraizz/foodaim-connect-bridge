
import { Link } from "react-router-dom";
import UserProfileDropdown from "@/components/UserProfileDropdown";
import NotificationDropdown from "@/components/NotificationDropdown";

const BeneficiaryHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/34d10014-7924-4265-8769-72a1f10d1e8a.png" 
                alt="FoodAim Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">FoodAim</span>
            </Link>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">Beneficiary Portal</span>
          </div>
          <div className="flex items-center space-x-4">
            <NotificationDropdown />
            <UserProfileDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default BeneficiaryHeader;
