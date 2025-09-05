import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand & Description */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-headline font-bold text-white mb-2 inline-block">
              SpaceBooker
            </Link>
            <p className="text-sm">
              Discover and book unique co-working spaces and meeting rooms on-demand.
            </p>
          </div>

          {/* Column 2: Workspaces */}
          <div>
            <h3 className="font-headline text-lg font-semibold text-white mb-4">Workspaces</h3>
            <ul className="space-y-2">
              <li><Link href="/?type=hot_desk" className="hover:text-white transition-colors">Hot Desks</Link></li>
              <li><Link href="/?type=private_office" className="hover:text-white transition-colors">Private Offices</Link></li>
              <li><Link href="/?type=meeting_room" className="hover:text-white transition-colors">Meeting Rooms</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-headline text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="font-headline text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Instagram className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Linkedin className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} SpaceBooker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
