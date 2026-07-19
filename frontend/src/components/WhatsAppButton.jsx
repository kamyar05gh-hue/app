import { WHATSAPP_URL } from "@/lib/constants";

/**
 * MessageCircle-style WhatsApp glyph.
 */
export const WhatsAppIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden>
    <path d="M16.003 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.35.62 4.647 1.795 6.673L2.667 29.333l6.83-1.775A13.31 13.31 0 0 0 16.003 29.333C23.368 29.333 29.333 23.362 29.333 16S23.368 2.667 16.003 2.667Zm0 24.4a11.06 11.06 0 0 1-5.632-1.53l-.404-.24-4.052 1.054 1.08-3.938-.263-.407A11.05 11.05 0 1 1 27.067 16c0 6.11-4.958 11.067-11.064 11.067Zm6.086-8.284c-.333-.166-1.972-.973-2.277-1.084-.306-.11-.528-.166-.75.167-.222.334-.86 1.084-1.054 1.306-.194.222-.389.25-.722.083-.333-.166-1.406-.518-2.678-1.652-.99-.883-1.658-1.973-1.853-2.307-.194-.334-.02-.514.146-.68.15-.15.333-.389.5-.583.166-.194.222-.334.333-.556.111-.222.055-.417-.028-.583-.083-.167-.75-1.808-1.028-2.475-.27-.65-.545-.561-.75-.572l-.639-.011c-.222 0-.583.083-.888.417-.306.334-1.167 1.14-1.167 2.782 0 1.643 1.195 3.23 1.361 3.452.166.222 2.35 3.588 5.694 5.031.796.344 1.417.549 1.9.703.798.253 1.523.217 2.097.132.64-.095 1.972-.806 2.25-1.583.278-.778.278-1.444.194-1.583-.083-.14-.306-.222-.639-.389Z"/>
  </svg>
);

/**
 * WhatsApp CTA button — primary conversion element.
 */
export const WhatsAppButton = ({
  size = "md",
  label = "Jetzt auf WhatsApp schreiben",
  testId = "whatsapp-cta",
  variant = "green",
  className = "",
}) => {
  const sizes = {
    sm: "px-4 py-2.5 text-[13px] gap-2",
    md: "px-6 py-3.5 text-[14px] gap-2.5",
    lg: "px-8 py-5 text-[16px] gap-3",
  };
  const bg =
    variant === "green"
      ? "bg-[#25D366] hover:bg-[#1EB955] text-white shadow-[0_16px_40px_-12px_rgba(37,211,102,0.55)]"
      : "bg-black text-white";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={testId}
      className={`pm-btn group inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-colors duration-300 ${bg} ${sizes[size]} ${className}`}
    >
      <span>{label}</span>
      <span className="grid place-items-center h-7 w-7 rounded-full bg-white/20">
        <WhatsAppIcon className="h-3.5 w-3.5" />
      </span>
    </a>
  );
};

export default WhatsAppButton;
