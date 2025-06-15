
import { AdminProfile, BeneficiaryProfile, ProfileData } from "@/types/profile";

export const getInitialProfileData = (isAdmin: boolean): ProfileData => {
  if (isAdmin) {
    return {
      name: "John Administrator",
      email: "admin@foodbank.org",
      phone: "+60123456789",
      address: "123 Main Street, Kuala Lumpur",
      role: "Administrator",
      department: "Operations Management",
      employeeId: "EMP001",
      accessLevel: "Full Access"
    } as AdminProfile;
  } else {
    return {
      name: "Ahmad Abdullah",
      email: "ahmad.abdullah@gmail.com",
      phone: "+60187654321",
      address: "456 Jalan Raya, Selangor",
      role: "Beneficiary",
      householdSize: "4 members",
      monthlyIncome: "RM 1,200",
      beneficiaryId: "BEN001"
    } as BeneficiaryProfile;
  }
};
