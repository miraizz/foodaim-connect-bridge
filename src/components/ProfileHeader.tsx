
import { Button } from "@/components/ui/button";
import { ArrowLeft, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "@/utils/auth";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();

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
            <span className="text-gray-600">Profile Settings</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Button variant="outline" size="sm" onClick={logout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
