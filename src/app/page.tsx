import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Variants } from "@/components/sections/variants";
import { Videos } from "@/components/sections/videos";
import { Testimonials } from "@/components/sections/testimonials";
import { Doubts } from "@/components/sections/doubts";
import { Founders } from "@/components/sections/founders";
import { Forums } from "@/components/sections/forums";
import { CTA } from "@/components/sections/cta";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Variants />
      <Videos />
      <Testimonials />
      <Doubts />
      <Founders />
      <Forums />
      <Separator className="mx-auto max-w-7xl" />
      <CTA />
    </>
  );
}
