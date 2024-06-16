import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import Reveal from "@/components/ui/reveal";
import { icons } from "lucide-react";
import Image from "next/image";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}
const featureList: FeaturesProps[] = [
  {
    icon: "/images/GridCheck.svg",
    title: "Integrated Trading Platform",
    description: "Opalifi provides a seamless trading experience.",
  },
  {
    icon: "/images/Wallet.svg",
    title: "Multi-Currency Wallet",
    description:
      "With Opalifi, you can manage multiple cryptocurrencies simultaneously.",
  },
  {
    icon: "/images/Goal.svg",
    title: "Integration with DeFi Applications",
    description:
      "Opalifi allows direct access to DeFi, CeFi services from your wallet.",
  },
  {
    icon: "/images/ShieldCheck.svg",
    title: "Advanced Security Technology",
    description:
      "Opalifi uses advanced security technologies to protect your assets.",
  },
  {
    icon: "/images/MousePointerClick.svg",
    title: "Simple and User-Friendly Interface",
    description:
      "Opalifi's interface is designed to be easy for even new users to navigate.",
  },
  {
    icon: "/images/Crown.svg",
    title: "Automated Asset Management",
    description:
      "Opalifi allows you to manage your assets automatically without having to move anywhere.",
  },
];
export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <Reveal>
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Features
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Why is{" "}
          <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
            OpaliFi
          </span>{" "}
          Different from Others?
        </h2>
      </Reveal>

      <Reveal>
        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
          In the competitive landscape of digital currencies, Opalifi stands out
          by offering unique features that enhance user experience and maximize
          benefits.
        </h3>
      </Reveal>
      <Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featureList.map(({ icon, title, description }) => (
            <div key={title}>
              <Card className="h-full bg-background border-0 shadow-none">
                <CardHeader className="flex justify-center items-center">
                  <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                    <Image
                      alt={icon}
                      src={icon}
                      width={24}
                      height={24}
                      className="size-6"
                    />
                  </div>

                  <CardTitle className="text-center text-lg">{title}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground text-center">
                  {description}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
