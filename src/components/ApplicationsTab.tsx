
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Application {
  id: string;
  name: string;
  status: string;
  income: string;
  date: string;
}

interface ApplicationsTabProps {
  recentApplications: Application[];
}

const ApplicationsTab = ({ recentApplications }: ApplicationsTabProps) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending": return <Badge variant="outline" className="text-yellow-600">Pending</Badge>;
      case "approved": return <Badge className="bg-green-500">Approved</Badge>;
      case "rejected": return <Badge variant="destructive">Rejected</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Applications</CardTitle>
        <CardDescription>B40 beneficiary applications requiring review</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentApplications.map((app, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">{app.name}</h4>
                <p className="text-sm text-gray-500">ID: {app.id} | Income: {app.income}</p>
                <p className="text-xs text-gray-400">Applied: {app.date}</p>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusBadge(app.status)}
                {app.status === "pending" && (
                  <Button size="sm" variant="outline">Review</Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationsTab;
