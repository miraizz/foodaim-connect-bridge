
import { User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogout } from "@/utils/auth";

const UserProfileDropdown = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();

  console.log("UserProfileDropdown component rendered");

  const handleViewProfile = () => {
    console.log("Navigate to profile settings");
    navigate('/profile-settings');
  };

  const handleLogout = () => {
    console.log("Logout button clicked");
    logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className="text-gray-700 font-medium">John Doe</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white border shadow-lg" align="end">
        <DropdownMenuItem 
          onClick={handleViewProfile}
          className="flex items-center cursor-pointer hover:bg-gray-50"
        >
          <User className="w-4 h-4 mr-2" />
          View Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={handleLogout}
          className="flex items-center cursor-pointer hover:bg-gray-50 text-red-600"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileDropdown;
