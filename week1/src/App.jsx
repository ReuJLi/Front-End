import IncidentCard from "./IncidentCard";
import EventCard from "./EventCard";

function App() {
  return (
    <div> 
      <h1>Week1 Components</h1>

      <IncidentCard
        incidentType="Injury"
        studentName="Jane Doe"
        eventName="Basketball Intramurals"
        filedBy="SSAC worker"
        date="May 20, 2025"
        description="Sprained ankle during a game."
      />

       <IncidentCard
        incidentType="Dress Code Violation"
        studentName="John Doe"
        eventName="Opening Social Dance"
        filedBy="SSAC worker"
        date="May 20, 2025"
        description="Has a beard but no beard card."
      />

       <EventCard
        eventName="Fall Ball"
        eventType="Dance"
        date="June 5, 2025"
        location="Ballroom"
        organizer="SSAC worker"
        description="Semi-formal dance for all students."
      />
       </div>
  )
}

export default App