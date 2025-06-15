
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProfilePictureSectionProps {
  profileName: string;
}

const ProfilePictureSection = ({ profileName }: ProfilePictureSectionProps) => {
  const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      toast({ 
        title: "Profile Picture Updated", 
        description: "Your profile picture has been uploaded successfully." 
      });
    }
  };

  return (
    <div className="flex items-center space-x-6">
      <Avatar className="w-24 h-24">
        <AvatarImage src="/placeholder.svg" />
        <AvatarFallback className="text-lg">
          {profileName.split(' ').map(n => n[0]).join('')}
        </AvatarFallback>
      </Avatar>
      <div>
        <Label htmlFor="profile-picture" className="cursor-pointer">
          <div className="flex items-center space-x-2 px-4 py-2 border rounded-md hover:bg-gray-50">
            <Upload className="h-4 w-4" />
            <span>Upload Photo</span>
          </div>
          <Input
            id="profile-picture"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </Label>
        <p className="text-sm text-gray-500 mt-2">
          JPG, PNG or GIF (max 5MB)
        </p>
      </div>
    </div>
  );
};

export default ProfilePictureSection;
