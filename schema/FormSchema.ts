import * as z from "zod";

export const EnquiryFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  location: z.string().min(3, "Proper address is required"),

  contact: z.string().regex(/^[0-9]{10}$/, "Contact must be a 10 digit number"),

  pickupDate: z.string().min(1, "required"),

  dropoffDate: z.string().min(1, "required"),
});

export type EnquiryFormValues = z.infer<typeof EnquiryFormSchema>;
