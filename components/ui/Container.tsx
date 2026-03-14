import { ReactNode, CSSProperties } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Container({
  children,
  className = "",
  style,
}: ContainerProps) {
  return (
    <div
      className={`max-w-[1150px] w-[95%] mx-auto ${className}`}
      style={style}>
      {children}
    </div>
  );
}
