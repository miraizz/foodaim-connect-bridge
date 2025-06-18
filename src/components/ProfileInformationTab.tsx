
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "react-router-dom";
import { ProfileData, BaseProfile, AdminProfile, BeneficiaryProfile } from "@/types/profile";
import { getInitialProfileData } from "@/utils/profileUtils";
import ProfilePictureSection from "./ProfilePictureSection";
import ProfileFormFields from "./ProfileFormFields";

const ProfileInformationTab = () => {
  const location = useLocation();
  
  // Enhanced role detection logic
  const getUserRole = () => {
    const storedRole = localStorage.getItem('userRole');
    const storedUser = localStorage.getItem('user');
    const pathBasedRole = location.pathname.includes('admin') ? 'admin' : 'beneficiary';
    
    console.log("Current path:", location.pathname);
    console.log("Stored role:", storedRole);
    console.log("Stored user:", storedUser);
    console.log("Path-based role:", pathBasedRole);
    
    // If no stored role but we have a stored user, try to extract role from user data
    if (!storedRole && storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        console.log("Parsed user data:", userData);
        if (userData.role) {
          localStorage.setItem('userRole', userData.role);
          return userData.role;
        }
      } catch (error) {
        console.error("Error parsing stored user data:", error);
      }
    }
    
    // Prioritize stored role if it exists, otherwise use path-based detection
    return storedRole || pathBasedRole;
  };
  
  const [userRole, setUserRole] = useState(() => getUserRole());
  const [isAdmin, setIsAdmin] = useState(() => userRole === 'admin');
  
  console.log("Final determined role:", userRole);
  console.log("Is admin:", isAdmin);
  
  const [profileData, setProfileData] = useState<ProfileData>(() => getInitialProfileData(isAdmin));

  const { toast } = useToast();

  // Add effect to re-evaluate role when location changes
  useEffect(() => {
    const newRole = getUserRole();
    const newIsAdmin = newRole === 'admin';
    
    console.log("Role re-evaluation:", { newRole, newIsAdmin });
    
    if (newRole !== userRole) {
      setUserRole(newRole);
      setIsAdmin(newIsAdmin);
      setProfileData(getInitialProfileData(newIsAdmin));
      console.log("Profile data updated for role:", newRole);
    }
  }, [location.pathname, userRole]);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ 
      title: "Profile Updated", 
      description: "Your profile information has been successfully updated." 
    });
  };

  const updateProfileField = (field: keyof BaseProfile, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const updateAdminField = (field: keyof Omit<AdminProfile, keyof BaseProfile>, value: string) => {
    if (isAdmin) {
      setProfileData(prev => ({ ...prev, [field]: value }));
    }
  };

  const updateBeneficiaryField = (field: keyof Omit<BeneficiaryProfile, keyof BaseProfile>, value: string) => {
    if (!isAdmin) {
      setProfileData(prev => ({ ...prev, [field]: value }));
    }
  };

  // Debug function to manually set role (for testing)
  const handleRoleToggle = () => {
    const newRole = isAdmin ? 'beneficiary' : 'admin';
    localStorage.setItem('userRole', newRole);
    localStorage.setItem('user', JSON.stringify({ role: newRole }));
    setUserRole(newRole);
    setIsAdmin(newRole === 'admin');
    setProfileData(getInitialProfileData(newRole === 'admin'));
    console.log("Manually switched role to:", newRole);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>
          {isAdmin ? "Update your administrative profile and contact information" : "Update your personal information and beneficiary details"}
        </CardDescription>
        {/* Debug button - remove in production */}
        <Button 
          type="button" 
          variant="outline" 
          size="sm" 
          onClick={handleRoleToggle}
          className="w-fit mt-2"
        >
          Switch to {isAdmin ? 'Beneficiary' : 'Admin'} (Debug)
        </Button>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleProfileUpdate} className="space-y-6">
          <ProfilePictureSection profileName={profileData.name} />

          <ProfileFormFields
            profileData={profileData}
            isAdmin={isAdmin}
            onUpdateBaseField={updateProfileField}
            onUpdateAdminField={updateAdminField}
            onUpdateBeneficiaryField={updateBeneficiaryField}
          />

          <Button type="submit" className="w-full md:w-auto">
            <User className="h-4 w-4 mr-2" />
            Update Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileInformationTab;
