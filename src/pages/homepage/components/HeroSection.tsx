import { HeroBackground } from "./hero/HeroBackground";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      <HeroBackground />
    </section>
  );
}
