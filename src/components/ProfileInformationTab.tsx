
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "react-router-dom";

const ProfileInformationTab = () => {
  const location = useLocation();
  const isAdmin = location.pathname.includes('admin') || localStorage.getItem('userRole') === 'admin';
  
  const [profileData, setProfileData] = useState(() => {
    if (isAdmin) {
      return {
        name: "John Administrator",
        email: "admin@foodbank.org",
        phone: "+60123456789",
        address: "123 Main Street, Kuala Lumpur",
        role: "Administrator",
        department: "Operations Management",
        employeeId: "EMP001",
        accessLevel: "Full Access"
      };
    } else {
      return {
        name: "Ahmad Abdullah",
        email: "ahmad.abdullah@gmail.com",
        phone: "+60187654321",
        address: "456 Jalan Raya, Selangor",
        role: "Beneficiary",
        householdSize: "4 members",
        monthlyIncome: "RM 1,200",
        beneficiaryId: "BEN001"
      };
    }
  });

  const { toast } = useToast();

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ 
      title: "Profile Updated", 
      description: "Your profile information has been successfully updated." 
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      toast({ 
        title: "Profile Picture Updated", 
        description: "Your profile picture has been uploaded successfully." 
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>
          {isAdmin ? "Update your administrative profile and contact information" : "Update your personal information and beneficiary details"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleProfileUpdate} className="space-y-6">
          {/* Profile Picture Section */}
          <div className="flex items-center space-x-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="text-lg">
                {profileData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <Label htmlFor="profile-picture" className="cursor-pointer">
                <div className="flex items-center space-x-2 px-4 py-2 border rounded-md hover:bg-gray-50">
                  <Upload className="h-4 w-4" />
                  <span>Upload Photo</span>
                </div>
                <Input
                  id="profile-picture"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </Label>
              <p className="text-sm text-gray-500 mt-2">
                JPG, PNG or GIF (max 5MB)
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={profileData.phone}
                onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                value={profileData.role}
                disabled
                className="bg-gray-100"
              />
            </div>

            {/* Admin-specific fields */}
            {isAdmin && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    value={profileData.department}
                    onChange={(e) => setProfileData({ ...profileData, department: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employeeId">Employee ID</Label>
                  <Input
                    id="employeeId"
                    value={profileData.employeeId}
                    disabled
                    className="bg-gray-100"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accessLevel">Access Level</Label>
                  <Input
                    id="accessLevel"
                    value={profileData.accessLevel}
                    disabled
                    className="bg-gray-100"
                  />
                </div>
              </>
            )}

            {/* Beneficiary-specific fields */}
            {!isAdmin && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="householdSize">Household Size</Label>
                  <Input
                    id="householdSize"
                    value={profileData.householdSize}
                    onChange={(e) => setProfileData({ ...profileData, householdSize: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="monthlyIncome">Monthly Income</Label>
                  <Input
                    id="monthlyIncome"
                    value={profileData.monthlyIncome}
                    onChange={(e) => setProfileData({ ...profileData, monthlyIncome: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="beneficiaryId">Beneficiary ID</Label>
                  <Input
                    id="beneficiaryId"
                    value={profileData.beneficiaryId}
                    disabled
                    className="bg-gray-100"
                  />
                </div>
              </>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              value={profileData.address}
              onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
              rows={3}
            />
          </div>

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
