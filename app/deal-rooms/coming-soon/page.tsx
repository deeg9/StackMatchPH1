import { ComingSoon } from '@/components/common/coming-soon';

export default function DealRoomsComingSoon() {
  return (
    <ComingSoon
      title="Deal Rooms"
      description="Secure collaborative workspaces for managing software negotiations and implementations"
      phase="Phase 3"
      features={[
        "Private workspaces for each vendor engagement",
        "Secure document sharing and version control",
        "Real-time messaging and collaboration",
        "Meeting scheduling and calendar integration",
        "Contract negotiation and tracking",
        "Implementation project management"
      ]}
    />
  );
}