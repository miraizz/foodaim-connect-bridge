
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Package, Users, AlertTriangle, TrendingUp, Bell, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [stockData] = useState([
    { name: "Rice", current: 75, max: 100, unit: "kg", status: "good" },
    { name: "Canned Food", current: 45, max: 80, unit: "units", status: "good" },
    { name: "Bread", current: 15, max: 50, unit: "loaves", status: "low" },
    { name: "Milk", current: 8, max: 40, unit: "cartons", status: "critical" },
    { name: "Vegetables", current: 30, max: 60, unit: "kg", status: "good" },
  ]);

  const [recentApplications] = useState([
    { id: "APP001", name: "Ahmad Abdullah", status: "pending", income: "RM 1,200", date: "2024-06-10" },
    { id: "APP002", name: "Siti Nurhaliza", status: "approved", income: "RM 900", date: "2024-06-09" },
    { id: "APP003", name: "Raj Kumar", status: "pending", income: "RM 1,500", date: "2024-06-08" },
    { id: "APP004", name: "Mary Tan", status: "rejected", income: "RM 2,800", date: "2024-06-07" },
  ]);

  const distributionData = [
    { name: "This Week", distributed: 150, applications: 45 },
    { name: "Last Week", distributed: 120, applications: 38 },
    { name: "2 Weeks Ago", distributed: 180, applications: 52 },
    { name: "3 Weeks Ago", distributed: 95, applications: 30 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "bg-primary";
      case "low": return "bg-accent";
      case "critical": return "bg-destructive";
      default: return "bg-muted";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending": return <Badge variant="outline" className="text-accent-foreground border-accent">Pending</Badge>;
      case "approved": return <Badge className="bg-primary text-primary-foreground">Approved</Badge>;
      case "rejected": return <Badge variant="destructive">Rejected</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/3b952623-dc7b-4996-b56e-e4987b5758ef.png" 
                  alt="FoodAim Logo" 
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold text-foreground">FoodAim Admin</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Alerts (3)
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Total Stock Items</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">173</div>
              <p className="text-xs text-muted-foreground">5 items low stock</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Active Beneficiaries</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">482</div>
              <p className="text-xs text-muted-foreground">+12 this week</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Pending Applications</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">23</div>
              <p className="text-xs text-muted-foreground">Requires review</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Distribution Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">94%</div>
              <p className="text-xs text-muted-foreground">Above target</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="inventory" className="space-y-6">
          <TabsList>
            <TabsTrigger value="inventory">Inventory & IoT</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="inventory" className="space-y-6">
            {/* IoT Status */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">IoT Sensor Status</CardTitle>
                <CardDescription className="text-muted-foreground">Real-time monitoring from Arduino Uno and ultrasonic sensors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-2xl font-bold text-primary">5/5</div>
                    <p className="text-sm text-primary/80">Sensors Online</p>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="text-2xl font-bold text-accent">&lt; 2s</div>
                    <p className="text-sm text-accent/80">Update Frequency</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-2xl font-bold text-primary">99.8%</div>
                    <p className="text-sm text-primary/80">Accuracy Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stock Levels */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Current Stock Levels</CardTitle>
                <CardDescription className="text-muted-foreground">Real-time inventory tracked by IoT sensors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stockData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}></div>
                        <div>
                          <h4 className="font-medium text-foreground">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.current} / {item.max} {item.unit}</p>
                        </div>
                      </div>
                      <div className="w-32">
                        <Progress value={(item.current / item.max) * 100} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Beneficiary applications requiring review</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((app, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{app.name}</h4>
                        <p className="text-sm text-gray-500">ID: {app.id} | Income: {app.income}</p>
                        <p className="text-xs text-gray-400">Applied: {app.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(app.status)}
                        {app.status === "pending" && (
                          <Button size="sm" variant="outline">Review</Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Distribution Trends</CardTitle>
                  <CardDescription>Weekly food distribution statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={distributionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="distributed" fill="#3B82F6" />
                      <Bar dataKey="applications" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Application Status Overview</CardTitle>
                  <CardDescription>Current application distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Approved Applications</span>
                      <span className="font-medium">156 (68%)</span>
                    </div>
                    <Progress value={68} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Pending Review</span>
                      <span className="font-medium">23 (10%)</span>
                    </div>
                    <Progress value={10} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Rejected</span>
                      <span className="font-medium">51 (22%)</span>
                    </div>
                    <Progress value={22} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
