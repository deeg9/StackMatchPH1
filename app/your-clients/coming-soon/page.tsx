import { ComingSoon } from '@/components/common/coming-soon';

export default function YourClientsComingSoon() {
  return (
    <ComingSoon
      title="Your Clients CRM"
      description="Manage your client relationships and track deal progress"
      phase="Phase 2"
      features={[
        "Complete client relationship management",
        "Deal pipeline and opportunity tracking",
        "Contract and renewal management",
        "Revenue tracking and forecasting",
        "Client communication history",
        "Integration with Deal Rooms"
      ]}
    />
  );
}