
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertTriangle } from "lucide-react";

interface LowStockItem {
  id: string;
  name: string;
  currentStock: number;
  threshold: number;
  unit: string;
  status: 'low' | 'critical';
}

const LowStockAlerts = () => {
  // Mock data for low stock items - in a real app, this would come from your inventory data
  const lowStockItems: LowStockItem[] = [
    {
      id: "1",
      name: "Bread",
      currentStock: 15,
      threshold: 20,
      unit: "loaves",
      status: "low"
    },
    {
      id: "2",
      name: "Milk",
      currentStock: 8,
      threshold: 15,
      unit: "cartons",
      status: "critical"
    },
    {
      id: "3",
      name: "Eggs",
      currentStock: 12,
      threshold: 25,
      unit: "dozens",
      status: "low"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical':
        return 'bg-red-500 text-white';
      case 'low':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline" size="sm" className="hover:bg-red-50">
          <Bell className="h-4 w-4 mr-2" />
          Alerts ({lowStockItems.length})
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80" align="end">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <h4 className="font-semibold text-sm">Low Stock Alerts</h4>
          </div>
          
          {lowStockItems.length === 0 ? (
            <p className="text-sm text-gray-500">No low stock items</p>
          ) : (
            <div className="space-y-2">
              {lowStockItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-sm">{item.name}</span>
                      <Badge className={`text-xs ${getStatusColor(item.status)}`}>
                        {item.status.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600">
                      {item.currentStock} {item.unit} (threshold: {item.threshold})
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="pt-2 border-t">
                <p className="text-xs text-gray-500 text-center">
                  Hover over items for more details
                </p>
              </div>
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default LowStockAlerts;
