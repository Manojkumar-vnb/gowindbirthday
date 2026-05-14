import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { MapPin, Calendar, Clock, Heart, Sparkles } from "lucide-react";
import babyHero from "../assets/baby-hero.jpeg";
import familyPhoto from "../assets/family-photo.jpeg";

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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Mobile-safe audio start
    const startAudio = async () => {
      try {
        audio.muted = false;
        await audio.play();

        // remove listeners after successful play
        document.removeEventListener("click", startAudio);
        document.removeEventListener("touchstart", startAudio);
        document.removeEventListener("pointerdown", startAudio);
      } catch (err) {
        console.log("Audio play blocked:", err);
      }
    };

    // try autoplay first
    startAudio();

    // fallback for mobile interaction
    document.addEventListener("click", startAudio);
    document.addEventListener("touchstart", startAudio);
    document.addEventListener("pointerdown", startAudio);

    return () => {
      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
      document.removeEventListener("pointerdown", startAudio);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/cuppycake.mp3"
        loop
        preload="auto"
        playsInline
        autoPlay
      />

      <main className="relative min-h-screen overflow-hidden px-4 py-10 sm:py-16">
        {/* decorative sparkles */}
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
