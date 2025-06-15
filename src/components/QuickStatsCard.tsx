
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const QuickStatsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Your Impact</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600">12</div>
          <p className="text-sm text-gray-600">Food packages received</p>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">36</div>
          <p className="text-sm text-gray-600">Meals provided</p>
        </div>
        <div className="flex items-center space-x-2">
          <Star className="h-4 w-4 text-yellow-500" />
          <span className="text-sm text-gray-600">Member since Jan 2024</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickStatsCard;
