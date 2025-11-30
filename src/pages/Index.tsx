import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-dark-bg via-background to-dark-bg">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold glow-text text-primary">Welcome to Jagriti</h1>
        <p className="text-xl text-muted-foreground mb-8">Explore our exciting events</p>
        <Button 
          size="lg"
          onClick={() => navigate('/events')}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/50"
        >
          View Events
        </Button>
      </div>
    </div>
  );
};

export default Index;
