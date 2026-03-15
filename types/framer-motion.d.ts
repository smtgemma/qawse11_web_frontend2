/**
 * Augment framer-motion 11 so motion components accept common HTML attributes.
 * The library's HTMLAttributesWithoutMotionProps strips any key that exists on MotionProps,
 * so we add these to MotionProps to ensure they are accepted.
 */
import "framer-motion";
import type { CSSProperties, HTMLAttributes, MouseEventHandler } from "react";

declare module "framer-motion" {
  interface MotionProps {
    className?: string;
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLElement>;
    onMouseEnter?: MouseEventHandler<HTMLElement>;
    onMouseLeave?: MouseEventHandler<HTMLElement>;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    playsInline?: boolean;
  }
}
