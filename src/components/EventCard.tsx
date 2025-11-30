import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  description: string;
  icon: string;
  registerLink?: string;
}

export const EventCard = ({ title, description, icon, registerLink }: EventCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group perspective-1000 h-[400px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front of card */}
        <Card className="absolute w-full h-full backface-hidden bg-card/50 backdrop-blur-sm border-primary/20 glow-card hover:glow-border transition-all duration-300 overflow-hidden group-hover:scale-[1.02]">
          <div className="h-full flex flex-col items-center justify-center p-6 text-center">
            <div className="text-7xl mb-6 animate-float">{icon}</div>
            <h3 className="text-2xl font-bold mb-4 glow-text text-foreground">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-6">Click to view details</p>
            <div className="absolute bottom-6 left-0 right-0 px-6">
              <Button 
                variant="outline" 
                className="w-full border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  if (registerLink) window.open(registerLink, '_blank');
                }}
              >
                Register Now
              </Button>
            </div>
          </div>
        </Card>

        {/* Back of card */}
        <Card className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)] bg-card/50 backdrop-blur-sm border-primary/20 glow-card">
          <div className="h-full flex flex-col items-center justify-center p-6 text-center">
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-primary">{title}</h3>
            <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
              {description}
            </p>
            <div className="space-y-3 w-full">
              <Button 
                variant="default" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={(e) => {
                  e.stopPropagation();
                  if (registerLink) window.open(registerLink, '_blank');
                }}
              >
                Register Now
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-primary/50 hover:bg-secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
              >
                Click to go back
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
