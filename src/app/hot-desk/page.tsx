import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const features = [
    "High-speed Wi-Fi",
    "Complimentary water, coffee, and tea",
    "Ergonomic desks and chairs",
    "A professional setting located in Havelock City, Colombo, Sri Lanka",
    "Monitors available at hot desks (upon request)"
]

const images = [
    "https://picsum.photos/800/600?random=15",
    "https://picsum.photos/800/600?random=16",
    "https://picsum.photos/800/600?random=17"
]

export default function HotDeskPage() {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1600/900?random=14"
            alt="Hot desk area"
            fill
            className="object-cover"
            data-ai-hint="blurry office"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center p-4">
          <h1 className="font-headline text-5xl md:text-7xl font-bold">
            Hot <span className="text-green-400">Desk.</span>
          </h1>
          <p className="mt-4 text-lg">
            <Link href="/" className="hover:underline">Home</Link> / <span>Hot Desk</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className='mb-12'>
                <h2 className="font-headline text-3xl font-bold mb-4">
                Perfect Spaces for Productive Meetings Flexible, Modern Workspaces for Digital Nomads and Solo Professionals
                </h2>
                <p className="text-muted-foreground mb-4">
                Experience ultimate flexibility with hot desks at CO-LABS. Ideal for freelancers, digital nomads, and remote professionals, our hot desks offer plug-and-play convenience, high-speed internet, ergonomic seating, and access to premium amenities.
                </p>
                <p className="text-muted-foreground">
                Whether you need a few hours or a full day of focused work, our vibrant coworking environment in Colombo, Sri Lanka empowers your productivity and fosters valuable networking opportunities.
                </p>
            </div>
            
            <div className="mb-12">
                <h3 className="font-headline text-2xl font-bold mb-6">Features and Amenities:</h3>
                <ul className="space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span className="text-muted-foreground">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-12">
                <p className="text-muted-foreground mb-6">
                Our hot desks are ideally suited for solo professionals who value a dynamic, community-driven environment. Choose from flexible access options, including day passes, monthly subscriptions, and tailored flex packages to suit your business needs.
                </p>
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black">
                    Get Quote
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                        <Image 
                            src={src}
                            alt={`Hot desk space ${index + 1}`}
                            fill
                            className="object-cover"
                            data-ai-hint="modern office"
                        />
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
