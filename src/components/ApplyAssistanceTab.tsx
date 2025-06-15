
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, AlertCircle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ApplyAssistanceTab = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    icNumber: "",
    phoneNumber: "",
    email: "",
    address: "",
    householdSize: "",
    monthlyIncome: "",
    employmentStatus: "",
    reasonForAssistance: "",
    b40File: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, b40File: file }));
      toast({
        title: "File uploaded successfully",
        description: `${file.name} has been attached to your application.`,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application submitted successfully!",
      description: "We will review your application and contact you within 3-5 business days.",
    });
    // Reset form
    setFormData({
      fullName: "",
      icNumber: "",
      phoneNumber: "",
      email: "",
      address: "",
      householdSize: "",
      monthlyIncome: "",
      employmentStatus: "",
      reasonForAssistance: "",
      b40File: null
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Apply for Food Assistance</h2>
        <p className="text-gray-600">Fill out the form below to apply for food assistance. Please provide accurate information.</p>
      </div>

      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 text-green-500" />
            Application Requirements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">Valid Malaysian IC or identification document</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">B40 income certificate or proof of income</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">Proof of address (utility bill, bank statement, etc.)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Application Form</CardTitle>
          <CardDescription>Please fill in all required fields accurately</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="icNumber">IC Number *</Label>
                <Input
                  id="icNumber"
                  name="icNumber"
                  value={formData.icNumber}
                  onChange={handleInputChange}
                  placeholder="123456-78-9012"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number *</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="01X-XXXXXXX"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Full Address *</Label>
              <Textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your complete address including postcode and state"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="householdSize">Household Size *</Label>
                <Input
                  id="householdSize"
                  name="householdSize"
                  type="number"
                  value={formData.householdSize}
                  onChange={handleInputChange}
                  placeholder="Number of people"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="monthlyIncome">Monthly Income (RM) *</Label>
                <Input
                  id="monthlyIncome"
                  name="monthlyIncome"
                  type="number"
                  value={formData.monthlyIncome}
                  onChange={handleInputChange}
                  placeholder="0"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employmentStatus">Employment Status *</Label>
                <Input
                  id="employmentStatus"
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleInputChange}
                  placeholder="e.g., Unemployed, Part-time"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reasonForAssistance">Reason for Assistance *</Label>
              <Textarea
                id="reasonForAssistance"
                name="reasonForAssistance"
                value={formData.reasonForAssistance}
                onChange={handleInputChange}
                placeholder="Please explain your current situation and why you need food assistance"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="b40File">Upload B40 Certificate/Proof of Income *</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <input
                  id="b40File"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileUpload}
                  className="hidden"
                  required
                />
                <label htmlFor="b40File" className="cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    PDF, JPG, PNG up to 10MB
                  </p>
                </label>
                {formData.b40File && (
                  <div className="mt-2 flex items-center justify-center">
                    <FileText className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm text-green-600">{formData.b40File.name}</span>
                  </div>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplyAssistanceTab;
