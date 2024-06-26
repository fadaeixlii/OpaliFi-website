"use client";

import { Icon } from "@/components/ui/icon";
import Reveal from "@/components/ui/reveal";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
interface sponsorsProps {
  icon: string;
  name: string;
}
const sponsors: sponsorsProps[] = [
  {
    icon: "Crown",
    name: "OpaliWallet",
  },
  {
    icon: "Vegan",
    name: "OpaliConnect",
  },
  {
    icon: "Ghost",
    name: "OpaliKYC",
  },
  {
    icon: "Puzzle",
    name: "OpaliBot",
  },
  {
    icon: "Squirrel",
    name: "OpaliExchange",
  },
  {
    icon: "Cookie",
    name: "OpaliInvesting",
  },
  {
    icon: "Drama",
    name: "OpaliDeFi",
  },
  {
    icon: "Drama",
    name: "OpaliComunity",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <Reveal>
        <h2 className="text-lg md:text-xl text-center mb-6">Our Projects</h2>
      </Reveal>

      <div className="mx-auto">
        <Marquee className="gap-[3rem]" fade innerClassName="gap-[3rem]">
          {sponsors.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                color="white"
                className="mr-2"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
