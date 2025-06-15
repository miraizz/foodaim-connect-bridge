
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, Package } from "lucide-react";

const FoodAvailabilityTab = () => {
  const foodItems = [
    {
      id: 1,
      name: "Rice",
      category: "Staples",
      quantity: "75 kg",
      percentage: 85,
      status: "Available",
      lastUpdated: "2 mins ago"
    },
    {
      id: 2,
      name: "Canned Food",
      category: "Preserved",
      quantity: "45 units",
      percentage: 60,
      status: "Available",
      lastUpdated: "5 mins ago"
    },
    {
      id: 3,
      name: "Bread",
      category: "Bakery",
      quantity: "15 loaves",
      percentage: 25,
      status: "Low Stock",
      lastUpdated: "1 min ago"
    },
    {
      id: 4,
      name: "Vegetables",
      category: "Fresh",
      quantity: "30 kg",
      percentage: 70,
      status: "Available",
      lastUpdated: "3 mins ago"
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Current Food Availability</h2>
        <p className="text-gray-600">Real-time stock levels updated by our IoT monitoring system</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {foodItems.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    {item.category}
                  </Badge>
                </div>
                <Badge 
                  variant={item.status === "Available" ? "default" : "destructive"}
                  className={item.status === "Available" ? "bg-green-600" : ""}
                >
                  {item.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">{item.quantity}</span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Updated {item.lastUpdated}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Stock Level</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Package className="h-5 w-5 mr-2 text-blue-500" />
            Stock Update Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Our food inventory is updated in real-time using IoT sensors. Stock levels are automatically 
            monitored and updated every few minutes to ensure accuracy. Low stock items are highlighted 
            in red to help you plan your visits accordingly.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FoodAvailabilityTab;
