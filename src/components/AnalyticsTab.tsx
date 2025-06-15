
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface DistributionData {
  name: string;
  distributed: number;
  applications: number;
}

interface AnalyticsTabProps {
  distributionData: DistributionData[];
}

const AnalyticsTab = ({ distributionData }: AnalyticsTabProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Distribution Trends</CardTitle>
          <CardDescription>Weekly food distribution statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={distributionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="distributed" fill="#3B82F6" />
              <Bar dataKey="applications" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Application Status Overview</CardTitle>
          <CardDescription>Current application distribution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Approved Applications</span>
              <span className="font-medium">156 (68%)</span>
            </div>
            <Progress value={68} className="h-2" />
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Pending Review</span>
              <span className="font-medium">23 (10%)</span>
            </div>
            <Progress value={10} className="h-2" />
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Rejected</span>
              <span className="font-medium">51 (22%)</span>
            </div>
            <Progress value={22} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsTab;
