import { SharedHeader } from "@/components/shared/SharedHeader";
import { SharedFooter } from "@/components/shared/SharedFooter";
import { RoleCard } from "@/components/shared/RoleCard";
import { Shield, Stethoscope, User } from "lucide-react";

const RoleSelector = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SharedHeader showLogin={false} />
      
      <main className="flex-1 gradient-hero">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Select Your Role
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose your dashboard access level to continue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <RoleCard
              title="Admin"
              description="Full system access with management capabilities"
              icon={Shield}
              path="/dashboard"
              gradient="gradient-primary"
            />
            
            <RoleCard
              title="Doctor"
              description="Access patient records and prescriptions"
              icon={Stethoscope}
              path="/dashboard"
              gradient="gradient-primary"
            />
            
            <RoleCard
              title="Client"
              description="View appointments and personal records"
              icon={User}
              path="/dashboard"
              gradient="gradient-primary"
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              Need help? <a href="/contact" className="text-primary hover:text-accent transition-smooth font-medium">Contact support</a>
            </p>
          </div>
        </div>
      </main>

      <SharedFooter />
    </div>
  );
};

export default RoleSelector;
