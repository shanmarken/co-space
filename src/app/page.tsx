'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { spaces } from '@/lib/data';
import SpaceCard from '@/components/spaces/space-card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, Briefcase, Lightbulb, Users, Wifi, PersonStanding, MonitorSpeaker, Coffee, Mic, ParkingCircle, Accessibility, ScreenShare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const perks = [
  {
    icon: <Wifi className="h-10 w-10 text-primary" />,
    name: 'High-Speed Wi-Fi',
    description: 'Blazing fast internet to keep you productive.',
  },
  {
    icon: <PersonStanding className="h-10 w-10 text-primary" />,
    name: 'Dedicated Desks',
    description: 'Your own personal space in our vibrant community.',
  },
  {
    icon: <MonitorSpeaker className="h-10 w-10 text-primary" />,
    name: 'Private Meeting',
    description: 'Confidential, professional rooms for your meetings.',
  },
  {
    icon: <Coffee className="h-10 w-10 text-primary" />,
    name: 'Coffee Bar',
    description: 'Unlimited premium coffee to fuel your day.',
  },
  {
    icon: <Mic className="h-10 w-10 text-primary" />,
    name: 'Studio Space',
    description: 'Equipped for your podcasting and recording needs.',
  },
  {
    icon: <ParkingCircle className="h-10 w-10 text-primary" />,
    name: 'Secure Parking',
    description: 'Convenient and safe parking for your vehicle.',
  },
  {
    icon: <Accessibility className="h-10 w-10 text-primary" />,
    name: 'Wheelchair Accessible',
    description: 'Ensuring access for everyone.',
  },
    {
    icon: <ScreenShare className="h-10 w-10 text-primary" />,
    name: 'Event Spaces',
    description: 'Versatile spaces for your workshops and events.',
  },
];

export default function Home() {
  const searchParams = useSearchParams();
  const [spaceType, setSpaceType] = useState('all');
  const spacesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden shadow-2xl w-full">
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

      <section ref={spacesRef} className="py-16 bg-secondary w-full">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-headline text-5xl font-bold tracking-tight text-left">
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

      <section id="about" ref={aboutRef} className="py-20 bg-background w-full">
        <div className="container mx-auto px-4 text-center max-w-4xl mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">About SpaceBooker</h2>
          <p className="text-lg text-muted-foreground">
            We are revolutionizing the way professionals find and book workspaces. Our mission is to provide flexible, on-demand spaces that inspire productivity and foster collaboration.
          </p>
        </div>

        <div className="relative h-96">
          <Image
            src="https://picsum.photos/1600/500?random=20"
            alt="Modern office interior"
            fill
            className="object-cover"
            data-ai-hint="office building"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h3 className="font-headline text-5xl font-bold text-white text-center p-4 max-w-4xl">Your next great idea starts here.</h3>
          </div>
        </div>

        <div className="bg-card py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12 text-center mb-20">
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
            </div>
        </div>
        <div className="bg-secondary w-full py-20">
          <div className="container mx-auto px-4">
              <h2 className="font-headline text-4xl font-bold text-center mb-2">Perks of our coworking spaces</h2>
              <p className="text-primary text-center mb-12">Amenities Showcase</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {perks.map((perk, index) => (
                  <Card key={index} className="text-center p-6 flex flex-col items-center justify-center bg-background shadow-lg hover:shadow-xl transition-shadow rounded-lg">
                    {perk.icon}
                    <h4 className="font-semibold text-lg mt-4">{perk.name}</h4>
                  </Card>
                ))}
              </div>
            </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-20 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/retina-wood.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h2 className="font-headline text-5xl font-bold leading-tight">
                Building Connections,
                <br />
                Inspiring Success.
              </h2>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-semibold">8.30 AM - 6PM</p>
                  <p className="text-green-400 font-bold">MON - FRI</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">CLOSED</p>
                  <p className="text-green-400 font-bold">SATURDAY, SUNDAYS & PUBLIC HOLIDAYS</p>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="https://picsum.photos/600/450?random=30"
                      alt="Community at Co-Labs"
                      fill
                      className="object-cover"
                      data-ai-hint="people collaborating"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-center text-lg text-gray-300">
                      Fostering a Like-Minded Community
                      <br />
                      Empowering Entrepreneurs, Freelancers & Innovators
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="text-right mt-8">
              <Button asChild variant="secondary" size="lg">
                  <Link href="/contact">Contact Us</Link>
              </Button>
          </div>
        </div>
      </section>
    </>
  );
}
