import ContactForm from '@/components/contact/contact-form';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-headline text-4xl font-bold">Contact Us</h1>
          <p className="text-muted-foreground mt-2">Have a question or need assistance? Fill out the form below and we'll get back to you shortly.</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
