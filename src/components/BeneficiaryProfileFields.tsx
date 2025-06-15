
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BeneficiaryProfile } from "@/types/profile";

interface BeneficiaryProfileFieldsProps {
  profileData: BeneficiaryProfile;
  onUpdateField: (field: keyof Omit<BeneficiaryProfile, keyof import("@/types/profile").BaseProfile>, value: string) => void;
}

const BeneficiaryProfileFields = ({ profileData, onUpdateField }: BeneficiaryProfileFieldsProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="householdSize">Household Size</Label>
        <Input
          id="householdSize"
          value={profileData.householdSize}
          onChange={(e) => onUpdateField('householdSize', e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="monthlyIncome">Monthly Income</Label>
        <Input
          id="monthlyIncome"
          value={profileData.monthlyIncome}
          onChange={(e) => onUpdateField('monthlyIncome', e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="beneficiaryId">Beneficiary ID</Label>
        <Input
          id="beneficiaryId"
          value={profileData.beneficiaryId}
          disabled
          className="bg-gray-100"
        />
      </div>
    </>
  );
};

export default BeneficiaryProfileFields;
