export const BRAND = "MOMO";

export const LOGO_URL =
  "https://customer-assets-jt897jd0.emergentagent.net/job_voice-offerten/artifacts/b3y8bxbl_photo_2026-07-19_13-37-36.jpg";

export const WHATSAPP_URL =
  "https://wa.me/41780000000?text=" +
  encodeURIComponent(
    "Hallo MOMO! Ich möchte mehr über den Assistenten für mein Umzugs-/Reinigungsunternehmen erfahren."
  );

/**
 * Curated fallback URLs while awaiting DALL-E generation.
 * Each entry has a `dallePrompt` — the exact DALL-E 3 prompt the user should
 * feed into their image generation engine to produce the perfect visual.
 */
export const IMG = {
  hero: {
    src: "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Umzugsteam im Einsatz — Schweizer KMU",
    dallePrompt:
      "Ultra-realistic cinematic photograph, 8k, editorial quality. Interior of a modern Swiss home office at dusk, warm rim lighting, shallow depth of field. A stressed male entrepreneur (mid-30s, Swiss, casual button-down shirt) sits at a minimalist walnut desk in front of a MacBook, one hand pressing his temple, softly lit by the laptop screen. Beside him, an iPhone displays a WhatsApp conversation in green. Muted neutral color palette (bone, warm gray, matte black), a single vibrant WhatsApp green (#25D366) accent on the phone screen. Shot on Sony A7 IV, 50mm f/1.4. Award-winning commercial photography.",
  },
  problems: [
    {
      key: "unanswered",
      src: "https://images.pexels.com/photos/5439481/pexels-photo-5439481.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Verpasster Anruf am Smartphone",
      dallePrompt:
        "Ultra-realistic cinematic close-up photograph. A hand holding an iPhone at a walnut desk, screen dimly illuminated in a dark home office. The lock screen shows 12 missed WhatsApp notifications from potential customers requesting moving quotes, timestamps between 22:00 and 24:00. Soft rim light, cinematic muted colors, single WhatsApp green accent (#25D366) glowing from the screen. Editorial premium look, shot on Sony A7 IV, 85mm f/1.8, shallow depth of field.",
    },
    {
      key: "language",
      src: "https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Multilinguale Kommunikation",
      dallePrompt:
        "Ultra-realistic cinematic photograph. A Swiss entrepreneur (portuguese heritage, mid-30s) sits at a bright minimalist desk, thinking, staring at a MacBook screen. Above his head float three subtle translucent floating cards labelled DEUTSCH, FRANÇAIS, ITALIANO in refined sans-serif. Neutral off-white studio background, warm afternoon light, editorial premium look. Shot on 50mm f/1.4, shallow depth of field.",
    },
    {
      key: "exhausted",
      src: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Erschöpfter Unternehmer nach Feierabend",
      dallePrompt:
        "Ultra-realistic cinematic photograph, muted palette. A tired man in his 40s (Swiss handyman-style, plaid shirt) slumped at a home office desk late at night, illuminated only by a laptop screen and a single warm desk lamp. Piles of paperwork and invoices around him. Blue-hour window in the background. Editorial premium look, shot on Sony A7 IV, 35mm f/1.4.",
    },
    {
      key: "followup",
      src: "https://images.pexels.com/photos/5717413/pexels-photo-5717413.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Vergessene Follow-ups",
      dallePrompt:
        "Ultra-realistic cinematic overhead photograph of a minimalist walnut desk. A stack of Swiss quotation letters ('Offerte') is scattered next to yellow Post-it notes with handwritten names: 'Herr Müller?', 'Frau Meier?', 'Top Umzug?', 'Herr Weber?'. A silver pen and half-drunk espresso cup. Soft directional window light, editorial minimal composition, muted neutral palette. Shot flat-lay, 45mm f/2.8.",
    },
    {
      key: "phonering",
      src: "https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Anruf während der Arbeit",
      dallePrompt:
        "Ultra-realistic cinematic photograph. A young Swiss mover (mid-20s, navy work uniform) carrying a large cardboard box in an empty apartment, his back pocket vibrates — a smartphone screen visible showing 'Unbekannt' with an incoming call. Motion blur suggests he can't answer. Warm daylight from tall windows, editorial premium look, muted color grading. Shot on Sony A7 IV, 35mm f/2.0.",
    },
    {
      key: "channels",
      src: "https://images.pexels.com/photos/4831856/pexels-photo-4831856.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Alle Kanäle auf einem Bildschirm",
      dallePrompt:
        "Ultra-realistic cinematic product photograph. A single iPhone floating on a bone-white seamless background, screen showing a beautifully designed unified inbox: WhatsApp bubbles, an email, and a missed call — all consolidated in one clean UI. Soft studio lighting, subtle green shadow (#25D366) glow beneath the phone, editorial premium look, minimalist Swiss design aesthetic. Rendered in cinema 4d octane, 45mm lens.",
    },
    {
      key: "manifest",
      src: "https://images.pexels.com/photos/6195131/pexels-photo-6195131.jpeg?auto=compress&cs=tinysrgb&w=1400",
      alt: "Reinigungs- und Umzugsteam",
      dallePrompt:
        "Ultra-realistic cinematic wide photograph. On the LEFT half: an overwhelmed Swiss business owner (male, mid-40s) surrounded by paperwork, painted with a large translucent green X mark (#25D366) crossing him out. On the RIGHT half: a clean bone-white minimalist workspace with a floating premium smartphone showing a voice waveform in WhatsApp green (#25D366). Editorial magazine spread composition, cinematic lighting, refined typography implied, muted color palette. Shot on Sony A7 IV, 35mm f/2.0.",
    },
  ],
  cta: {
    left: {
      src: "https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=700",
      alt: "Zufriedener Umzugshelfer mit Karton",
      dallePrompt:
        "Ultra-realistic cinematic portrait photograph. A young Swiss mover (male, mid-20s, warm smile) in a navy uniform holding a large clean cardboard box. Bone-white seamless background, warm rim light from left, editorial premium look. Shot on Sony A7 IV, 85mm f/1.4, half-body vertical portrait.",
    },
    right: {
      src: "https://images.pexels.com/photos/6195131/pexels-photo-6195131.jpeg?auto=compress&cs=tinysrgb&w=700",
      alt: "Freundliche Reinigungsfachkraft",
      dallePrompt:
        "Ultra-realistic cinematic portrait photograph. A young Swiss cleaner (female, mid-30s, warm smile) in a neat gray uniform holding a stainless steel cleaning bucket with tools. Bone-white seamless background, warm rim light from right, editorial premium look. Shot on Sony A7 IV, 85mm f/1.4, half-body vertical portrait.",
    },
  },
};
