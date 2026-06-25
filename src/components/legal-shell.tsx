import { PageHeader } from "@/components/page-header";

export function LegalShell({
  title,
  description,
  updated = "June 2026",
  children,
}: {
  title: string;
  description?: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} description={description} />
      <section className="py-16 sm:py-20">
        <div
          className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8
            [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4
            [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight
            [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-semibold
            [&_li]:my-1.5 [&_p]:my-4 [&_p]:leading-relaxed [&_p]:text-muted-foreground
            [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 [&_ul]:text-muted-foreground"
        >
          <p className="!mt-0 text-sm font-medium text-foreground/70">
            Last updated: {updated}
          </p>
          {children}
        </div>
      </section>
    </>
  );
}
