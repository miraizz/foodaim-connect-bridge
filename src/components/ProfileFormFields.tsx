
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BaseProfile, ProfileData, AdminProfile, BeneficiaryProfile } from "@/types/profile";
import AdminProfileFields from "./AdminProfileFields";
import BeneficiaryProfileFields from "./BeneficiaryProfileFields";

interface ProfileFormFieldsProps {
  profileData: ProfileData;
  isAdmin: boolean;
  onUpdateBaseField: (field: keyof BaseProfile, value: string) => void;
  onUpdateAdminField: (field: keyof Omit<AdminProfile, keyof BaseProfile>, value: string) => void;
  onUpdateBeneficiaryField: (field: keyof Omit<BeneficiaryProfile, keyof BaseProfile>, value: string) => void;
}

const ProfileFormFields = ({ 
  profileData, 
  isAdmin, 
  onUpdateBaseField, 
  onUpdateAdminField, 
  onUpdateBeneficiaryField 
}: ProfileFormFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={profileData.name}
            onChange={(e) => onUpdateBaseField('name', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={profileData.email}
            onChange={(e) => onUpdateBaseField('email', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            value={profileData.phone}
            onChange={(e) => onUpdateBaseField('phone', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Input
            id="role"
            value={profileData.role}
            disabled
            className="bg-gray-100"
          />
        </div>

        {isAdmin && (
          <AdminProfileFields 
            profileData={profileData as AdminProfile}
            onUpdateField={onUpdateAdminField}
          />
        )}

        {!isAdmin && (
          <BeneficiaryProfileFields 
            profileData={profileData as BeneficiaryProfile}
            onUpdateField={onUpdateBeneficiaryField}
          />
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Textarea
          id="address"
          value={profileData.address}
          onChange={(e) => onUpdateBaseField('address', e.target.value)}
          rows={3}
        />
      </div>
    </>
  );
};

export default ProfileFormFields;
