import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import Reveal from "@/components/ui/reveal";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}
const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Unmatched Security",
    description:
      "Opalifi provides the highest level of security for your digital assets. With advanced encryption technology and secure transactions, you can rest assured that your funds are always safe",
  },
  {
    icon: "LineChart",
    title: "Flexible Financial Management",
    description:
      "Effortlessly manage your finances in both centralized and decentralized environments without the need for immediate asset transfers. Opalifi allows you to place orders and trade directly from your wallet.",
  },
  {
    icon: "Wallet",
    title: "User-Friendly Interface",
    description:
      "Our intuitive design and user-friendly interface make managing your digital assets simple for everyone, whether you're an experienced trader or just starting out.",
  },
  {
    icon: "Sparkle",
    title: "Comprehensive Features",
    description:
      "From intelligent trading bots to investment opportunities in emerging projects, Opalifi offers a wide range of functionalities for all your financial needs.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Invest Seamlessly with{" "}
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                OpaliFi
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              With Opalifi, enjoy the full spectrum of web app features directly
              within your wallet:
            </p>
          </Reveal>
        </div>
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-4 w-full">
            {benefitList.map(({ icon, title, description }, index) => (
              <Card
                key={title}
                className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
              >
                <CardHeader>
                  <div className="flex justify-between">
                    <Icon
                      name={icon as keyof typeof icons}
                      size={32}
                      color="hsl(var(--primary))"
                      className="mb-6 text-primary"
                    />
                    <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                      0{index + 1}
                    </span>
                  </div>

                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground text-sm">
                  {description}
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
