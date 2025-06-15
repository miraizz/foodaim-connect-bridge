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
      case "good": return "bg-green-darkest";
      case "low": return "bg-yellow-500";
      case "critical": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending": return <Badge variant="outline" className="text-yellow-600 border-yellow-600">Pending</Badge>;
      case "approved": return <Badge className="bg-green-darkest hover:bg-green-dark">Approved</Badge>;
      case "rejected": return <Badge variant="destructive">Rejected</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-green-lightest">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-darkest to-green-olive rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FA</span>
                </div>
                <span className="text-xl font-bold text-green-darkest">FoodAim Admin</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-green-medium text-green-darkest hover:bg-green-light">
                <Bell className="h-4 w-4 mr-2" />
                Alerts (3)
              </Button>
              <Button variant="outline" size="sm" className="border-green-medium text-green-darkest hover:bg-green-light">
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
          <Card className="border-green-light">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-darkest">Total Stock Items</CardTitle>
              <Package className="h-4 w-4 text-green-dark" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-darkest">173</div>
              <p className="text-xs text-green-dark">5 items low stock</p>
            </CardContent>
          </Card>

          <Card className="border-green-light">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-darkest">Active Beneficiaries</CardTitle>
              <Users className="h-4 w-4 text-green-dark" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-darkest">482</div>
              <p className="text-xs text-green-dark">+12 this week</p>
            </CardContent>
          </Card>

          <Card className="border-green-light">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-darkest">Pending Applications</CardTitle>
              <AlertTriangle className="h-4 w-4 text-green-dark" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-darkest">23</div>
              <p className="text-xs text-green-dark">Requires review</p>
            </CardContent>
          </Card>

          <Card className="border-green-light">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-darkest">Distribution Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-dark" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-darkest">94%</div>
              <p className="text-xs text-green-dark">Above target</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="inventory" className="space-y-6">
          <TabsList className="bg-green-light">
            <TabsTrigger value="inventory" className="data-[state=active]:bg-green-darkest data-[state=active]:text-white">Inventory & IoT</TabsTrigger>
            <TabsTrigger value="applications" className="data-[state=active]:bg-green-darkest data-[state=active]:text-white">Applications</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-green-darkest data-[state=active]:text-white">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="inventory" className="space-y-6">
            {/* IoT Status */}
            <Card className="border-green-light">
              <CardHeader>
                <CardTitle className="text-green-darkest">IoT Sensor Status</CardTitle>
                <CardDescription className="text-green-dark">Real-time monitoring from Arduino Uno and ultrasonic sensors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-light rounded-lg">
                    <div className="text-2xl font-bold text-green-darkest">5/5</div>
                    <p className="text-sm text-green-dark">Sensors Online</p>
                  </div>
                  <div className="text-center p-4 bg-green-light rounded-lg">
                    <div className="text-2xl font-bold text-green-darkest">&lt; 2s</div>
                    <p className="text-sm text-green-dark">Update Frequency</p>
                  </div>
                  <div className="text-center p-4 bg-green-light rounded-lg">
                    <div className="text-2xl font-bold text-green-darkest">99.8%</div>
                    <p className="text-sm text-green-dark">Accuracy Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stock Levels */}
            <Card className="border-green-light">
              <CardHeader>
                <CardTitle className="text-green-darkest">Current Stock Levels</CardTitle>
                <CardDescription className="text-green-dark">Real-time inventory tracked by IoT sensors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stockData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-green-light rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}></div>
                        <div>
                          <h4 className="font-medium text-green-darkest">{item.name}</h4>
                          <p className="text-sm text-green-dark">{item.current} / {item.max} {item.unit}</p>
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
            <Card className="border-green-light">
              <CardHeader>
                <CardTitle className="text-green-darkest">Recent Applications</CardTitle>
                <CardDescription className="text-green-dark">Beneficiary applications requiring review</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((app, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-green-light rounded-lg">
                      <div>
                        <h4 className="font-medium text-green-darkest">{app.name}</h4>
                        <p className="text-sm text-green-dark">ID: {app.id} | Income: {app.income}</p>
                        <p className="text-xs text-green-olive">Applied: {app.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(app.status)}
                        {app.status === "pending" && (
                          <Button size="sm" variant="outline" className="border-green-medium text-green-darkest hover:bg-green-light">Review</Button>
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
              <Card className="border-green-light">
                <CardHeader>
                  <CardTitle className="text-green-darkest">Distribution Trends</CardTitle>
                  <CardDescription className="text-green-dark">Weekly food distribution statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={distributionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="distributed" fill="hsl(var(--green-darkest))" />
                      <Bar dataKey="applications" fill="hsl(var(--green-olive))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-green-light">
                <CardHeader>
                  <CardTitle className="text-green-darkest">Application Status Overview</CardTitle>
                  <CardDescription className="text-green-dark">Current application distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-green-dark">Approved Applications</span>
                      <span className="font-medium text-green-darkest">156 (68%)</span>
                    </div>
                    <Progress value={68} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-green-dark">Pending Review</span>
                      <span className="font-medium text-green-darkest">23 (10%)</span>
                    </div>
                    <Progress value={10} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-green-dark">Rejected</span>
                      <span className="font-medium text-green-darkest">51 (22%)</span>
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
