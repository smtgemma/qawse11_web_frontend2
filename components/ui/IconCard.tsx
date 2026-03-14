"use client";

import { motion, Variants } from "framer-motion";

interface IconCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  className?: string;
}

const IconCard: React.FC<IconCardProps> = ({
  icon: Icon,
  title,
  description,
  className = "",
}) => {
  // Animation variants consistent with home page components
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className={`flex flex-col gap-4 md:gap-5 lg:gap-6 rounded-[16px] md:rounded-[20px] p-6 md:p-8 lg:p-14 border border-[#6C03FF] bg-[#FFFFFF1A] ${className}`}>
      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-[12px] md:rounded-[14px] bg-[linear-gradient(90deg,#6C03FF_0%,#9A3DFF_100%)] shrink-0">
        <Icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 md:gap-4">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white/90">
          {title}
        </h3>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed text-white/90 text-left">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default IconCard;
