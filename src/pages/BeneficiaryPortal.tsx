
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Package, Clock, CheckCircle, Upload, User, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const BeneficiaryPortal = () => {
  const [applicationForm, setApplicationForm] = useState({
    reason: "",
    urgency: "medium",
    additionalNotes: ""
  });

  const { toast } = useToast();

  const [availableFood] = useState([
    { name: "Rice", available: 75, unit: "kg", category: "Staples", lastUpdated: "2 mins ago" },
    { name: "Canned Food", available: 45, unit: "units", category: "Preserved", lastUpdated: "5 mins ago" },
    { name: "Bread", available: 15, unit: "loaves", category: "Bakery", lastUpdated: "1 min ago" },
    { name: "Vegetables", available: 30, unit: "kg", category: "Fresh", lastUpdated: "3 mins ago" },
    { name: "Milk", available: 8, unit: "cartons", category: "Dairy", lastUpdated: "4 mins ago" },
  ]);

  const [myApplications] = useState([
    { 
      id: "APP001", 
      status: "approved", 
      submittedDate: "2024-06-05", 
      reviewDate: "2024-06-07",
      items: "Rice (5kg), Canned Food (10 units)",
      notes: "Application approved. Please collect within 7 days."
    },
    { 
      id: "APP002", 
      status: "pending", 
      submittedDate: "2024-06-10", 
      reviewDate: null,
      items: "Bread (3 loaves), Milk (5 cartons)",
      notes: "Under review by administrator."
    }
  ]);

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ 
      title: "Application Submitted", 
      description: "Your food assistance application has been submitted for review." 
    });
    setApplicationForm({ reason: "", urgency: "medium", additionalNotes: "" });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending": return <Badge variant="outline" className="text-yellow-600">Pending Review</Badge>;
      case "approved": return <Badge className="bg-green-500">Approved</Badge>;
      case "rejected": return <Badge variant="destructive">Rejected</Badge>;
      case "collected": return <Badge className="bg-blue-500">Collected</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getAvailabilityColor = (available: number) => {
    if (available > 30) return "text-green-600";
    if (available > 10) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FA</span>
                </div>
                <span className="text-xl font-bold text-gray-900">FoodAim Portal</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/profile-settings">
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Your Portal</h1>
          <p className="text-gray-600">Access food availability, submit applications, and track your requests.</p>
        </div>

        <Tabs defaultValue="availability" className="space-y-6">
          <TabsList>
            <TabsTrigger value="availability">Food Availability</TabsTrigger>
            <TabsTrigger value="apply">Apply for Assistance</TabsTrigger>
            <TabsTrigger value="status">Application Status</TabsTrigger>
          </TabsList>

          <TabsContent value="availability" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Food Availability</CardTitle>
                <CardDescription>Real-time stock levels updated by our IoT monitoring system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {availableFood.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{item.name}</h3>
                        <Badge variant="outline">{item.category}</Badge>
                      </div>
                      <div className={`text-2xl font-bold mb-1 ${getAvailabilityColor(item.available)}`}>
                        {item.available} {item.unit}
                      </div>
                      <p className="text-xs text-gray-500">Updated {item.lastUpdated}</p>
                      <div className="mt-3">
                        <Progress 
                          value={Math.min((item.available / 100) * 100, 100)} 
                          className="h-2" 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Collection Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Collection Hours</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                      <li>Saturday: 9:00 AM - 1:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Requirements</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Valid ID card</li>
                      <li>• Approved application reference</li>
                      <li>• Bring your own bags</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="apply" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Apply for Food Assistance</CardTitle>
                <CardDescription>Submit a new application for food assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleApplicationSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Application *</Label>
                    <Textarea
                      id="reason"
                      value={applicationForm.reason}
                      onChange={(e) => setApplicationForm({ ...applicationForm, reason: e.target.value })}
                      placeholder="Please describe your current situation and why you need food assistance..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <select
                      id="urgency"
                      value={applicationForm.urgency}
                      onChange={(e) => setApplicationForm({ ...applicationForm, urgency: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="low">Low - Can wait 1-2 weeks</option>
                      <option value="medium">Medium - Need within 1 week</option>
                      <option value="high">High - Urgent, need within 2-3 days</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      value={applicationForm.additionalNotes}
                      onChange={(e) => setApplicationForm({ ...applicationForm, additionalNotes: e.target.value })}
                      placeholder="Any additional information or special requirements..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Upload B40 Income Proof (if applicable)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-400">PDF, JPG, PNG (max 5MB)</p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="status" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Applications</CardTitle>
                <CardDescription>Track the status of your food assistance applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {myApplications.map((app, index) => (
                    <div key={index} className="border rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-medium">Application #{app.id}</h3>
                          {getStatusBadge(app.status)}
                        </div>
                        <div className="text-sm text-gray-500">
                          Submitted: {app.submittedDate}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Requested Items</h4>
                          <p className="text-sm text-gray-600">{app.items}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Review Status</h4>
                          <p className="text-sm text-gray-600">{app.notes}</p>
                        </div>
                      </div>

                      {app.status === "pending" && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-yellow-600 mr-2" />
                            <span className="text-sm text-yellow-800">
                              Your application is under review. You will be notified once it's processed.
                            </span>
                          </div>
                        </div>
                      )}

                      {app.status === "approved" && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            <span className="text-sm text-green-800">
                              Approved! Please collect your items during our operating hours.
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BeneficiaryPortal;
