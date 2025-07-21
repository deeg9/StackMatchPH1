import { ComingSoon } from '@/components/common/coming-soon';

export default function BrowseListingsComingSoon() {
  return (
    <ComingSoon
      title="Browse Project Listings"
      description="Discover and respond to active RFQs from buyers"
      phase="Phase 2"
      features={[
        "Browse all active RFQs in your categories",
        "Advanced filtering by budget, timeline, and requirements",
        "Save searches and get notifications",
        "View detailed project requirements",
        "Submit proposals directly through the platform",
        "Track competitive landscape"
      ]}
    />
  );
}