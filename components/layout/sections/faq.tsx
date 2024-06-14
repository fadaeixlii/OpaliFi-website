import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "1. What is OpaliFi and what services does it offer?",
    answer: "Yes. It is a free NextJS Shadcn template.",
    value: "item-1",
  },
  {
    question: "2. What is the unique feature of the OpaliFi Mega Wallet?",
    answer: `The OpaliFi Mega Wallet allows users to manage and trade their assets without the need to move them between different wallets. You can keep your assets within the wallet and conduct transactions directly from there. This feature enhances security for users and simplifies the trading process by only transferring assets when transactions are fully matched.`,
    value: "item-3",
  },
  {
    question: `3. How does OpaliFi ensure the security of users' assets?`,
    answer:
      "OpaliFi employs advanced security protocols such as strong encryption and multi-factor authentication to safeguard users' assets. Additionally, transactions are only executed when orders are fully matched, providing an extra layer of security by reducing the risks associated with premature asset transfers.",
    value: "item-4",
  },
  {
    question: `4. How is OpaliFi integrated with DeFi and CeFi applications?`,
    answer: `OpaliFi integrates with various DeFi and CeFi applications, allowing users to directly access services such as liquidity pools, investment opportunities, and centralized financial facilities from their wallet. This integration eliminates the need to transfer assets to other platforms, making it convenient and efficient to use.`,
    value: "item-5",
  },
  {
    question: `5. How can I contact OpaliFi’s support team?`,
    answer: `You can reach out to OpaliFi’s support team through email or the contact form available on the OpaliFi website. Additionally, you can join our Telegram group to ask questions directly and interact with the community. The Telegram group link is provided in various sections of the site.`,
    value: "item-6",
  },
  {
    question: `6. Does OpaliFi offer services for businesses?`,
    answer: `Yes, OpaliFi offers advanced financial services for businesses as well as individual users. These services include managing digital assets, accessing investment opportunities, and using smart trading bots to optimize financial processes. This ensures businesses can effectively manage their finances and leverage investment strategies with ease.`,
    value: "item-7",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
