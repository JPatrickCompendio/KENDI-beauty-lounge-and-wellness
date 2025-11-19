import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SharedProfileFormProps {
  userName?: string;
  userRole?: string;
  userEmail?: string;
  userContact?: string;
  onSave?: () => void;
  onUpdatePassword?: () => void;
}

export const SharedProfileForm = ({
  userName = "User Name",
  userRole = "User",
  userEmail = "user@kendibeauty.com",
  userContact = "0912-345-6789",
  onSave = () => {},
  onUpdatePassword = () => {},
}: SharedProfileFormProps) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-card mb-6 h-full">
          <CardHeader>
            <CardTitle className="font-heading">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Full Name</Label>
              <Input defaultValue={userName} />
            </div>
            <div>
              <Label>Role</Label>
              <Input defaultValue={userRole} readOnly className="bg-muted" />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" defaultValue={userEmail} />
            </div>
            <div>
              <Label>Contact Number</Label>
              <Input defaultValue={userContact} />
            </div>
            <Button onClick={onSave}>Save Changes</Button>
          </CardContent>
        </Card>

        <Card className="shadow-card mb-6 h-full">
          <CardHeader>
            <CardTitle className="font-heading">Change Password</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Current Password</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div>
              <Label>New Password</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div>
              <Label>Confirm New Password</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <Button onClick={onUpdatePassword}>Update Password</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
