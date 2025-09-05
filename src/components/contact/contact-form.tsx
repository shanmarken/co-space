'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitInquiry } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('subject', values.subject);
    formData.append('message', values.message);

    startTransition(async () => {
      const result = await submitInquiry(null, formData);
      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.message || 'An error occurred.',
        });
      }
    });
  };

  return (
    <Card className="border shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4 pt-6">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}/>
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}/>
            <FormField control={form.control} name="subject" render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl><Input placeholder="Booking Question" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}/>
            <FormField control={form.control} name="message" render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl><Textarea placeholder="Your message here..." rows={5} {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}/>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              Send Message
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
