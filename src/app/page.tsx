'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { spaces } from '@/lib/data';
import SpaceCard from '@/components/spaces/space-card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, Briefcase, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  const searchParams = useSearchParams();
  const [spaceType, setSpaceType] = useState('all');
  const spacesRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam) {
      setSpaceType(typeParam);
    } else {
      setSpaceType('all');
    }
  }, [searchParams]);


  const filteredSpaces = useMemo(() => {
    if (spaceType === 'all') {
      return spaces;
    }
    return spaces.filter(space => space.type === spaceType);
  }, [spaceType]);
  
  const handleScrollToSpaces = () => {
    spacesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/1600/900?random=1"
            alt="Inspiring workspace"
            fill
            className="object-cover"
            data-ai-hint="inspiring workspace"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 p-4 animate-fade-in-up">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-lg">
            Find Your Perfect Workspace
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
            Discover and book unique co-working spaces and meeting rooms on-demand. No subscriptions, no hassles.
          </p>
          <Button size="lg" onClick={handleScrollToSpaces}>
            Explore Spaces <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section ref={spacesRef} className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-left">
              Find the Perfect
              <br />
              Workspace for You
            </h2>
          </div>

          {filteredSpaces.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSpaces.map(space => (
                <SpaceCard key={space.id} space={space} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border-2 border-dashed rounded-lg">
                <h2 className="font-headline text-2xl font-semibold">No Spaces Found</h2>
                <p className="text-muted-foreground mt-2">Try adjusting your filters to find more options.</p>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">About SpaceBooker</h1>
          <p className="text-lg text-muted-foreground">
            We are revolutionizing the way professionals find and book workspaces. Our mission is to provide flexible, on-demand spaces that inspire productivity and foster collaboration.
          </p>
        </div>

        <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl mb-16">
          <Image
            src="https://picsum.photos/1200/400?random=20"
            alt="Modern office interior"
            fill
            className="object-cover"
            data-ai-hint="office building"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="font-headline text-4xl font-bold text-white text-center p-4">Your next great idea starts here.</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="flex flex-col items-center">
            <Briefcase className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-headline text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-muted-foreground">To empower individuals and teams by providing seamless access to inspiring and productive work environments, anywhere, anytime.</p>
          </div>
          <div className="flex flex-col items-center">
            <Lightbulb className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-headline text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-muted-foreground">To be the leading platform for flexible workspace solutions, fostering a global community of innovators and creators.</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-headline text-2xl font-semibold mb-2">Our Values</h3>
            <p className="text-muted-foreground">We value flexibility, community, quality, and innovation, ensuring a premium experience for all our users.</p>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-lg border">
          <h2 className="font-headline text-3xl font-bold text-center mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary">
                <AvatarImage src="https://picsum.photos/100/100?random=21" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <h4 className="font-semibold text-lg">Jane Smith</h4>
              <p className="text-primary">CEO & Founder</p>
            </div>
            <div className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary">
                <AvatarImage src="https://picsum.photos/100/100?random=22" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h4 className="font-semibold text-lg">John Doe</h4>
              <p className="text-primary">CTO & Co-Founder</p>
            </div>
            <div className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary">
                <AvatarImage src="https://picsum.photos/100/100?random=23" />
                <AvatarFallback>AL</AvatarFallback>
              </Avatar>
              <h4 className="font-semibold text-lg">Alex Lee</h4>
              <p className="text-primary">Head of Product</p>
            </div>
            <div className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary">
                <AvatarImage src="https://picsum.photos/100/100?random=24" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <h4 className="font-semibold text-lg">Sarah Miller</h4>
              <p className="text-primary">Community Manager</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
