import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { contactInquirySchema, type ContactInquiryInput } from "@/lib/contact-schema";
import { submitContactInquiry } from "@/lib/contact.functions";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Anjani Enterprises | Get in Touch for Textile Sourcing" },
      {
        name: "description",
        content:
          "Contact Mr. Himanshu Sharma at Anjani Enterprises for partnership, sampling, bulk production and custom textile sourcing from Jaipur, India.",
      },
      { property: "og:title", content: "Contact — Anjani Enterprises" },
      {
        property: "og:description",
        content:
          "Begin a conversation with Anjani Enterprises in Jaipur — for global and domestic brands ready to invest in the long view.",
      },
    ],
  }),
  component: ContactPage,
});

type FieldErrors = Partial<Record<keyof ContactInquiryInput, string>>;

function ContactPage() {
  const submit = useServerFn(submitContactInquiry);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const raw = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = contactInquirySchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactInquiryInput | undefined;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    try {
      const result = await submit({ data: parsed.data });
      if (result.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setFormError(result.error);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setFormError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow reveal">Contact</p>
          <h1 className="reveal mt-6 display-serif text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Begin a conversation.
          </h1>
        </div>
      </section>

      <section className="bg-background pb-20 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Details */}
          <aside className="md:col-span-4 space-y-10">
            <div className="reveal">
              <p className="eyebrow text-muted-foreground">Speak with</p>
              <p className="mt-3 font-serif text-2xl">Mr. Himanshu Sharma</p>
              <a
                href="tel:+918290477917"
                className="story-link mt-2 inline-block text-base text-foreground"
              >
                +91 82904 77917
              </a>
              <br />
              <a
                href="mailto:rakshikas40@gmail.com"
                className="story-link mt-1 inline-block text-base text-foreground"
              >
                rakshikas40@gmail.com
              </a>
            </div>

            <div className="rule-line reveal w-12" />

            <div className="reveal">
              <p className="eyebrow text-muted-foreground">Visit</p>
              <address className="not-italic mt-3 font-serif text-lg leading-relaxed">
                Anjani Enterprises
                <br />
                Barkat Nagar, Jaipur
                <br />
                Rajasthan, India
              </address>
            </div>

            <div className="reveal">
              <p className="eyebrow text-muted-foreground">Stitching unit</p>
              <p className="mt-3 font-serif text-base leading-relaxed text-muted-foreground">
                Sanganer, Jaipur
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="md:col-span-7 md:col-start-6 reveal">
            {status === "success" ? (
              <div className="border-t border-border pt-10">
                <p className="eyebrow text-muted-foreground">Received</p>
                <h2 className="mt-4 display-serif text-2xl md:text-3xl">
                  Thank you. We will be in touch shortly.
                </h2>
                <p className="mt-4 text-base text-muted-foreground max-w-md">
                  Your enquiry has reached us. Mr. Himanshu Sharma typically responds within two
                  working days.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="eyebrow story-link mt-8 inline-block"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                <Field
                  label="Name"
                  name="name"
                  required
                  error={errors.name}
                  autoComplete="name"
                />
                <Field
                  label="Company"
                  name="company"
                  error={errors.company}
                  autoComplete="organization"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    error={errors.email}
                    autoComplete="email"
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    error={errors.phone}
                    autoComplete="tel"
                  />
                </div>
                <Field
                  label="Message"
                  name="message"
                  textarea
                  required
                  error={errors.message}
                />

                {formError && (
                  <p className="text-sm text-destructive">{formError}</p>
                )}

                <div className="flex items-center gap-6 pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={cn(
                      "eyebrow story-link inline-block text-foreground transition-opacity",
                      status === "submitting" && "opacity-50 pointer-events-none"
                    )}
                  >
                    {status === "submitting" ? "Sending…" : "Send enquiry →"}
                  </button>
                  <span className="text-xs text-muted-foreground">
                    We typically respond within two working days.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  textarea?: boolean;
  error?: string;
}

function Field({ label, name, textarea, error, required, type = "text", ...rest }: FieldProps) {
  const id = `f-${name}`;
  const baseInput =
    "w-full bg-transparent border-0 border-b border-border px-0 py-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors";
  return (
    <div>
      <label htmlFor={id} className="eyebrow flex items-center justify-between">
        <span>
          {label}
          {!required && <span className="ml-2 normal-case tracking-normal text-[10px] text-muted-foreground/70">(optional)</span>}
        </span>
        {error && <span className="text-destructive normal-case tracking-normal text-[11px]">{error}</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={5}
          className={cn(baseInput, "resize-none mt-2")}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          className={cn(baseInput, "mt-2")}
          {...rest}
        />
      )}
    </div>
  );
}
