"use client";

import * as React from "react";
import { Search, Download, ExternalLink, Smartphone, User } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { RevealStagger, RevealItem } from "@/components/reveal";
import fallbackDevices from "@/lib/devices-fallback.json";

type Device = {
  CodeName: string;
  DeviceName: string;
  UserName: string;
  "Support Group"?: string;
  Pling?: string;
  Screenshots?: string;
};

const SOURCE =
  "https://raw.githubusercontent.com/ProjectBlaze/official_devices/12.1/post/device.json";

export function DownloadGrid() {
  const [devices, setDevices] = React.useState<Device[] | null>(null);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch(SOURCE, { cache: "no-store" });
        if (!res.ok) throw new Error("bad response");
        const data = (await res.json()) as Device[];
        if (active) setDevices(data);
      } catch {
        if (active) setDevices(fallbackDevices as Device[]);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const filtered = React.useMemo(() => {
    if (!devices) return null;
    const q = query.trim().toLowerCase();
    if (!q) return devices;
    return devices.filter(
      (d) =>
        d.DeviceName?.toLowerCase().includes(q) ||
        d.CodeName?.toLowerCase().includes(q) ||
        d.UserName?.toLowerCase().includes(q)
    );
  }, [devices, query]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 flex max-w-md items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 focus-within:border-primary/50">
        <Search className="size-4 shrink-0 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by device, codename or maintainer…"
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          aria-label="Search devices"
        />
        {devices && (
          <span className="shrink-0 text-xs text-muted-foreground">
            {filtered?.length ?? 0}
          </span>
        )}
      </div>

      {!devices ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <Skeleton className="mx-auto size-16 rounded-2xl" />
              <Skeleton className="mx-auto mt-4 h-5 w-2/3" />
              <Skeleton className="mx-auto mt-2 h-3 w-1/2" />
              <Skeleton className="mx-auto mt-2 h-3 w-3/4" />
              <Skeleton className="mt-5 h-9 w-full rounded-full" />
            </div>
          ))}
        </div>
      ) : filtered && filtered.length > 0 ? (
        <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((device) => (
            <RevealItem key={device.CodeName}>
              <DeviceCard device={device} />
            </RevealItem>
          ))}
        </RevealStagger>
      ) : (
        <p className="py-16 text-center text-muted-foreground">
          No devices match{" "}
          <span className="font-medium text-foreground">“{query}”</span>.
        </p>
      )}
    </div>
  );
}

function DeviceCard({ device }: { device: Device }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
      <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-[var(--flame)]/15 text-primary ring-1 ring-inset ring-primary/20">
        <Smartphone className="size-7" />
      </div>
      <h3 className="mt-4 font-heading text-lg font-bold uppercase tracking-wide text-primary">
        {device.CodeName}
      </h3>
      <p className="mt-1 text-sm font-medium">{device.DeviceName}</p>
      {device.UserName && (
        <a
          href={device["Support Group"] || "#"}
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-flex items-center justify-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          <User className="size-3" />@{device.UserName}
        </a>
      )}
      <div className="mt-5 flex flex-1 flex-col justify-end gap-2">
        <a
          href={device.Pling || "#"}
          target="_blank"
          rel="noreferrer"
          aria-disabled={!device.Pling}
          className={cn(
            buttonVariants(),
            "w-full rounded-full",
            !device.Pling && "pointer-events-none opacity-50"
          )}
        >
          <Download className="size-4" />
          Download
        </a>
        {device["Support Group"] && (
          <a
            href={device["Support Group"]}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            Support group <ExternalLink className="size-3" />
          </a>
        )}
      </div>
    </div>
  );
}
