
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface B40ProofDocumentProps {
  application: {
    id: string;
    name: string;
    date: string;
    b40ProofUrl: string;
  };
}

const B40ProofDocument = ({ application }: B40ProofDocumentProps) => {
  const { toast } = useToast();

  const handleDownloadB40Proof = () => {
    // Create a temporary link to download the file
    const link = document.createElement('a');
    link.href = application.b40ProofUrl;
    link.download = `B40_Proof_${application.id}_${application.name.replace(/\s+/g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Started",
      description: "B40 proof document is being downloaded.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="h-5 w-5 mr-2" />
          B40 Proof Document
        </CardTitle>
        <CardDescription>
          Review the uploaded B40 proof document
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-blue-500" />
              <div>
                <p className="font-medium">B40_Proof_{application.id}.png</p>
                <p className="text-sm text-gray-500">Uploaded on {application.date}</p>
              </div>
            </div>
            <Button
              onClick={handleDownloadB40Proof}
              size="sm"
              variant="outline"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default B40ProofDocument;
