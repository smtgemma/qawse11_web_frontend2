"use client";

import Container from "./Container";
import IconCard from "./IconCard";
import React from "react";

interface CardData {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

interface IconCardSectionProps {
  cards: CardData[];
  className?: string;
}

const IconCardSection: React.FC<IconCardSectionProps> = ({
  cards,
  className = "",
}) => {
  return (
    <Container
      className={` ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full lg:py-[50px] py-[20px]">
        {cards.map((card, index) => (
          <IconCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default IconCardSection;

