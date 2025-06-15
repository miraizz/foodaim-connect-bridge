
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, Package, Star, Bell, Apple, FileText, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import UserProfileDropdown from "@/components/UserProfileDropdown";
import FoodAvailabilityTab from "@/components/FoodAvailabilityTab";
import ApplyAssistanceTab from "@/components/ApplyAssistanceTab";
import ApplicationStatusTab from "@/components/ApplicationStatusTab";

const BeneficiaryPortal = () => {
  const [notifications] = useState([
    { id: 1, message: "New food package available for pickup", time: "2 hours ago" },
    { id: 2, message: "Your application has been approved", time: "1 day ago" },
  ]);

  const [upcomingPickups] = useState([
    {
      id: 1,
      location: "Community Center - Downtown",
      date: "2024-01-15",
      time: "10:00 AM - 2:00 PM",
      status: "confirmed",
      items: ["Fresh Vegetables", "Bread", "Canned Goods"]
    },
    {
      id: 2,
      location: "Student Center - Westside",
      date: "2024-01-18",
      time: "9:00 AM - 12:00 PM",
      status: "pending",
      items: ["Rice", "Pasta", "Dairy Products"]
    }
  ]);

  const [recentActivity] = useState([
    { id: 1, action: "Food package collected", location: "Community Center", date: "2024-01-10" },
    { id: 2, action: "Application submitted", location: "Online", date: "2024-01-05" },
    { id: 3, action: "Profile updated", location: "Online", date: "2024-01-03" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
              <span className="text-gray-600">Beneficiary Portal</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs">
                    {notifications.length}
                  </Badge>
                )}
              </Button>
              <UserProfileDropdown />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Your Portal</h1>
          <p className="text-gray-600">Access food availability, submit applications, and track your requests.</p>
        </div>

        {/* Main Content with Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="food-availability" className="flex items-center space-x-2">
              <Apple className="h-4 w-4" />
              <span>Food Availability</span>
            </TabsTrigger>
            <TabsTrigger value="apply-assistance" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Apply for Assistance</span>
            </TabsTrigger>
            <TabsTrigger value="application-status" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Application Status</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Notifications */}
            {notifications.length > 0 && (
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-blue-500" />
                    Recent Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="flex justify-between items-start">
                        <p className="text-gray-700">{notification.message}</p>
                        <span className="text-sm text-gray-500">{notification.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Upcoming Pickups */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-green-600" />
                      Upcoming Food Pickups
                    </CardTitle>
                    <CardDescription>
                      Your scheduled food collection appointments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingPickups.map((pickup) => (
                        <div key={pickup.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-semibold text-gray-900 flex items-center">
                                <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                                {pickup.location}
                              </h3>
                              <p className="text-sm text-gray-600 flex items-center mt-1">
                                <Clock className="h-4 w-4 mr-1" />
                                {pickup.date} • {pickup.time}
                              </p>
                            </div>
                            <Badge variant={pickup.status === 'confirmed' ? 'default' : 'secondary'}>
                              {pickup.status}
                            </Badge>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-2">Available Items:</p>
                            <div className="flex flex-wrap gap-2">
                              {pickup.items.map((item, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Stats & Actions */}
              <div className="space-y-6">
                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Your Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">12</div>
                      <p className="text-sm text-gray-600">Food packages received</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">36</div>
                      <p className="text-sm text-gray-600">Meals provided</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-gray-600">Member since Jan 2024</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/beneficiary-portal?tab=apply-assistance">
                      <Button className="w-full" variant="outline">
                        <Package className="h-4 w-4 mr-2" />
                        Request Emergency Food
                      </Button>
                    </Link>
                    <Link to="/beneficiary-portal?tab=food-availability">
                      <Button className="w-full" variant="outline">
                        <MapPin className="h-4 w-4 mr-2" />
                        Find Nearby Locations
                      </Button>
                    </Link>
                    <Link to="/beneficiary-portal?tab=apply-assistance">
                      <Button className="w-full" variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Pickup
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recent interactions with FoodAim</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <div>
                        <p className="font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.location}</p>
                      </div>
                      <span className="text-sm text-gray-500">{activity.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="food-availability">
            <FoodAvailabilityTab />
          </TabsContent>

          <TabsContent value="apply-assistance">
            <ApplyAssistanceTab />
          </TabsContent>

          <TabsContent value="application-status">
            <ApplicationStatusTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BeneficiaryPortal;
