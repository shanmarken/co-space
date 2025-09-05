'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { spaces } from '@/lib/data';
import SpaceCard from '@/components/spaces/space-card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

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

      <section ref={spacesRef} className="bg-card py-16">
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
    </>
  );
}
