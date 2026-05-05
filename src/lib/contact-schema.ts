import { z } from "zod";

export const contactInquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Please share your name." })
    .max(120, { message: "Name must be 120 characters or fewer." }),
  company: z
    .string()
    .trim()
    .max(160, { message: "Company name must be 160 characters or fewer." })
    .optional()
    .or(z.literal("").transform(() => undefined)),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email must be 255 characters or fewer." }),
  phone: z
    .string()
    .trim()
    .max(40, { message: "Phone must be 40 characters or fewer." })
    .optional()
    .or(z.literal("").transform(() => undefined)),
  message: z
    .string()
    .trim()
    .min(1, { message: "Please include a brief message." })
    .max(2000, { message: "Message must be 2000 characters or fewer." }),
});

export type ContactInquiryInput = z.infer<typeof contactInquirySchema>;
