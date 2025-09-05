'use client';

import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export interface Filters {
  type: string;
  capacity: number[];
  price: number[];
}

interface FilterBarProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  maxCapacity: number;
  maxPrice: number;
}

export default function FilterBar({ filters, setFilters, maxCapacity, maxPrice }: FilterBarProps) {

  const handleTypeChange = (value: string) => {
    setFilters({ ...filters, type: value });
  };

  const handleCapacityChange = (value: number[]) => {
    setFilters({ ...filters, capacity: value });
  };
  
  const handlePriceChange = (value: number[]) => {
    setFilters({ ...filters, price: value });
  };

  const resetFilters = () => {
    setFilters({
        type: 'all',
        capacity: [1, maxCapacity],
        price: [0, maxPrice],
    });
  };

  const hasActiveFilters = filters.type !== 'all' || filters.capacity[0] !== 1 || filters.capacity[1] !== maxCapacity || filters.price[0] !== 0 || filters.price[1] !== maxPrice;

  return (
    <div className="bg-card p-4 rounded-lg shadow-sm border">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
        <div className="space-y-2">
          <Label htmlFor="type-filter">Space Type</Label>
          <Select value={filters.type} onValueChange={handleTypeChange}>
            <SelectTrigger id="type-filter" className="w-full">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="hot_desk">Hot Desk</SelectItem>
              <SelectItem value="private_office">Private Office</SelectItem>
              <SelectItem value="meeting_room">Meeting Room</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Capacity: {filters.capacity[0]} - {filters.capacity[1]}</Label>
          <Slider
            value={filters.capacity}
            onValueChange={handleCapacityChange}
            min={1}
            max={maxCapacity}
            step={1}
          />
        </div>
        <div className="space-y-2">
          <Label>Price/hr: ${filters.price[0]} - ${filters.price[1]}</Label>
          <Slider
            value={filters.price}
            onValueChange={handlePriceChange}
            min={0}
            max={maxPrice}
            step={5}
          />
        </div>
        {hasActiveFilters && (
            <div className="flex items-center justify-end">
                <Button variant="ghost" onClick={resetFilters}>
                    <X className="mr-2 h-4 w-4" />
                    Reset Filters
                </Button>
            </div>
        )}
      </div>
    </div>
  );
}
