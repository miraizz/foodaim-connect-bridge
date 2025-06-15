
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Download, FileText, User, DollarSign, Calendar, Home, Phone, Mail, Users, CheckCircle, XCircle } from "lucide-react";
import AdminHeader from "@/components/AdminHeader";
import { useToast } from "@/hooks/use-toast";

interface ApplicationDetails {
  id: string;
  name: string;
  status: string;
  income: string;
  date: string;
  email: string;
  phone: string;
  address: string;
  householdSize: number;
  reason: string;
  b40ProofUrl: string;
}

const ApplicationReview = () => {
  const { applicationId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Mock data - in real app, this would be fetched based on applicationId
  const [application] = useState<ApplicationDetails>({
    id: applicationId || "APP001",
    name: "Ahmad Abdullah",
    status: "pending",
    income: "RM 1,200",
    date: "2024-06-10",
    email: "ahmad.abdullah@email.com",
    phone: "+60 12-345 6789",
    address: "123, Jalan Taman Sejahtera, 47000 Petaling Jaya, Selangor",
    householdSize: 4,
    reason: "Lost job due to company downsizing. Currently unemployed and struggling to provide food for family.",
    b40ProofUrl: "/lovable-uploads/34d10014-7924-4265-8769-72a1f10d1e8a.png"
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleDownloadB40Proof = () => {
    // Create a temporary link to download the file
    const link = document.createElement('a');
    link.href = application.b40ProofUrl;
    link.download = `B40_Proof_${application.id}_${application.name.replace(/\s+/g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Started",
      description: "B40 proof document is being downloaded.",
    });
  };

  const handleApproveApplication = async () => {
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Application Approved",
        description: `${application.name}'s application has been approved successfully.`,
      });
      setIsProcessing(false);
      navigate("/admin-dashboard");
    }, 1500);
  };

  const handleRejectApplication = async () => {
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Application Rejected",
        description: `${application.name}'s application has been rejected.`,
        variant: "destructive",
      });
      setIsProcessing(false);
      navigate("/admin-dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button - moved above header */}
        <div className="mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/admin-dashboard")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>

        {/* Header - now closer to left frame */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Application Review</h1>
            <p className="text-gray-600">Review and process B40 beneficiary application</p>
          </div>
          <Badge variant="outline" className="text-yellow-600">
            {application.status}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Application Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <p className="text-gray-900">{application.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Application ID</label>
                    <p className="text-gray-900">{application.id}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <p className="text-gray-900 flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      {application.email}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <p className="text-gray-900 flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      {application.phone}
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Address</label>
                  <p className="text-gray-900 flex items-start">
                    <Home className="h-4 w-4 mr-2 mt-1" />
                    {application.address}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Financial Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Financial Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Monthly Income</label>
                    <p className="text-gray-900 text-lg font-semibold">{application.income}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Household Size</label>
                    <p className="text-gray-900 flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {application.householdSize} members
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Reason for Application</label>
                  <p className="text-gray-900 mt-1">{application.reason}</p>
                </div>
              </CardContent>
            </Card>

            {/* B40 Proof Document */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  B40 Proof Document
                </CardTitle>
                <CardDescription>
                  Review the uploaded B40 proof document
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-blue-500" />
                      <div>
                        <p className="font-medium">B40_Proof_{application.id}.png</p>
                        <p className="text-sm text-gray-500">Uploaded on {application.date}</p>
                      </div>
                    </div>
                    <Button
                      onClick={handleDownloadB40Proof}
                      size="sm"
                      variant="outline"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Panel */}
          <div className="space-y-6">
            {/* Application Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Application Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Application ID:</span>
                  <span className="text-sm font-medium">{application.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Submitted:</span>
                  <span className="text-sm font-medium flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {application.date}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Status:</span>
                  <Badge variant="outline" className="text-yellow-600">
                    {application.status}
                  </Badge>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Income:</span>
                  <span className="text-sm font-medium">{application.income}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Household:</span>
                  <span className="text-sm font-medium">{application.householdSize} members</span>
                </div>
              </CardContent>
            </Card>

            {/* Decision Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Review Decision</CardTitle>
                <CardDescription>
                  Make a decision on this application
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  onClick={handleApproveApplication}
                  disabled={isProcessing}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {isProcessing ? "Processing..." : "Approve Application"}
                </Button>
                <Button
                  onClick={handleRejectApplication}
                  disabled={isProcessing}
                  variant="destructive"
                  className="w-full"
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  {isProcessing ? "Processing..." : "Reject Application"}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Decision cannot be undone once submitted
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationReview;
