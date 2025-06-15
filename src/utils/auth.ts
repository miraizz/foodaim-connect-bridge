
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const useLogout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const logout = () => {
    console.log("Logout function called");
    
    // Clear any stored user data (localStorage, sessionStorage, etc.)
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
    localStorage.removeItem('authToken');
    
    console.log("User data cleared from localStorage");
    
    // Show success message
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out."
    });
    
    console.log("Toast notification shown");
    
    // Redirect to home page
    navigate('/');
    
    console.log("Navigation to home page initiated");
  };

  return { logout };
};
