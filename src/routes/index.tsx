import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useRef, useState } from "react";
import { MapPin, Calendar, Clock, Heart, Sparkles } from "lucide-react";
import babyHero from "@/assets/baby-hero.jpeg";
import familyPhoto from "@/assets/family-photo.jpeg";

export const Route = createFileRoute("/")({
  component: Invitation,
  head: () => ({
    meta: [
      { title: "Krithish Gowind • One-derful First Birthday" },
      { name: "description", content: "Join us for the first birthday celebration of Krithish Gowind on Friday, 29th May 2026 at Rotary Club Hall, Ambur." },
    ],
  }),
});

const MAPS_URL = "https://maps.app.goo.gl/dYeGFZW2kRihqQK59?g_st=aw";

function Invitation() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [opened, setOpened] = useState(false);
  const [doorsGone, setDoorsGone] = useState(false);

  const handleOpen = useCallback(() => {
    if (opened) return;

    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.play().catch(() => {});
    }

    setOpened(true);
    // Remove doors from DOM after the swing animation completes
    setTimeout(() => setDoorsGone(true), 2200);
  }, [opened]);

  return (
    <>
      <audio ref={audioRef} src="/cuppycake.mp3" loop preload="auto" playsInline />

      {/* ── Door Splash ── */}
      {!doorsGone && (
        <div
          className={`door-overlay ${opened ? "door-overlay--open" : ""}`}
          style={{ touchAction: "manipulation" }}
        >
          {/* Left door */}
          <div className="door door--left">
            <div className="door-panel">
              {/* Decorative frame */}
              <div className="door-frame">
                <div className="door-inner-frame">
                  {/* Top ornamental detail */}
                  <div className="door-ornament door-ornament--top">
                    <Sparkles className="door-ornament-icon" />
                  </div>
                  {/* Bottom ornamental detail */}
                  <div className="door-ornament door-ornament--bottom">
                    <Heart className="door-ornament-icon door-ornament-icon--sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right door */}
          <div className="door door--right">
            <div className="door-panel">
              <div className="door-frame">
                <div className="door-inner-frame">
                  <div className="door-ornament door-ornament--top">
                    <Sparkles className="door-ornament-icon" />
                  </div>
                  <div className="door-ornament door-ornament--bottom">
                    <Heart className="door-ornament-icon door-ornament-icon--sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center seam — door handles + text */}
          {!opened && (
            <div className="door-center">
              {/* Door handles */}
              <button
                type="button"
                className="door-handles"
                onClick={handleOpen}
                onTouchEnd={(e) => { e.preventDefault(); handleOpen(); }}
              >
                <div className="door-handle door-handle--left" />
                <div className="door-handle door-handle--right" />
              </button>

              <p className="door-label font-display">Open the Door</p>
            </div>
          )}
        </div>
      )}

      {/* ── Main Invitation ── */}
      <main className="relative min-h-screen overflow-hidden px-4 py-10 sm:py-16">
        <Sparkles className="absolute top-10 left-8 h-6 w-6 text-accent animate-shimmer" />
        <Sparkles className="absolute top-32 right-12 h-8 w-8 text-accent animate-shimmer" style={{ animationDelay: "1s" }} />
        <Sparkles className="absolute bottom-20 left-16 h-5 w-5 text-accent animate-shimmer" style={{ animationDelay: "2s" }} />
        <Sparkles className="absolute bottom-40 right-8 h-7 w-7 text-accent animate-shimmer" style={{ animationDelay: "0.5s" }} />

        <article className="relative mx-auto max-w-2xl">
          <div
            className="relative rounded-[2rem] bg-card/80 backdrop-blur-sm px-6 py-12 sm:px-12 sm:py-16 text-center"
            style={{ boxShadow: "var(--shadow-soft)", border: "1px solid var(--accent)" }}
          >
            <div className="pointer-events-none absolute inset-4 rounded-[1.6rem] border border-accent/40" />

            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium tracking-[0.3em] text-foreground/70 uppercase">
              <Sparkles className="h-3 w-3" />
              One-derful Milestone
              <Sparkles className="h-3 w-3" />
            </div>

            <div className="mt-6 flex justify-center">
              <div
                className="relative h-56 w-56 sm:h-72 sm:w-72 rounded-full overflow-hidden animate-float"
                style={{ boxShadow: "var(--shadow-soft)", border: "4px solid var(--accent)" }}
              >
                <img src={babyHero} alt="Krithish Gowind" className="h-full w-full object-cover" />
              </div>
            </div>

            <p className="mt-6 font-display text-lg sm:text-xl italic text-muted-foreground">
              We are overjoyed to invite you to the
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground/80 mt-1">
              First Birthday Celebration
            </h2>
            <p className="font-display text-base text-muted-foreground mt-2">of our beloved son</p>

            <h1
              className="font-script text-6xl sm:text-7xl md:text-8xl my-4 leading-tight"
              style={{
                background: "var(--gradient-gold)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Krithish Gowind
            </h1>

            <div className="mx-auto flex items-center justify-center gap-3 my-6">
              <span className="h-px w-16 bg-accent" />
              <Heart className="h-4 w-4 fill-primary text-primary" />
              <span className="h-px w-16 bg-accent" />
            </div>

            <p className="font-display italic text-base sm:text-lg text-foreground/70 max-w-md mx-auto">
              Join us as we celebrate a year of love, laughter, and tiny footsteps!
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3 text-left">
              <DetailCard icon={<Calendar className="h-5 w-5" />} label="Date" value="Friday" sub="29th May 2026" />
              <DetailCard icon={<Clock className="h-5 w-5" />} label="Time" value="12:00 PM" sub="Onwards" />
              <DetailCard icon={<MapPin className="h-5 w-5" />} label="Venue" value="Rotary Club Hall" sub="Ambur" />
            </div>

            <div className="mt-8 rounded-2xl bg-secondary/60 px-6 py-5">
              <p className="font-display text-xl text-foreground">Rotary Club Hall</p>
              <p className="text-sm text-muted-foreground mt-1">(Backside to Sai Sakthi Theatre)</p>
              <p className="text-sm text-muted-foreground">Chennai to Bangalore Highways, Ambur</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 active:scale-95"
                style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-soft)" }}
              >
                <MapPin className="h-4 w-4" />
                View Location on Google Maps
              </a>
            </div>

            <div className="mt-10">
              <p className="font-display italic text-muted-foreground">With love,</p>
              <p
                className="font-script text-4xl sm:text-5xl mt-2"
                style={{
                  background: "var(--gradient-gold)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Gowtham &amp; Indu
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <figure className="w-full max-w-sm">
                <div
                  className="relative aspect-[3/4] overflow-hidden rounded-3xl"
                  style={{ boxShadow: "var(--shadow-soft)", border: "4px solid var(--accent)" }}
                >
                  <img src={familyPhoto} alt="Family" className="h-full w-full object-cover" />
                </div>
                <figcaption className="mt-3 font-display italic text-sm text-muted-foreground">
                  Our little family
                </figcaption>
              </figure>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

function DetailCard({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl bg-secondary/50 p-4 text-center">
      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-card text-primary">
        {icon}
      </div>
      <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{label}</p>
      <p className="font-display text-lg text-foreground mt-1">{value}</p>
      <p className="text-xs text-muted-foreground">{sub}</p>
    </div>
  );
}
