import Image from 'next/image';
import Link from 'next/link';

export default function HuddlePodsPage() {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1600/900?random=22"
            alt="Huddle pods"
            fill
            className="object-cover"
            data-ai-hint="blurry office"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center p-4">
          <h1 className="font-headline text-5xl md:text-7xl font-bold">
            Huddle <span className="text-green-400">Pods.</span>
          </h1>
          <p className="mt-4 text-lg">
            <Link href="/" className="hover:underline">Home</Link> / <span>Huddle Pods</span>
          </p>
        </div>
      </section>
       <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="font-headline text-3xl font-bold mb-4">Content coming soon</h2>
            <p className="text-muted-foreground">This page is under construction. Check back later for more details about our huddle pods.</p>
        </div>
      </section>
    </div>
  );
}
