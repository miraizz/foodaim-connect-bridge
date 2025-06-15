
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Phone, Home } from "lucide-react";

interface PersonalInformationProps {
  application: {
    name: string;
    id: string;
    email: string;
    phone: string;
    address: string;
  };
}

const PersonalInformation = ({ application }: PersonalInformationProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <User className="h-5 w-5 mr-2" />
          Personal Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <p className="text-gray-900">{application.name}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Application ID</label>
            <p className="text-gray-900">{application.id}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <p className="text-gray-900 flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              {application.email}
            </p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <p className="text-gray-900 flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              {application.phone}
            </p>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Address</label>
          <p className="text-gray-900 flex items-start">
            <Home className="h-4 w-4 mr-2 mt-1" />
            {application.address}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInformation;
