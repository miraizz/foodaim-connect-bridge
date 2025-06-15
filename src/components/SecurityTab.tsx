
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLogout } from "@/utils/auth";

const SecurityTab = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const { toast } = useToast();
  const { logout } = useLogout();

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({ 
        title: "Password Mismatch", 
        description: "New password and confirmation do not match.", 
        variant: "destructive" 
      });
      return;
    }
    toast({ 
      title: "Password Updated", 
      description: "Your password has been successfully changed." 
    });
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>
            Update your password to keep your account secure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordChange} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full md:w-auto">
              <Lock className="h-4 w-4 mr-2" />
              Change Password
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Security Information */}
      <Card>
        <CardHeader>
          <CardTitle>Account Security</CardTitle>
          <CardDescription>
            Important security information for your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
              <div>
                <h4 className="font-medium text-green-800">Last Login</h4>
                <p className="text-sm text-green-600">Today at 10:30 AM</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
              <div>
                <h4 className="font-medium text-blue-800">Password Last Changed</h4>
                <p className="text-sm text-blue-600">2 weeks ago</p>
              </div>
            </div>

            {/* Logout Section */}
            <div className="pt-4 border-t">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-gray-800">Sign Out</h4>
                  <p className="text-sm text-gray-600">Sign out of your account on this device</p>
                </div>
                <Button variant="outline" onClick={logout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecurityTab;
