
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface DecisionActionsProps {
  application: {
    name: string;
  };
}

const DecisionActions = ({ application }: DecisionActionsProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

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
  );
};

export default DecisionActions;
