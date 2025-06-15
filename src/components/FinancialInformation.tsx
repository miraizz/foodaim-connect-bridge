
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users } from "lucide-react";

interface FinancialInformationProps {
  application: {
    income: string;
    householdSize: number;
    reason: string;
  };
}

const FinancialInformation = ({ application }: FinancialInformationProps) => {
  return (
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
  );
};

export default FinancialInformation;
