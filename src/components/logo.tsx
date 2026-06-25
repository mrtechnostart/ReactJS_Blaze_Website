import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand.png"
      alt="Project Blaze"
      width={1152}
      height={524}
      priority
      className={cn("h-15 w-auto", className)}
    />
  );
}
