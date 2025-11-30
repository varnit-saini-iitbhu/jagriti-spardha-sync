import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";


const eventsData = [
  {
    title: "Strat-Impact",
    description: "This event provides a platform for innovative thinkers and aspiring strategists to solve real-world social and business challenges through strategic and data-driven solutions.",
    icon: "🎯",
    registerLink: "https://unstop.com/competitions/strat-impact-jagriti-2026-iit-bhu-1591918"
  },
  {
    title: "Policy Case Simulation",
    description: "The Policy Simulation Challenge is a flagship governance event designed to test participants' ability to think analytically and act ethically under simulated real-world policymaking and crisis management scenarios.",
    icon: "⚖️",
    registerLink: "https://unstop.com/competitions/policy-case-simulation-jagriti-2026-iit-bhu-1592276"
  },
  {
    title: "Impactify",
    description: "This event serves as a dynamic platform for aspiring product managers and creative problem solvers to design impactful solutions to pressing social challenges through product-driven strategies.",
    icon: "💡",
    registerLink: "https://unstop.com/competitions/impactify-jagriti-2026-iit-bhu-1592190"
  },
  {
    title: "Voice of Change",
    description: "Voice of Change is designed to immerse students in the world of journalism, testing their awareness, writing skills, and field reporting abilities. Participants will experience real-world reporting scenarios, research-based article writing, and citizen interaction to highlight pressing social issues effectively.",
    icon: "📰",
    registerLink: "https://unstop.com/competitions/voice-of-change-journalism-challenge-jagriti-2026-iit-bhu-1592217"
  },
  {
    title: "Socio-Entrepreneurship",
    description: "It provides a platform for aspiring innovators and changemakers to design entrepreneurial solutions for real-world social challenges—combining creativity, strategy, and impact.",
    icon: "🚀",
    registerLink: "https://unstop.com/competitions/socio-entrepreneurship-jagriti-2026-iit-bhu-1592389"
  },
  {
    title: "Serve-Smart Hackathon",
    description: "The Serve-Smart Hackathon is the flagship AI & ML challenge dedicated to harnessing the power of technology for social good. This competition calls upon innovators to leverage Artificial Intelligence and Machine Learning to design intelligent, practical, and impactful solutions aimed at solving real-world social issues.",
    icon: "💻",
    registerLink: "https://unstop.com/hackathons/serve-smart-hackathon-jagriti-2026-iit-bhu-1592214"
  },
  {
    title: "Impact-Metrics",
    description: "This dynamic event invites data enthusiasts and problem solvers to dive into the world of analytics and derive actionable insights to address pressing social issues.",
    icon: "📊",
    registerLink: "https://unstop.com/competitions/impact-metrics-a-data-analytics-competition-jagriti-2026-iit-bhu-1592416"
  },
  {
    title: "Re-Form",
    description: "Re-Form is not just a fashion event — it's a movement toward sustainability and creativity. Participants are challenged to transform waste materials into wearable art that reflects innovation, environmental awareness, and social responsibility.",
    icon: "♻️",
    registerLink: "https://unstop.com/competitions/re-form-the-waste-to-wearable-challenge-jagriti-2026-iit-bhu-1592705"
  }
];

const Events = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-bg via-background to-dark-bg relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-neon-cyan/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }}></div>
        
        {/* Radial gradient overlays */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(14,165,233,0.15)_0%,transparent_70%)] animate-pulse" style={{ animationDuration: "4s" }}></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,255,255,0.1)_0%,transparent_70%)] animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-background/80 to-background"></div>
        
        {/* Animated scan line effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-32 animate-[slide-down_3s_ease-in-out_infinite]"></div>
        
        <div className="relative container mx-auto px-4 pt-20 pb-32 text-center">
          <div className="mb-8 inline-block">
            <div className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="block glow-text animate-glow-pulse text-primary">
                JAGRITI EVENTS
              </span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join our exciting events and showcase your skills!
          </p>
          
          <h1 
            // size="lg"
            // className=" text-primary px-8 py-6 text-5xl font-semibold "
            className="text-primary px-8 py-6 text-5xl font-semibold hover:text-purple-500 hover:scale-120 "

            // className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/50"
          >
            
            REGISTER NOW !!
          </h1>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Click on any card to learn more
            <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="relative container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <div
              key={event.title}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "backwards",
              }}
            >
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
