
export interface BaseProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
}

export interface AdminProfile extends BaseProfile {
  department: string;
  employeeId: string;
  accessLevel: string;
}

export interface BeneficiaryProfile extends BaseProfile {
  householdSize: string;
  monthlyIncome: string;
  beneficiaryId: string;
}

export type ProfileData = AdminProfile | BeneficiaryProfile;
