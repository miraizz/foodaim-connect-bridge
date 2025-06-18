
import { AdminProfile, BeneficiaryProfile, ProfileData } from "@/types/profile";

export const getInitialProfileData = (isAdmin: boolean): ProfileData => {
  console.log("getInitialProfileData called with isAdmin:", isAdmin);
  
  if (isAdmin) {
    const adminProfile: AdminProfile = {
      name: "John Administrator",
      email: "admin@foodbank.org",
      phone: "+60123456789",
      address: "123 Main Street, Kuala Lumpur",
      role: "Administrator",
      department: "Operations Management",
      employeeId: "EMP001",
      accessLevel: "Full Access"
    };
    
    console.log("Returning admin profile:", adminProfile);
    return adminProfile;
  } else {
    const beneficiaryProfile: BeneficiaryProfile = {
      name: "Ahmad Abdullah",
      email: "ahmad.abdullah@gmail.com",
      phone: "+60187654321",
      address: "456 Jalan Raya, Selangor",
      role: "Beneficiary",
      householdSize: "4 members",
      monthlyIncome: "RM 1,200",
      beneficiaryId: "BEN001"
    };
    
    console.log("Returning beneficiary profile:", beneficiaryProfile);
    return beneficiaryProfile;
  }
};
