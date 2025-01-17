import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { SfButton } from '@storefront-ui/react';
import Link from "next/link.js";

export default function Hero() {
  return (
    <div className="relative min-h-[576px]">
      <picture>
        <source srcSet="https://images.ctfassets.net/xct4vv2g1nhc/2rNBQOABZ0iYMjZdYQ2gdx/4c785ca2dd2ff92deb03ffeddc88b54f/blatant-team-store.png?w=3840&q=75&fm=webp"  />
        <img
          src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-bg-mobile.png"
          className="absolute w-full h-full z-[-1] object-cover"
        />
      </picture>
        <div className="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
          <p className="typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase">
            Feel the music
          </p>
          <h1 className="typography-display-2 md:typography-display-1 md:leading-[67.5px] font-bold mt-2 mb-4">
            New Wireless Pro
          </h1>
          <p className="typography-text-base md:typography-text-lg">
            Spatial audio. Adjustable ear cups. On-device controls. All-day battery.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <SfButton size="lg"> Acheter </SfButton>
            <Link href={"http://localhost:8000/fr/store"}>
            <SfButton size="lg" className="bg-white" variant="secondary">
              Voir plus
            </SfButton>
            </Link>
          </div>
        </div>
      </div>
  );
}