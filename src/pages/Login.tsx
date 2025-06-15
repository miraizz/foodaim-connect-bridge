
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [adminCredentials, setAdminCredentials] = useState({ email: "", password: "" });
  const [beneficiaryCredentials, setBeneficiaryCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo authentication
    if (adminCredentials.email && adminCredentials.password) {
      toast({ title: "Login Successful", description: "Welcome to the admin dashboard!" });
      navigate("/admin-dashboard");
    } else {
      toast({ title: "Login Failed", description: "Please enter valid credentials", variant: "destructive" });
    }
  };

  const handleBeneficiaryLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (beneficiaryCredentials.email && beneficiaryCredentials.password) {
      toast({ title: "Login Successful", description: "Welcome to the beneficiary portal!" });
      navigate("/beneficiary-portal");
    } else {
      toast({ title: "Login Failed", description: "Please enter valid credentials", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <img 
              src="/lovable-uploads/34d10014-7924-4265-8769-72a1f10d1e8a.png" 
              alt="FoodAim Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-gray-900">FoodAim</span>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Login to FoodAim</CardTitle>
            <CardDescription>Access your account to manage food bank operations</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="admin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="admin">Administrator</TabsTrigger>
                <TabsTrigger value="beneficiary">Beneficiary</TabsTrigger>
              </TabsList>
              
              <TabsContent value="admin">
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Email</Label>
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="admin@foodbank.org"
                      value={adminCredentials.email}
                      onChange={(e) => setAdminCredentials({ ...adminCredentials, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Password</Label>
                    <Input
                      id="admin-password"
                      type="password"
                      value={adminCredentials.password}
                      onChange={(e) => setAdminCredentials({ ...adminCredentials, password: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full">Login as Administrator</Button>
                </form>
              </TabsContent>
              
              <TabsContent value="beneficiary">
                <form onSubmit={handleBeneficiaryLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="beneficiary-email">Email</Label>
                    <Input
                      id="beneficiary-email"
                      type="email"
                      placeholder="user@example.com"
                      value={beneficiaryCredentials.email}
                      onChange={(e) => setBeneficiaryCredentials({ ...beneficiaryCredentials, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="beneficiary-password">Password</Label>
                    <Input
                      id="beneficiary-password"
                      type="password"
                      value={beneficiaryCredentials.password}
                      onChange={(e) => setBeneficiaryCredentials({ ...beneficiaryCredentials, password: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full">Login as Beneficiary</Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-600 hover:underline">
                  Register here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
