import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Variants } from "@/components/sections/variants";
import { DownloadGrid } from "@/components/sections/download-grid";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Download Project Blaze for your device. 15+ officially supported devices with GApps and Vanilla builds.",
};

export default function DownloadPage() {
  return (
    <>
      <PageHeader
        eyebrow="Downloads"
        title="Find a build for your device"
        description="Project Blaze officially supports 15+ devices, each in GApps and Vanilla variants. Always read your device's support group before flashing."
      />
      <section className="py-16 sm:py-20">
        <DownloadGrid />
      </section>
      <Variants />
      <CTA />
    </>
  );
}
