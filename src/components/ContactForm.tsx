import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      setIsSubmitting(true);
      // await apiRequest("POST", "/api/contact", values);
      console.log("values : ", values);
      toast({
        title: "Message sent successfully!",
        description: "We will contact you soon.",
        variant: "default",
      });

      form.reset();
    } catch {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#0F172A] font-medium">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your first name"
                    className="px-4 py-3 border border-[#94A3B8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#0F172A] font-medium">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your last name"
                    className="px-4 py-3 border border-[#94A3B8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-sm" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#0F172A] font-medium">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="px-4 py-3 border border-[#94A3B8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#0F172A] font-medium">
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="px-4 py-3 border border-[#94A3B8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#0F172A] font-medium">
                Service Interested In
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="px-4 py-3 border border-[#94A3B8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="construction">
                    Construction Services
                  </SelectItem>
                  <SelectItem value="media">Media Services</SelectItem>
                  <SelectItem value="solar">
                    Solar Technology Services
                  </SelectItem>
                  <SelectItem value="integrated">
                    Multi-Division Project
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#0F172A] font-medium">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Tell us about your project"
                  className="px-4 py-3 border border-[#94A3B8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-sm" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-[#0F172A] px-6 py-3 font-medium text-white transition-colors hover:bg-[#1E293B]"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
