import { SharedProfileForm } from "@/components/shared/SharedProfileForm";
import { useToast } from "@/hooks/use-toast";
import { DashboardLayout } from "@/pages/doctor/DashboardLayout";

const Profile = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handlePasswordUpdate = () => {
    toast({
      title: "Password Updated",
      description: "Your password has been changed successfully.",
    });
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold mb-2">Profile Settings</h1>
          <p className="text-muted-foreground">Manage your account information</p>
        </div>

        <SharedProfileForm
          userName="Dr. M. Dela Cruz"
          userRole="Doctor"
          userEmail="doctor@kendibeauty.com"
          userContact="0912-345-6789"
          onSave={handleSave}
          onUpdatePassword={handlePasswordUpdate}
        />
      </div>
    </DashboardLayout>
  );
};

export default Profile;
