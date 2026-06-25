import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Founders } from "@/components/sections/founders";
import { Forums } from "@/components/sections/forums";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the founders and community behind Project Blaze — Ram Pandey and Aditya Pratap Singh, plus the maintainers keeping builds alive.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="The people behind the blaze"
        description="A small, passionate team and a global community of maintainers building an open Android experience."
      />
      <Founders />
      <Forums />
      <CTA />
    </>
  );
}
