
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import AdminHeader from "@/components/AdminHeader";
import PersonalInformation from "@/components/PersonalInformation";
import FinancialInformation from "@/components/FinancialInformation";
import B40ProofDocument from "@/components/B40ProofDocument";
import ApplicationSummary from "@/components/ApplicationSummary";
import DecisionActions from "@/components/DecisionActions";

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
            <PersonalInformation application={application} />
            <FinancialInformation application={application} />
            <B40ProofDocument application={application} />
          </div>

          {/* Action Panel */}
          <div className="space-y-6">
            <ApplicationSummary application={application} />
            <DecisionActions application={application} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationReview;
