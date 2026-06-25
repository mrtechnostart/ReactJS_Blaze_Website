import { Wifi, Signal, BatteryFull, Bluetooth, Moon, Plane, Flashlight, Cast } from "lucide-react";
import { cn } from "@/lib/utils";

const tiles = [
  { icon: Wifi, label: "Wi-Fi", active: true },
  { icon: Bluetooth, label: "Bluetooth", active: true },
  { icon: Moon, label: "DND", active: false },
  { icon: Plane, label: "Airplane", active: false },
  { icon: Flashlight, label: "Torch", active: false },
  { icon: Cast, label: "Cast", active: false },
];

export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-[260px] rounded-[2.6rem] border border-white/10 bg-neutral-900 p-2.5 shadow-2xl ring-1 ring-black/5 sm:w-[300px]",
        className
      )}
    >
      {/* screen */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-[oklch(0.22_0.03_256)] via-[oklch(0.18_0.03_265)] to-[oklch(0.16_0.04_30)]">
        {/* notch */}
        <div className="absolute left-1/2 top-2.5 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black/70" />

        {/* status bar */}
        <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-medium text-white/90">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <Signal className="size-3" />
            <Wifi className="size-3" />
            <BatteryFull className="size-3.5" />
          </div>
        </div>

        {/* clock widget */}
        <div className="px-5 pt-8">
          <div className="font-heading text-5xl font-bold leading-none text-white">
            9:41
          </div>
          <div className="mt-1 text-xs text-white/60">
            Thursday, June 26 · Blaze
          </div>
        </div>

        {/* quick settings */}
        <div className="mx-3 mt-6 rounded-2xl bg-white/5 p-3 backdrop-blur">
          <div className="grid grid-cols-3 gap-2.5">
            {tiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <div
                  key={tile.label}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div
                    className={cn(
                      "grid size-11 place-items-center rounded-full transition-colors",
                      tile.active
                        ? "bg-gradient-to-br from-primary to-[var(--flame)] text-white shadow-lg shadow-primary/30"
                        : "bg-white/10 text-white/70"
                    )}
                  >
                    <Icon className="size-[18px]" />
                  </div>
                  <span className="text-[8px] text-white/55">{tile.label}</span>
                </div>
              );
            })}
          </div>
          {/* brightness slider */}
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary to-[var(--flame)]" />
          </div>
        </div>

        {/* app dock */}
        <div className="mt-6 px-5 pb-7">
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-white/10"
                style={{
                  background:
                    i % 3 === 0
                      ? "linear-gradient(135deg, var(--primary), var(--flame))"
                      : undefined,
                }}
              />
            ))}
          </div>
          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  );
}
