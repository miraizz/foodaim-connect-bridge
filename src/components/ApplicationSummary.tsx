
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "lucide-react";

interface ApplicationSummaryProps {
  application: {
    id: string;
    date: string;
    status: string;
    income: string;
    householdSize: number;
  };
}

const ApplicationSummary = ({ application }: ApplicationSummaryProps) => {
  return (
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
  );
};

export default ApplicationSummary;
