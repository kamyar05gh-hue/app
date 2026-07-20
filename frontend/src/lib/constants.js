export const BRAND = "PlanMove";

export const LOGO_URL =
  "https://customer-assets-jt897jd0.emergentagent.net/job_voice-offerten/artifacts/b3y8bxbl_photo_2026-07-19_13-37-36.jpg";

export const WHATSAPP_URL =
  "https://wa.me/41780000000?text=" +
  encodeURIComponent(
    "Hallo PlanMove! Ich möchte mehr über MOMO, den Assistenten für mein Umzugs-/Reinigungsunternehmen, erfahren."
  );

/**
 * Realistic editorial photography for the hero and each Problem card.
 * Aesthetic matches the reference UI mockup: cinematic, warm/muted color palette,
 * subtle green (#25D366) accent tinting applied via overlay in the component.
 */
export const IMG = {
  hero: {
    src: "/images/hero-momo.jpg",
    alt: "MOMO Assistent am Schreibtisch eines Unternehmers",
  },
  problems: [
    {
      key: "unanswered",
      src: "/images/card-01.jpg",
      alt: "Verpasste Anfrage",
    },
    {
      key: "language",
      src: "/images/card-02.jpg",
      alt: "Sprachhürde",
    },
    {
      key: "exhausted",
      src: "/images/card-03.jpg",
      alt: "Papierkram nach Feierabend",
    },
    {
      key: "followup",
      src: "/images/card-04.jpg",
      alt: "Vergessene Follow-ups",
    },
    {
      key: "phonering",
      src: "/images/card-05.jpg",
      alt: "Anruf während der Arbeit",
    },
    {
      key: "channels",
      src: "/images/card-06.jpg",
      alt: "Viele Kanäle auf einmal",
    },
  ],
};
