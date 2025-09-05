import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Briefcase, Lightbulb, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">About SpaceBooker</h1>
        <p className="text-lg text-muted-foreground">
          We are revolutionizing the way professionals find and book workspaces. Our mission is to provide flexible, on-demand spaces that inspire productivity and foster collaboration.
        </p>
      </section>

      <section className="relative h-80 rounded-lg overflow-hidden shadow-2xl mb-16">
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
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16 text-center">
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
      </section>

      <section className="bg-card p-8 rounded-lg shadow-lg border">
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
      </section>
    </div>
  );
}
