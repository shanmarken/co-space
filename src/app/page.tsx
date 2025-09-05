'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { spaces } from '@/lib/data';
import SpaceCard from '@/components/spaces/space-card';
import FilterBar, { type Filters } from '@/components/spaces/filter-bar';

export default function Home() {
  const searchParams = useSearchParams();
  const maxCapacity = Math.max(...spaces.map(s => s.capacity), 1);
  const maxPrice = Math.max(...spaces.map(s => s.pricing.hourly), 0);

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

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">Find Your Perfect Workspace</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover and book unique co-working spaces and meeting rooms on-demand. No subscriptions, no hassles.
        </p>
      </section>

      <FilterBar filters={filters} setFilters={setFilters} maxCapacity={maxCapacity} maxPrice={maxPrice} />

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
