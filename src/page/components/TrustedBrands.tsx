import { Marquee } from "@/components/magicui/marquee";
import React from "react";

const TrustedBrands: React.FC = () => {
  const baseLogos = [
    "https://pngimg.com/uploads/google/google_PNG19630.png",
    "https://img.icons8.com/?size=100&id=c5D8jg35Dbgv&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=FwtC1Q1PsB69&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=mBkyWceUPlkM&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=X-hVi3gUJDZv&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=FicJLJzRzXo2&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=20991&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=IHPMSJbkO28r&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=XueAkBKCgJGP&format=png&color=000000",
  ];

  function repeatToFill<T>(items: T[], minItems: number): T[] {
    const repeated: T[] = [];
    while (repeated.length < minItems) {
      repeated.push(...items);
    }
    return repeated.slice(0, minItems);
  }
  const logos = repeatToFill(baseLogos, 20);

  return (
    <section className="py-16 bg-[#0a0613]">
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-gray-400">
            Trusted By Brands
          </h2>
        </div>
        <Marquee className="text-white gap-x-12">
          {logos.map((item, i) => (
            <img
              key={i}
              className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
              src={item}
              alt={`brand-${i}`}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TrustedBrands;
