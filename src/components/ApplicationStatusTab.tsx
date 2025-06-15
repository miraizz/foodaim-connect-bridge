
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, FileText, Clock, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import ApplicationDetailsDialog from "./ApplicationDetailsDialog";
import CollectionDetailsDialog from "./CollectionDetailsDialog";

interface Application {
  id: string;
  submittedDate: string;
  status: string;
  progress: number;
  estimatedCompletion: string;
  lastUpdate: string;
  statusColor: string;
}

const ApplicationStatusTab = () => {
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [collectionDialogOpen, setCollectionDialogOpen] = useState(false);

  const applications: Application[] = [
    {
      id: "APP-2024-001",
      submittedDate: "2024-01-10",
      status: "Under Review",
      progress: 60,
      estimatedCompletion: "2024-01-18",
      lastUpdate: "Application documents verified",
      statusColor: "bg-blue-500"
    },
    {
      id: "APP-2024-002",
      submittedDate: "2024-01-05",
      status: "Approved",
      progress: 100,
      estimatedCompletion: "Completed",
      lastUpdate: "Assistance approved - ready for collection",
      statusColor: "bg-green-500"
    },
    {
      id: "APP-2023-089",
      submittedDate: "2023-12-20",
      status: "Completed",
      progress: 100,
      estimatedCompletion: "Completed",
      lastUpdate: "Food package collected successfully",
      statusColor: "bg-gray-500"
    }
  ];

  const handleViewDetails = (application: Application) => {
    setSelectedApplication(application);
    setDetailsDialogOpen(true);
  };

  const handleViewCollectionDetails = (application: Application) => {
    setSelectedApplication(application);
    setCollectionDialogOpen(true);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Under Review":
        return <Clock className="h-4 w-4" />;
      case "Approved":
        return <CheckCircle className="h-4 w-4" />;
      case "Rejected":
        return <XCircle className="h-4 w-4" />;
      case "Completed":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Under Review":
        return "secondary";
      case "Approved":
        return "default";
      case "Rejected":
        return "destructive";
      case "Completed":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Application Status</h2>
          <p className="text-gray-600">Track the progress of your food assistance applications</p>
        </div>

        {/* Current Application Status Overview */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-500" />
              Application Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <p className="text-sm text-gray-600">Total Applications</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">1</div>
                <p className="text-sm text-gray-600">Under Review</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">2</div>
                <p className="text-sm text-gray-600">Approved/Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application History */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Application History</h3>
          
          {applications.map((app) => (
            <Card key={app.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg flex items-center">
                      {getStatusIcon(app.status)}
                      <span className="ml-2">Application {app.id}</span>
                    </CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      Submitted on {app.submittedDate}
                    </CardDescription>
                  </div>
                  <Badge variant={getStatusVariant(app.status)} className={app.status === "Approved" ? "bg-green-600" : ""}>
                    {app.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{app.progress}%</span>
                    </div>
                    <Progress value={app.progress} className="h-2" />
                  </div>

                  {/* Status Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Latest Update:</p>
                      <p className="text-gray-600">{app.lastUpdate}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Estimated Completion:</p>
                      <p className="text-gray-600">{app.estimatedCompletion}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    {app.status === "Approved" && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleViewCollectionDetails(app)}
                      >
                        View Collection Details
                      </Button>
                    )}
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => handleViewDetails(app)}
                    >
                      View Full Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-green-500" />
              Need Help?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-3">
              If you have questions about your application status or need assistance, please contact us:
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Phone:</strong> +60 3-1234 5678</p>
              <p><strong>Email:</strong> support@foodaim.org</p>
              <p><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dialogs */}
      <ApplicationDetailsDialog
        application={selectedApplication}
        open={detailsDialogOpen}
        onOpenChange={setDetailsDialogOpen}
      />
      
      <CollectionDetailsDialog
        application={selectedApplication}
        open={collectionDialogOpen}
        onOpenChange={setCollectionDialogOpen}
      />
    </>
  );
};

export default ApplicationStatusTab;
