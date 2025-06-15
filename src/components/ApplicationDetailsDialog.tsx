
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, FileText, Clock, CheckCircle, AlertCircle, XCircle, MapPin } from "lucide-react";

interface Application {
  id: string;
  submittedDate: string;
  status: string;
  progress: number;
  estimatedCompletion: string;
  lastUpdate: string;
  statusColor: string;
}

interface ApplicationDetailsDialogProps {
  application: Application | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ApplicationDetailsDialog = ({ application, open, onOpenChange }: ApplicationDetailsDialogProps) => {
  if (!application) return null;

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Application Details - {application.id}</span>
          </DialogTitle>
          <DialogDescription>
            Complete information about your food assistance application
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Status Overview */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {getStatusIcon(application.status)}
              <span className="font-medium">Current Status</span>
            </div>
            <Badge variant={getStatusVariant(application.status)} className={application.status === "Approved" ? "bg-green-600" : ""}>
              {application.status}
            </Badge>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Progress</span>
              <span>{application.progress}%</span>
            </div>
            <Progress value={application.progress} className="h-2" />
          </div>

          {/* Application Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="font-medium text-gray-700 flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Submission Date
              </p>
              <p className="text-gray-600">{application.submittedDate}</p>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-gray-700 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Estimated Completion
              </p>
              <p className="text-gray-600">{application.estimatedCompletion}</p>
            </div>
          </div>

          {/* Latest Update */}
          <div className="space-y-2">
            <p className="font-medium text-gray-700">Latest Update</p>
            <p className="text-gray-600">{application.lastUpdate}</p>
          </div>

          {/* Application Timeline */}
          <div className="space-y-2">
            <p className="font-medium text-gray-700">Application Timeline</p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Application Submitted</p>
                  <p className="text-xs text-gray-500">{application.submittedDate}</p>
                </div>
              </div>
              {application.progress >= 50 && (
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Documents Verified</p>
                    <p className="text-xs text-gray-500">Processing completed</p>
                  </div>
                </div>
              )}
              {application.status === "Approved" && (
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Application Approved</p>
                    <p className="text-xs text-gray-500">Ready for collection</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Application Details</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p><strong>Application Type:</strong> Food Assistance</p>
              <p><strong>Priority Level:</strong> Standard</p>
              <p><strong>Household Size:</strong> 4 members</p>
              <p><strong>Expected Package:</strong> Weekly essentials package</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationDetailsDialog;
