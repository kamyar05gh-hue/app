export const BRAND = "PlanMove";

export const LOGO_URL =
  "https://customer-assets-jt897jd0.emergentagent.net/job_voice-offerten/artifacts/b3y8bxbl_photo_2026-07-19_13-37-36.jpg";

export const WHATSAPP_URL =
  "https://wa.me/41780000000?text=" +
  encodeURIComponent(
    "Hallo PlanMove! Ich möchte mehr über MOMO, den Assistenten für mein Umzugs-/Reinigungsunternehmen, erfahren."
  );

/**
 * Realistic editorial photography for each Problem card.
 * Aesthetic matches the reference UI mockup: cinematic, warm/muted color palette,
 * subtle green (#25D366) accent tinting applied via overlay in the component.
 */
export const IMG = {
  hero: {
    src: "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Umzugsteam im Einsatz — Schweizer KMU",
  },
  problems: [
    {
      key: "unanswered",
      // Stressed man at night looking at phone — missed WhatsApp requests
      src: "https://images.pexels.com/photos/5439481/pexels-photo-5439481.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Verpasster Anruf am Smartphone",
    },
    {
      key: "language",
      // Entrepreneur at laptop, thoughtful — multilingual challenge
      src: "https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Multilinguale Kommunikation",
    },
    {
      key: "exhausted",
      // Tired man at desk late at night — paperwork after work
      src: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Erschöpfter Unternehmer nach Feierabend",
    },
    {
      key: "followup",
      // Sticky notes / paperwork on desk — forgotten follow-ups
      src: "https://images.pexels.com/photos/5717413/pexels-photo-5717413.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Vergessene Follow-ups",
    },
    {
      key: "phonering",
      // Mover carrying box — phone rings during job
      src: "https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Anruf während der Arbeit",
    },
    {
      key: "channels",
      // Smartphone with many chat notifications — messages flooding in
      src: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Alle Kanäle auf einem Bildschirm",
    },
  ],
};
