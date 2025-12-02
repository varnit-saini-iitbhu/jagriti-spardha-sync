import { useState } from "react";
import "./EventCard.css";

interface EventCardProps {
  title: string;
  description: string;
  icon: string;
  registerLink?: string;
}

export const EventCard = ({ title, description, icon, registerLink }: EventCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="event-card-wrapper" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`event-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front of card */}
        <div className="event-card">
          <div className="event-icon">{icon}</div>
          <h3 className="event-title">{title}</h3>
          <p className="event-hint">Click to view details</p>
          <div className="event-buttons-container">
            <button 
              className="event-button event-button-outline"
              onClick={(e) => {
                e.stopPropagation();
                if (registerLink) window.open(registerLink, '_blank');
              }}
            >
              Register Now
            </button>
          </div>
        </div>

        {/* Back of card */}
        <div className="event-card event-card-back">
          <div className="event-icon">{icon}</div>
          <h3 className="event-title event-title-back">{title}</h3>
          <p className="event-description">{description}</p>
          <div className="event-buttons-container">
            <button 
              className="event-button event-button-primary"
              onClick={(e) => {
                e.stopPropagation();
                if (registerLink) window.open(registerLink, '_blank');
              }}
            >
              Register Now
            </button>
            <button 
              className="event-button event-button-outline"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
            >
              Click to go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
