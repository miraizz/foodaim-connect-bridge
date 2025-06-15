
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Package, Phone, Mail } from "lucide-react";

interface Application {
  id: string;
  submittedDate: string;
  status: string;
  progress: number;
  estimatedCompletion: string;
  lastUpdate: string;
  statusColor: string;
}

interface CollectionDetailsDialogProps {
  application: Application | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CollectionDetailsDialog = ({ application, open, onOpenChange }: CollectionDetailsDialogProps) => {
  if (!application) return null;

  const collectionInfo = {
    location: "Community Center - Downtown",
    address: "123 Main Street, Downtown, City 12345",
    date: "2024-01-20",
    timeSlot: "10:00 AM - 2:00 PM",
    contactPerson: "Sarah Johnson",
    contactPhone: "+60 3-1234 5678",
    contactEmail: "sarah.johnson@foodaim.org",
    items: [
      "Fresh Vegetables (2kg)",
      "Bread (2 loaves)",
      "Canned Goods (5 items)",
      "Rice (1kg)",
      "Cooking Oil (500ml)"
    ],
    instructions: [
      "Bring a valid ID for verification",
      "Bring your own bags or containers",
      "Arrive within your designated time slot",
      "Follow social distancing guidelines"
    ]
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Package className="h-5 w-5" />
            <span>Collection Details - {application.id}</span>
          </DialogTitle>
          <DialogDescription>
            Information about your food package collection
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Collection Status */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-800">Ready for Collection</span>
            </div>
            <p className="text-sm text-green-700 mt-1">
              Your food package has been prepared and is ready for pickup
            </p>
          </div>

          {/* Collection Location */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900 flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              Collection Location
            </h4>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium">{collectionInfo.location}</p>
              <p className="text-sm text-gray-600">{collectionInfo.address}</p>
            </div>
          </div>

          {/* Collection Schedule */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="font-medium text-gray-700 flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Collection Date
              </p>
              <p className="text-gray-600">{collectionInfo.date}</p>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-gray-700 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Time Slot
              </p>
              <p className="text-gray-600">{collectionInfo.timeSlot}</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Contact Person</h4>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="font-medium">{collectionInfo.contactPerson}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  {collectionInfo.contactPhone}
                </span>
                <span className="flex items-center">
                  <Mail className="h-4 w-4 mr-1" />
                  {collectionInfo.contactEmail}
                </span>
              </div>
            </div>
          </div>

          {/* Package Contents */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Package Contents</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {collectionInfo.items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Collection Instructions */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Collection Instructions</h4>
            <div className="space-y-2">
              {collectionInfo.instructions.map((instruction, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">{instruction}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2 pt-4 border-t">
            <Button size="sm" className="flex-1">
              <MapPin className="h-4 w-4 mr-2" />
              Get Directions
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              <Phone className="h-4 w-4 mr-2" />
              Call Location
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CollectionDetailsDialog;
