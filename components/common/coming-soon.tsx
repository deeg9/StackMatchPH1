'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Rocket, Bell, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ComingSoonProps {
  title: string;
  description: string;
  features?: string[];
  phase?: string;
  showWaitlist?: boolean;
}

export function ComingSoon({ 
  title, 
  description, 
  features = [], 
  phase = "Phase 2",
  showWaitlist = true 
}: ComingSoonProps) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success message - backend integration will come later
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto p-6 py-20">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Go Back
        </Button>

        <div className="text-center space-y-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Rocket className="h-4 w-4 mr-2" />
            Coming in {phase}
          </div>

          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>

          {features.length > 0 && (
            <Card className="max-w-2xl mx-auto mt-8 p-8">
              <h3 className="text-lg font-semibold mb-4">What&apos;s Coming:</h3>
              <ul className="space-y-3 text-left">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {showWaitlist && (
            <Card className="max-w-xl mx-auto mt-12 p-8">
              <div className="text-center space-y-4">
                <Bell className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-xl font-semibold">Get Early Access</h3>
                <p className="text-muted-foreground">
                  Be the first to know when this feature launches
                </p>

                {!isSubscribed ? (
                  <form onSubmit={handleWaitlist} className="flex gap-2 mt-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                    <Button type="submit">
                      <Mail className="h-4 w-4 mr-2" />
                      Notify Me
                    </Button>
                  </form>
                ) : (
                  <div className="bg-green-50 text-green-700 p-4 rounded-lg">
                    <p className="font-medium">You&apos;re on the list!</p>
                    <p className="text-sm mt-1">We&apos;ll notify you as soon as this feature is available.</p>
                  </div>
                )}
              </div>
            </Card>
          )}

          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">
              In the meantime, explore what&apos;s available today:
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/create-listing">
                <Button variant="outline">Create RFQ</Button>
              </Link>
              <Link href="/browse-sellers">
                <Button variant="outline">Browse Vendors</Button>
              </Link>
              <Link href="/stacktalk">
                <Button variant="outline">Join Community</Button>
              </Link>
              <Link href="/my-tech-stack">
                <Button variant="outline">Manage Tech Stack</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}