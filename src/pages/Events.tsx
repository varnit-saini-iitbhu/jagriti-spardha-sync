import { EventCard } from "@/components/EventCard";
import "./Events.css";


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
    <div className="events-page">
      <div className="events-hero">
        <h1 className="events-title">JAGRITI EVENTS</h1>
        <p className="events-subtitle">Join our exciting events and showcase your skills!</p>
        <div className="events-cta">REGISTER NOW !!</div>
        <div className="events-hint">
          <span className="pulse-dot"></span>
          Click on any card to learn more
          <span className="pulse-dot"></span>
        </div>
      </div>

      <div className="events-grid">
        {eventsData.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
