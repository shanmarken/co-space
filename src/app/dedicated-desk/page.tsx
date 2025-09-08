import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const features = [
    "Reliable high-speed Wi-Fi",
    "Complimentary tea, coffee, and water",
    "Comfortable desks and chairs built for productivity",
    "A professional setting in the heart of Thalawathugoda, Colombo"
]

export default function DedicatedDeskPage() {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1600/900?random=25"
            alt="Dedicated desk area"
            fill
            className="object-cover"
            data-ai-hint="modern office"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center p-4">
          <h1 className="font-headline text-5xl md:text-7xl font-bold">
            Dedicated <span className="text-primary">Desk.</span>
          </h1>
          <p className="mt-4 text-lg">
            <Link href="/" className="hover:underline">Home</Link> / <span>Dedicated Desk</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className='mb-12'>
                <h2 className="font-headline text-3xl font-bold mb-4">
                Your Personal Workspace, Always Reserved
                </h2>
                <p className="text-muted-foreground mb-4">
                Enjoy the stability of a workspace that’s exclusively yours. Our Dedicated Desks are perfect for professionals who want the flexibility of coworking with the consistency of having a personal desk to return to every day.
                </p>
                <p className="text-muted-foreground">
                Designed for individuals who need focus, structure, and a professional environment, this option gives you a permanent spot within our coworking space — complete with high-speed internet, ergonomic seating, and access to premium amenities.
                </p>
            </div>
            
            <div className="mb-12">
                <h3 className="font-headline text-2xl font-bold mb-6">Features & Amenities</h3>
                <ul className="space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span className="text-muted-foreground">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-12">
                <p className="text-muted-foreground mb-6">
                Our dedicated desks are ideally suited for solo professionals who value a dynamic, community-driven environment. Choose from flexible access options, including day passes, monthly subscriptions, and tailored flex packages to suit your business needs.
                </p>
                <Button size="lg">
                    Get Quote
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
