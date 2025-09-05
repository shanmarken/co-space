import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-card shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-headline font-bold text-primary">
          SpaceBooker
        </Link>
        <nav className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <Button variant="link" asChild className="justify-start text-lg">
                  <Link href="/">Home</Link>
                </Button>
                <Button variant="link" asChild className="justify-start text-lg">
                  <Link href="/contact">Contact</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
