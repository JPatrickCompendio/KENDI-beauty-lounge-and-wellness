import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface RoleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  gradient?: string;
}

export const RoleCard = ({ 
  title, 
  description, 
  icon: Icon, 
  path,
  gradient = "gradient-primary"
}: RoleCardProps) => {
  return (
    <Link to={path} className="block">
      <Card className="shadow-card hover:shadow-elegant transition-smooth cursor-pointer group h-full">
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
          <div className={`${gradient} p-6 rounded-full group-hover:scale-110 transition-smooth`}>
            <Icon className="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-smooth">
              {title}
            </h3>
            <p className="text-muted-foreground">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
