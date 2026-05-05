import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { contactInquirySchema } from "@/lib/contact-schema";
import nodemailer from "nodemailer";

export const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactInquirySchema.parse(data))
  .handler(async ({ data }) => {
    // 1. Save to Supabase
    const { error: dbError } = await supabaseAdmin.from("contact_inquiries").insert({
      name: data.name,
      company: data.company ?? null,
      email: data.email,
      phone: data.phone ?? null,
      message: data.message,
    });

    if (dbError) {
      console.error("Failed to insert contact inquiry:", dbError);
      return { ok: false as const, error: "We couldn't save your message. Please try again." };
    }

    // 2. Send Email to rakshikas40@gmail.com
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, // e.g. rakshikas40@gmail.com
          pass: process.env.EMAIL_PASS, // App-specific password
        },
      });

      const mailOptions = {
        from: `"Anjani Website" <${process.env.EMAIL_USER}>`,
        to: "rakshikas40@gmail.com",
        subject: `New Inquiry from ${data.name} (${data.company || "No Company"})`,
        text: `
          Name: ${data.name}
          Company: ${data.company || "N/A"}
          Email: ${data.email}
          Phone: ${data.phone || "N/A"}
          
          Message:
          ${data.message}
        `,
        html: `
          <h3>New Website Inquiry</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Company:</strong> ${data.company || "N/A"}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <div style="border-left: 4px solid #ccc; padding-left: 10px; margin-top: 10px;">
            ${data.message.replace(/\n/g, "<br/>")}
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // We don't return error here because the data is already saved to DB
      // But we might want to log this or notify the admin
    }

    return { ok: true as const };
  });
