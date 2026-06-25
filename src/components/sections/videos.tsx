"use client";

import * as React from "react";
import { Play, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { RevealStagger, RevealItem } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { videos, type Video } from "@/lib/site-config";

export function Videos() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="On YouTube"
          title="See Blaze in action"
          description="Independent reviews and hands-on walkthroughs from the Android community across multiple devices and versions."
        />

        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <RevealItem
              key={video.id}
              className={video.featured ? "sm:col-span-2 lg:col-span-3" : ""}
            >
              <VideoCard video={video} featured={video.featured} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function VideoCard({
  video,
  featured,
}: {
  video: Video;
  featured?: boolean;
}) {
  const [playing, setPlaying] = React.useState(false);

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-2xl border bg-card",
        featured
          ? "border-primary/40 shadow-xl shadow-primary/10 sm:grid sm:grid-cols-2 sm:items-stretch"
          : "border-border"
      )}
    >
      <div
        className={cn(
          "relative aspect-video w-full bg-muted",
          featured && "sm:h-full"
        )}
      >
        {playing ? (
          <iframe
            className="absolute inset-0 size-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 size-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              loading="lazy"
              className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" />
            <span className="absolute inset-0 m-auto grid size-16 place-items-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Play className="size-7 translate-x-0.5 fill-current" />
            </span>
          </button>
        )}
      </div>
      <div className={cn("p-4", featured && "flex flex-col justify-center sm:p-8")}>
        {featured && (
          <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="size-3.5" />
            Project announcement
          </span>
        )}
        <h3
          className={cn(
            "font-semibold leading-snug",
            featured
              ? "font-heading text-xl sm:text-2xl"
              : "line-clamp-2 text-sm"
          )}
        >
          {video.title}
        </h3>
        <p
          className={cn(
            "text-muted-foreground",
            featured ? "mt-3 text-sm" : "mt-1.5 text-xs"
          )}
        >
          {featured
            ? "Watch Ram Pandey introduce Project Blaze — the vision, the goals and what makes Blaze different."
            : video.channel}
        </p>
        {featured && (
          <p className="mt-1 text-xs font-medium text-primary">
            {video.channel}
          </p>
        )}
      </div>
    </div>
  );
}
