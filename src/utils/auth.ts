
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const useLogout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const logout = () => {
    // Clear any stored user data (localStorage, sessionStorage, etc.)
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
    localStorage.removeItem('authToken');
    
    // Show success message
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out."
    });
    
    // Redirect to home page
    navigate('/');
  };

  return { logout };
};
