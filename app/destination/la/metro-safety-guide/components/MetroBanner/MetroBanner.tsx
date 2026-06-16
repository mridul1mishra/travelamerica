import Hero from '../Hero/Hero';
import type { Hero as HeroType } from '../types-metroSafetyGuide';

interface MetroBannerProps {
  hero: HeroType;
}

export default function MetroBanner({ hero }: MetroBannerProps) {
  return (
    <section id="banner">
      <Hero {...hero} />
    </section>
  );
}
