'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { spaces } from '@/lib/data';
import SpaceCard from '@/components/spaces/space-card';
import FilterBar, { type Filters } from '@/components/spaces/filter-bar';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Home() {
  const searchParams = useSearchParams();
  const maxCapacity = Math.max(...spaces.map(s => s.capacity), 1);
  const maxPrice = Math.max(...spaces.map(s => s.pricing.hourly), 0);
  const filterRef = useRef<HTMLDivElement>(null);

  const [filters, setFilters] = useState<Filters>({
    type: searchParams.get('type') || 'all',
    capacity: [1, maxCapacity],
    price: [0, maxPrice],
  });

  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam && typeParam !== filters.type) {
      setFilters(prevFilters => ({ ...prevFilters, type: typeParam }));
    }
  }, [searchParams, filters.type]);


  const filteredSpaces = useMemo(() => {
    return spaces.filter(space => {
      const typeMatch = filters.type === 'all' || space.type === filters.type;
      const capacityMatch = space.capacity >= filters.capacity[0] && space.capacity <= filters.capacity[1];
      const priceMatch = space.pricing.hourly >= filters.price[0] && space.pricing.hourly <= filters.price[1];
      return typeMatch && capacityMatch && priceMatch;
    });
  }, [filters]);
  
  const handleScrollToFilters = () => {
    filterRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden mb-12 rounded-lg shadow-2xl">
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
          <Button size="lg" onClick={handleScrollToFilters}>
            Explore Spaces <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <div ref={filterRef}>
        <FilterBar filters={filters} setFilters={setFilters} maxCapacity={maxCapacity} maxPrice={maxPrice} />
      </div>

      {filteredSpaces.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredSpaces.map(space => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed rounded-lg mt-8">
            <h2 className="font-headline text-2xl font-semibold">No Spaces Found</h2>
            <p className="text-muted-foreground mt-2">Try adjusting your filters to find more options.</p>
        </div>
      )}
    </div>
  );
}
