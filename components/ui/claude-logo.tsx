"use client";

import { cn } from "@/lib/utils";

interface ClaudeLogoIconProps {
  className?: string;
  size?: number;
}

/** Official Claude AI symbol. Used across the site for branding. */
export function ClaudeSparkle({ className, size = 20 }: ClaudeLogoIconProps) {
  return (
    <img
      src="/claude-ai-symbol.svg"
      alt=""
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      aria-hidden
    />
  );
}
