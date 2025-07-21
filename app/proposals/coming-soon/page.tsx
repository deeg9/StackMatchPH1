import { ComingSoon } from '@/components/common/coming-soon';

export default function ProposalsComingSoon() {
  return (
    <ComingSoon
      title="Proposals Marketplace"
      description="Receive and compare vendor proposals directly through StackMatch"
      phase="Phase 2"
      features={[
        "Post your RFQ to our vendor network",
        "Receive structured proposals from qualified vendors",
        "Compare proposals side-by-side",
        "Direct communication with vendors",
        "Automated vendor matching based on your requirements",
        "Proposal scoring and evaluation tools"
      ]}
    />
  );
}