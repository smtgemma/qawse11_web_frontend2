"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface TitleSectionProps {
  smallText: string;
  heading: string;
  iconWidth: string;
  iconViewBox?: string;
  description: string;
  position?: "left" | "center" | "right";
}

const TitleSection: React.FC<TitleSectionProps> = ({
  smallText,
  heading,
  description,
  iconWidth,
  iconViewBox,
  position = "left",
}) => {
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const positionClass =
    position === "center"
      ? "items-center text-center"
      : position === "right"
      ? "items-end text-right"
      : "items-start text-left";

  const computedViewBox = iconViewBox || `0 0 ${iconWidth} 13`; // height fixed at 13

  return (
    <motion.div
      className={`space-y-6 flex flex-col ${positionClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={titleVariants}>
      <div className="flex flex-col">
        <p className="text-lg">{smallText}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconWidth}
          height="13"
          viewBox={computedViewBox}
          fill="none">
          <path
            d="M84.3952 1.42943C100.556 1.20471 111.178 0.795807 116.528 0.217955C119.589 -0.116833 121.63 -0.0603571 121.895 0.348955C122.047 0.590873 122.028 0.739583 121.877 0.888632C121.423 1.33578 114.732 2.15519 108.589 2.52781C102.616 2.88324 100.443 2.93997 83.6391 3.12571C74.34 3.21973 64.4348 3.34902 61.6375 3.42354L56.5348 3.53551L57.1955 4.07742C58.2167 4.93388 60.1452 6.03232 64.5104 8.23137C66.7599 9.35038 68.6686 10.4119 68.7639 10.5804C69.0664 11.0643 68.7639 11.8471 68.2347 11.9766C67.9695 12.0328 66.3063 11.9953 64.5104 11.8658C60.7686 11.6032 55.06 11.715 21.1886 12.7022C16.0104 12.8512 9.11076 12.9817 5.87843 13H0L7.86389 11.9576C7.86389 11.9576 48.5954 9.85238 60.3906 9.81569L62.7529 9.79553L60.2964 8.54711C58.9541 7.85804 57.4607 7.05711 56.9885 6.75901C55.4194 5.7707 53.2269 3.94364 53.0187 3.44146C52.5651 2.4176 53.2839 1.7097 54.5878 1.93327C54.9274 1.98831 58.8785 1.93255 63.3391 1.82019C67.7997 1.70783 77.2687 1.5223 84.3952 1.42943Z"
            fill="#9A3DFF"
          />
        </svg>
      </div>

      <h1 className="text-[40px] sm:text-3xl font-semibold capitalize leading-[50px] sm:leading-10">
        {heading}
      </h1>
      <p className="text-lg sm:text-base capitalize leading-[22.5px] sm:leading-5">
        {description}
      </p>
    </motion.div>
  );
};

export default TitleSection;
