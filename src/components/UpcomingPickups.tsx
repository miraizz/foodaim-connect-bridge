
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";

interface Pickup {
  id: number;
  location: string;
  date: string;
  time: string;
  status: string;
  items: string[];
}

interface UpcomingPickupsProps {
  pickups: Pickup[];
}

const UpcomingPickups = ({ pickups }: UpcomingPickupsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-green-600" />
          Upcoming Food Pickups
        </CardTitle>
        <CardDescription>
          Your scheduled food collection appointments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pickups.map((pickup) => (
            <div key={pickup.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900 flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                    {pickup.location}
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    {pickup.date} • {pickup.time}
                  </p>
                </div>
                <Badge variant={pickup.status === 'confirmed' ? 'default' : 'secondary'}>
                  {pickup.status}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Available Items:</p>
                <div className="flex flex-wrap gap-2">
                  {pickup.items.map((item, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingPickups;
