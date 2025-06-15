
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

interface StockItem {
  name: string;
  current: number;
  max: number;
  unit: string;
  status: string;
}

interface InventoryTabProps {
  stockData: StockItem[];
}

const InventoryTab = ({ stockData }: InventoryTabProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "bg-green-500";
      case "low": return "bg-yellow-500";
      case "critical": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Stock Levels */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Current Stock Levels</CardTitle>
            <CardDescription>Real-time inventory tracked by IoT sensors</CardDescription>
          </div>
          <Link to="/inventory-management">
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Manage Items
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stockData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}></div>
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.current} / {item.max} {item.unit}</p>
                  </div>
                </div>
                <div className="w-32">
                  <Progress value={(item.current / item.max) * 100} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* IoT Status */}
      <Card>
        <CardHeader>
          <CardTitle>IoT Sensor Status</CardTitle>
          <CardDescription>Real-time monitoring from Arduino Uno and ultrasonic sensors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">5/5</div>
              <p className="text-sm text-green-700">Sensors Online</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">&lt; 2s</div>
              <p className="text-sm text-blue-700">Update Frequency</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">99.8%</div>
              <p className="text-sm text-purple-700">Accuracy Rate</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryTab;
