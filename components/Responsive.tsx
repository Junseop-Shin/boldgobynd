import { useIsMobile } from "../hooks/useIsMobile";

interface Props {
  children: React.ReactNode;
  only: "mobile" | "desktop";
}

export function Responsive({ children, only }: Props) {
  const isMobile = useIsMobile();
  if (isMobile === null) return null;
  if (only === "mobile" && !isMobile) return null;
  if (only === "desktop" && isMobile) return null;
  return <>{children}</>;
}
