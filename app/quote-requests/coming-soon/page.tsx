import { ComingSoon } from '@/components/common/coming-soon';

export default function QuoteRequestsComingSoon() {
  return (
    <ComingSoon
      title="Quote Requests & Leads"
      description="Manage inbound opportunities and respond to buyer RFQs"
      phase="Phase 2"
      features={[
        "View and respond to active RFQs in your category",
        "Submit detailed proposals with pricing",
        "Track lead status and pipeline",
        "Automated lead scoring and qualification",
        "Direct messaging with potential buyers",
        "Performance analytics and win rates"
      ]}
    />
  );
}