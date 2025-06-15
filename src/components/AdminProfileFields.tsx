
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AdminProfile } from "@/types/profile";

interface AdminProfileFieldsProps {
  profileData: AdminProfile;
  onUpdateField: (field: keyof Omit<AdminProfile, keyof import("@/types/profile").BaseProfile>, value: string) => void;
}

const AdminProfileFields = ({ profileData, onUpdateField }: AdminProfileFieldsProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="department">Department</Label>
        <Input
          id="department"
          value={profileData.department}
          onChange={(e) => onUpdateField('department', e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="employeeId">Employee ID</Label>
        <Input
          id="employeeId"
          value={profileData.employeeId}
          disabled
          className="bg-gray-100"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="accessLevel">Access Level</Label>
        <Input
          id="accessLevel"
          value={profileData.accessLevel}
          disabled
          className="bg-gray-100"
        />
      </div>
    </>
  );
};

export default AdminProfileFields;
