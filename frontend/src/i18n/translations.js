/**
 * All user-facing UI strings for PlanMove/MOMO, per language.
 *
 * Structure notes:
 * - Strings that contain highlighted <span>s in JSX are split into
 *   "segment arrays": plain strings are rendered as-is, objects shaped
 *   { hl: "..." } are rendered inside the highlight span.
 * - Quote characters („…", «…») are part of the translated strings.
 * - Brand names "MOMO" and "PlanMove" stay untranslated.
 */

const waUrl = (text) =>
  "https://wa.me/41780000000?text=" + encodeURIComponent(text);

export const translations = {
  de: {
    whatsapp: {
      url: waUrl(
        "Hallo PlanMove! Ich möchte mehr über MOMO, den Assistenten für mein Umzugs-/Reinigungsunternehmen, erfahren."
      ),
    },
    whatsappButton: {
      label: "Jetzt auf WhatsApp schreiben",
    },
    languageSwitcher: {
      ariaLabel: (lang) => `Sprache wechseln — aktuell ${lang}`,
    },
    hero: {
      tagline: "Für Umzug & Reinigung Unternehmer gemacht",
      flagAria: "Schweiz",
      headlines: ["Mehr Kunden.", "Mehr Zeit.", "Mehr Geld."],
      headlineHighlight: "Weniger Stress.",
      benefits: [
        "Einfach in Ihrer Muttersprache sprechen – MOMO erledigt alles auf Deutsch.",
        "Offerten in wenigen Sekunden – einfach sprechen, MOMO schreibt perfektes Deutsch.",
        "Rechnungen sofort erstellen und versenden.",
        "Deutsche Briefe & E-Mails verstehen und beantworten.",
      ],
      starsAria: "4.9 von 5 Sternen",
      reviews: "120+ Bewertungen",
      visualAlt:
        "MOMO Assistent antwortet auf Kundenanfragen am Schreibtisch eines Unternehmers",
    },
    trustBar: {
      items: [
        "Keine Kunden verlieren",
        "Mehr Aufträge",
        "Weniger Büroarbeit",
        "Mehr Freizeit",
        "Mehr Umsatz",
      ],
    },
    problems: {
      headingA: "Die ",
      headingHighlight: "7 grössten Probleme",
      headingB: " im Alltag von Umzug & Reinigung Unternehmern.",
      cards: [
        {
          tag: "Reaktionszeit",
          title: [
            "Jede ",
            { hl: "unbeantwortete" },
            " Anfrage kostet Sie Kunden – und viel Geld.",
          ],
          body: [
            "Kunden warten nicht. Wenn Sie zu spät antworten, gehen sie zur Konkurrenz. MOMO antwortet ",
            { hl: "innerhalb weniger Sekunden" },
            " – ",
            { hl: "24/7" },
            ".",
          ],
          alt: "Verpasster Anruf am Smartphone",
        },
        {
          tag: "Muttersprache",
          title: [
            { hl: "Deutsch" },
            " ist nicht Ihre Muttersprache? Kein Problem.",
          ],
          body: [
            "Sprechen Sie einfach in Ihrer Sprache. MOMO schreibt ",
            { hl: "professionelle E-Mails, Offerten und Nachrichten" },
            " auf perfektem Deutsch, Französisch oder nach Wunsch.",
          ],
          alt: "Multilinguale Kommunikation",
        },
        {
          tag: "Feierabend",
          title: [
            "Nach einem langen Arbeitstag wartet die ",
            { hl: "Büroarbeit" },
            ".",
          ],
          body: [
            "Offerten, E-Mails, WhatsApp, Rechnungen, Einsatzplanung… Viele Unternehmer bleiben bis spät wach, nur um keine Anfrage zu verpassen. MOMO ",
            { hl: "erledigt alles" },
            ".",
          ],
          alt: "Erschöpfter Unternehmer nach Feierabend",
        },
        {
          tag: "Follow-up",
          title: [
            "Sie verschicken Offerten und vergessen ",
            { hl: "nachzufassen" },
            ".",
          ],
          body: [
            "Viele Unternehmer verlieren den Überblick — und damit auch Kunden und Geld. MOMO ",
            { hl: "erinnert automatisch nach" },
            " – per Nachricht oder Anruf.",
          ],
          alt: "Vergessene Follow-ups",
        },
        {
          tag: "Anrufe",
          title: [
            "Das ",
            { hl: "Telefon klingelt" },
            ", während Sie arbeiten.",
          ],
          body: [
            "Sie können nicht rangehen? Kein Problem. MOMO ",
            { hl: "nimmt Anrufe entgegen" },
            ", sammelt alle Infos und vereinbart auf Wunsch Termine.",
          ],
          alt: "Anruf während der Arbeit",
        },
        {
          tag: "Kanäle",
          title: ["So viele Nachrichten. So ", { hl: "wenig Zeit" }, "."],
          body: [
            "WhatsApp, E-Mail, Telefon — alles kommt zur gleichen Zeit. MOMO ",
            { hl: "beantwortet, organisiert und bringt alles an einen Ort zusammen" },
            ".",
          ],
          alt: "Alle Kanäle auf einem Bildschirm",
        },
      ],
      climax: {
        imageAlt: "Vergessen Sie Papierkram",
        titleA: "Vergessen Sie ",
        titleHighlight: "Papierkram",
        titleB: " und komplizierte Programme.",
        sub: "Keine Notizen, keine Excel-Listen, keine langen Abende am Computer. Sagen Sie einfach:",
        voiceCommands: [
          "„MOMO, erstelle eine Offerte für Herr Müller.“",
          "„Schick Frau Meier die Offerte per E-Mail.“",
          "„Schreibe dem Kunden auf WhatsApp, dass wir morgen um 08:00 Uhr kommen.“",
          "„Erstelle die Rechnung und sende sie an den Kunden.“",
        ],
        momoRestA: "MOMO",
        momoRestB: " erledigt den Rest.",
        services: [
          "Offerten",
          "Nachrichten",
          "Rechnungen",
          "Termine",
          "Anrufe",
          "Übersetzungen",
          "und vieles mehr…",
        ],
        magic: "Die MOMO-Magie",
      },
    },
    testimonials: {
      headingLine1: "Handwerker, die",
      headingLine2a: "nicht mehr ",
      headingLine2Highlight: "tippen.",
      items: [
        {
          quote:
            "„Früher zwei Stunden Papierkram nach Feierabend. Heute spreche ich 40 Sekunden ins Handy — fertig. Ich habe meinen Feierabend zurück.“",
          name: "Marco Kälin",
          role: "Inhaber, Kälin Umzüge GmbH",
          location: "Zürich",
        },
        {
          quote:
            "„Ich bin in Portugal aufgewachsen. MOMO versteht meine Muttersprache und schreibt sauberes Deutsch. Meine Kunden merken den Unterschied.“",
          name: "Elira Berisha",
          role: "Geschäftsführerin, Sparkle Reinigung",
          location: "Basel",
        },
        {
          quote:
            "„Der Auto-Follow-up hat mir letzten Monat drei Aufträge gerettet, die ich sonst vergessen hätte. MOMO zahlt sich mehrfach aus.“",
          name: "Andreas Bühler",
          role: "Schreinerei Bühler AG",
          location: "Winterthur",
        },
      ],
    },
    finalCta: {
      chipMoving: "Umzug",
      chipCleaning: "Reinigung",
      headline1: "Weniger Büro.",
      headline2: "Mehr Zeit. Mehr Kunden.",
      headline3: "Mehr Umsatz.",
      paragraph:
        "Erfahren Sie, wie MOMO Ihren Arbeitsalltag einfacher macht und sicherstellt, dass Ihnen keine Anfragen und Aufträge mehr entgehen.",
      subItems: ["Keine Verpflichtung", "Schnelle Antwort", "Persönliche Beratung"],
    },
    footer: {
      kicker: "Ihr nächster Schritt",
      headlineA: "Bereit für ",
      headlineB: "mehr ",
      headlineHighlight: "Umsatz?",
      paragraph:
        "Ein kurzes Gespräch auf WhatsApp — persönlich, kostenlos und ohne Verpflichtung. Erfahren Sie in fünf Minuten, wie MOMO Ihr KMU verändert.",
      brandDescription:
        "MOMO ist der intelligente Assistent für Schweizer Umzugs- und Reinigungsunternehmen. 24/7 erreichbar. In jeder Sprache.",
      navHeading: "Navigation",
      navLinks: ["Für wen?", "Probleme", "Lösungen", "Vorteile"],
      legalHeading: "Rechtliches",
      legalLinks: ["Impressum", "Datenschutz", "AGB"],
      contactHeading: "Kontakt",
      country: "Schweiz",
      bottomNote: "Für Umzug & Reinigung · DSGVO Konform",
    },
    phoneMockup: {
      newRequest: "Neue Anfrage",
      headline1: "Sprich einfach.",
      headline2: "MOMO tippt.",
      recording: "Aufnahme läuft",
      transcript:
        "„Offerte für Familie Meier, Umzug 3-Zimmer, Zürich nach Winterthur, Freitag um acht…",
      createdIn: "erstellt in 4.8s",
      quoteNumber: "Offerte #2049",
      now: "JETZT",
      sendWhatsApp: "Per WhatsApp senden",
      micAria: "Aufnahme",
    },
    cardVisuals: {
      reaktion: {
        notifications: [
          "Anfrage — Familie Meier · Zürich",
          "WhatsApp — Herr Kaufmann",
          "Voicemail — Umzugsanfrage",
        ],
        chip: "12 verpasste Anfragen · heute Nacht",
      },
      sprache: {
        translated: "Übersetzt · Deutsch",
        reply: "Guten Tag, gerne senden wir Ihnen eine Offerte.",
      },
      feierabend: {
        chipTop: "23:47 · Immer noch am Schreibtisch",
        tableHead: "Offerten · 47 offen",
        overdue: "Überfällig",
        chipBottom: "Feierabend ist heute wieder ausgefallen",
      },
      followUp: {
        autoReminder: "Auto-Erinnerung",
        momoFollowsUp: "MOMO fasst nach.",
        reminders: [
          { name: "Herr Müller", detail: "Offerte · vor 3 Tagen" },
          { name: "Frau Meier", detail: "Umzug 3.5 Zi · vor 5 Tagen" },
          { name: "Top Umzug AG", detail: "B2B Rahmen · vor 7 Tagen" },
        ],
      },
      anrufe: {
        incoming: "Eingehender Anruf",
        unknown: "Unbekannt",
        handled: "wird von MOMO entgegengenommen…",
      },
    },
  },

  fr: {
    whatsapp: {
      url: waUrl(
        "Bonjour PlanMove ! J'aimerais en savoir plus sur MOMO, l'assistant pour mon entreprise de déménagement/nettoyage."
      ),
    },
    whatsappButton: {
      label: "Écrivez-nous sur WhatsApp",
    },
    languageSwitcher: {
      ariaLabel: (lang) => `Changer de langue — actuellement ${lang}`,
    },
    hero: {
      tagline: "Conçu pour les entrepreneurs du déménagement & du nettoyage",
      flagAria: "Suisse",
      headlines: ["Plus de clients.", "Plus de temps.", "Plus d'argent."],
      headlineHighlight: "Moins de stress.",
      benefits: [
        "Parlez simplement dans votre langue maternelle — MOMO s'occupe de tout en allemand.",
        "Des devis en quelques secondes — parlez, MOMO rédige un allemand parfait.",
        "Créez et envoyez vos factures immédiatement.",
        "Comprenez et répondez aux lettres et e-mails en allemand.",
      ],
      starsAria: "4,9 sur 5 étoiles",
      reviews: "120+ avis",
      visualAlt:
        "L'assistant MOMO répond aux demandes des clients au bureau d'un entrepreneur",
    },
    trustBar: {
      items: [
        "Ne perdez plus de clients",
        "Plus de mandats",
        "Moins de paperasse",
        "Plus de temps libre",
        "Plus de chiffre d'affaires",
      ],
    },
    problems: {
      headingA: "Les ",
      headingHighlight: "7 plus grands problèmes",
      headingB: " du quotidien des entrepreneurs du déménagement & du nettoyage.",
      cards: [
        {
          tag: "Réactivité",
          title: [
            "Chaque demande ",
            { hl: "sans réponse" },
            " vous coûte des clients — et beaucoup d'argent.",
          ],
          body: [
            "Les clients n'attendent pas. Si vous répondez trop tard, ils vont chez la concurrence. MOMO répond ",
            { hl: "en quelques secondes" },
            " — ",
            { hl: "24h/24 et 7j/7" },
            ".",
          ],
          alt: "Appel manqué sur un smartphone",
        },
        {
          tag: "Langue maternelle",
          title: [
            "L'",
            { hl: "allemand" },
            " n'est pas votre langue maternelle ? Aucun problème.",
          ],
          body: [
            "Parlez simplement dans votre langue. MOMO rédige des ",
            { hl: "e-mails, devis et messages professionnels" },
            " en allemand parfait, en français ou comme vous le souhaitez.",
          ],
          alt: "Communication multilingue",
        },
        {
          tag: "Fin de journée",
          title: [
            "Après une longue journée de travail, la ",
            { hl: "paperasse" },
            " vous attend.",
          ],
          body: [
            "Devis, e-mails, WhatsApp, factures, planification… Beaucoup d'entrepreneurs restent éveillés jusqu'à tard, juste pour ne manquer aucune demande. MOMO ",
            { hl: "s'occupe de tout" },
            ".",
          ],
          alt: "Entrepreneur épuisé après le travail",
        },
        {
          tag: "Relance",
          title: [
            "Vous envoyez des devis et oubliez de ",
            { hl: "relancer" },
            ".",
          ],
          body: [
            "Beaucoup d'entrepreneurs perdent le fil — et avec lui des clients et de l'argent. MOMO ",
            { hl: "relance automatiquement" },
            " — par message ou par appel.",
          ],
          alt: "Relances oubliées",
        },
        {
          tag: "Appels",
          title: [
            "Le ",
            { hl: "téléphone sonne" },
            " pendant que vous travaillez.",
          ],
          body: [
            "Vous ne pouvez pas décrocher ? Aucun problème. MOMO ",
            { hl: "prend les appels" },
            ", collecte toutes les informations et fixe des rendez-vous si vous le souhaitez.",
          ],
          alt: "Appel pendant le travail",
        },
        {
          tag: "Canaux",
          title: ["Tant de messages. Si ", { hl: "peu de temps" }, "."],
          body: [
            "WhatsApp, e-mail, téléphone — tout arrive en même temps. MOMO ",
            { hl: "répond, organise et rassemble tout au même endroit" },
            ".",
          ],
          alt: "Tous les canaux sur un seul écran",
        },
      ],
      climax: {
        imageAlt: "Oubliez la paperasse",
        titleA: "Oubliez la ",
        titleHighlight: "paperasse",
        titleB: " et les programmes compliqués.",
        sub: "Pas de notes, pas de listes Excel, pas de longues soirées devant l'ordinateur. Dites simplement :",
        voiceCommands: [
          "« MOMO, prépare un devis pour Monsieur Müller. »",
          "« Envoie le devis à Madame Meier par e-mail. »",
          "« Écris au client sur WhatsApp que nous arrivons demain à 08h00. »",
          "« Crée la facture et envoie-la au client. »",
        ],
        momoRestA: "MOMO",
        momoRestB: " s'occupe du reste.",
        services: [
          "Devis",
          "Messages",
          "Factures",
          "Rendez-vous",
          "Appels",
          "Traductions",
          "et bien plus…",
        ],
        magic: "La magie MOMO",
      },
    },
    testimonials: {
      headingLine1: "Les artisans qui",
      headingLine2a: "ne ",
      headingLine2Highlight: "tapent plus.",
      items: [
        {
          quote:
            "« Avant, deux heures de paperasse après le travail. Aujourd'hui, je parle 40 secondes dans mon téléphone — terminé. J'ai retrouvé mes soirées. »",
          name: "Marco Kälin",
          role: "Gérant, Kälin Umzüge GmbH",
          location: "Zurich",
        },
        {
          quote:
            "« J'ai grandi au Portugal. MOMO comprend ma langue maternelle et rédige un allemand impeccable. Mes clients voient la différence. »",
          name: "Elira Berisha",
          role: "Directrice, Sparkle Reinigung",
          location: "Bâle",
        },
        {
          quote:
            "« La relance automatique m'a sauvé trois mandats le mois dernier, que j'aurais sinon oubliés. MOMO est largement rentabilisé. »",
          name: "Andreas Bühler",
          role: "Menuiserie Bühler AG",
          location: "Winterthour",
        },
      ],
    },
    finalCta: {
      chipMoving: "Déménagement",
      chipCleaning: "Nettoyage",
      headline1: "Moins de bureau.",
      headline2: "Plus de temps. Plus de clients.",
      headline3: "Plus de chiffre d'affaires.",
      paragraph:
        "Découvrez comment MOMO simplifie votre quotidien et veille à ce que vous ne manquiez plus aucune demande ni aucun mandat.",
      subItems: ["Sans engagement", "Réponse rapide", "Conseil personnalisé"],
    },
    footer: {
      kicker: "Votre prochaine étape",
      headlineA: "Prêt pour ",
      headlineB: "plus de ",
      headlineHighlight: "chiffre d'affaires ?",
      paragraph:
        "Une courte conversation sur WhatsApp — personnelle, gratuite et sans engagement. Découvrez en cinq minutes comment MOMO transforme votre PME.",
      brandDescription:
        "MOMO est l'assistant intelligent des entreprises suisses de déménagement et de nettoyage. Disponible 24h/24 et 7j/7. Dans toutes les langues.",
      navHeading: "Navigation",
      navLinks: ["Pour qui ?", "Problèmes", "Solutions", "Avantages"],
      legalHeading: "Juridique",
      legalLinks: ["Mentions légales", "Protection des données", "CG"],
      contactHeading: "Contact",
      country: "Suisse",
      bottomNote: "Pour le déménagement & le nettoyage · Conforme au RGPD",
    },
    phoneMockup: {
      newRequest: "Nouvelle demande",
      headline1: "Parlez simplement.",
      headline2: "MOMO tape.",
      recording: "Enregistrement en cours",
      transcript:
        "« Devis pour la famille Meier, déménagement 3 pièces, de Zurich à Winterthour, vendredi à huit heures…",
      createdIn: "créé en 4,8 s",
      quoteNumber: "Devis #2049",
      now: "MAINTENANT",
      sendWhatsApp: "Envoyer via WhatsApp",
      micAria: "Enregistrement",
    },
    cardVisuals: {
      reaktion: {
        notifications: [
          "Demande — Famille Meier · Zurich",
          "WhatsApp — Monsieur Kaufmann",
          "Messagerie — Demande de déménagement",
        ],
        chip: "12 demandes manquées · cette nuit",
      },
      sprache: {
        translated: "Traduit · Allemand",
        reply: "Bonjour, nous vous envoyons volontiers un devis.",
      },
      feierabend: {
        chipTop: "23:47 · Encore au bureau",
        tableHead: "Devis · 47 en attente",
        overdue: "En retard",
        chipBottom: "La fin de journée est encore tombée à l'eau",
      },
      followUp: {
        autoReminder: "Rappel automatique",
        momoFollowsUp: "MOMO relance.",
        reminders: [
          { name: "Monsieur Müller", detail: "Devis · il y a 3 jours" },
          { name: "Madame Meier", detail: "Déménagement 3,5 p. · il y a 5 jours" },
          { name: "Top Umzug AG", detail: "Cadre B2B · il y a 7 jours" },
        ],
      },
      anrufe: {
        incoming: "Appel entrant",
        unknown: "Inconnu",
        handled: "pris en charge par MOMO…",
      },
    },
  },

  it: {
    whatsapp: {
      url: waUrl(
        "Ciao PlanMove! Vorrei saperne di più su MOMO, l'assistente per la mia azienda di traslochi/pulizie."
      ),
    },
    whatsappButton: {
      label: "Scrivici ora su WhatsApp",
    },
    languageSwitcher: {
      ariaLabel: (lang) => `Cambia lingua — attualmente ${lang}`,
    },
    hero: {
      tagline: "Pensato per gli imprenditori di traslochi & pulizie",
      flagAria: "Svizzera",
      headlines: ["Più clienti.", "Più tempo.", "Più soldi."],
      headlineHighlight: "Meno stress.",
      benefits: [
        "Parli semplicemente nella Sua lingua madre — MOMO si occupa di tutto in tedesco.",
        "Preventivi in pochi secondi — basta parlare, MOMO scrive un tedesco perfetto.",
        "Creare e inviare fatture all'istante.",
        "Capire e rispondere a lettere ed e-mail in tedesco.",
      ],
      starsAria: "4,9 su 5 stelle",
      reviews: "120+ recensioni",
      visualAlt:
        "L'assistente MOMO risponde alle richieste dei clienti alla scrivania di un imprenditore",
    },
    trustBar: {
      items: [
        "Non perdere più clienti",
        "Più incarichi",
        "Meno lavoro d'ufficio",
        "Più tempo libero",
        "Più fatturato",
      ],
    },
    problems: {
      headingA: "I ",
      headingHighlight: "7 problemi più grandi",
      headingB: " nella vita quotidiana degli imprenditori di traslochi & pulizie.",
      cards: [
        {
          tag: "Tempi di risposta",
          title: [
            "Ogni richiesta ",
            { hl: "senza risposta" },
            " Le costa clienti — e molto denaro.",
          ],
          body: [
            "I clienti non aspettano. Se risponde troppo tardi, passano alla concorrenza. MOMO risponde ",
            { hl: "in pochi secondi" },
            " — ",
            { hl: "24 ore su 24, 7 giorni su 7" },
            ".",
          ],
          alt: "Chiamata persa sullo smartphone",
        },
        {
          tag: "Lingua madre",
          title: [
            "Il ",
            { hl: "tedesco" },
            " non è la Sua lingua madre? Nessun problema.",
          ],
          body: [
            "Parli semplicemente nella Sua lingua. MOMO scrive ",
            { hl: "e-mail, preventivi e messaggi professionali" },
            " in tedesco perfetto, in francese o come desidera.",
          ],
          alt: "Comunicazione multilingue",
        },
        {
          tag: "Fine giornata",
          title: [
            "Dopo una lunga giornata di lavoro, il ",
            { hl: "lavoro d'ufficio" },
            " La aspetta.",
          ],
          body: [
            "Preventivi, e-mail, WhatsApp, fatture, pianificazione degli interventi… Molti imprenditori restano svegli fino a tardi, solo per non perdere nessuna richiesta. MOMO ",
            { hl: "fa tutto" },
            ".",
          ],
          alt: "Imprenditore esausto dopo il lavoro",
        },
        {
          tag: "Follow-up",
          title: [
            "Invia preventivi e dimentica di ",
            { hl: "ricontattare i clienti" },
            ".",
          ],
          body: [
            "Molti imprenditori perdono la visione d'insieme — e con essa clienti e denaro. MOMO ",
            { hl: "ricorda automaticamente" },
            " — tramite messaggio o chiamata.",
          ],
          alt: "Follow-up dimenticati",
        },
        {
          tag: "Chiamate",
          title: [
            "Il ",
            { hl: "telefono squilla" },
            " mentre lavora.",
          ],
          body: [
            "Non può rispondere? Nessun problema. MOMO ",
            { hl: "risponde alle chiamate" },
            ", raccoglie tutte le informazioni e, se lo desidera, fissa gli appuntamenti.",
          ],
          alt: "Chiamata durante il lavoro",
        },
        {
          tag: "Canali",
          title: ["Così tanti messaggi. Così ", { hl: "poco tempo" }, "."],
          body: [
            "WhatsApp, e-mail, telefono — tutto arriva contemporaneamente. MOMO ",
            { hl: "risponde, organizza e riunisce tutto in un unico posto" },
            ".",
          ],
          alt: "Tutti i canali su un unico schermo",
        },
      ],
      climax: {
        imageAlt: "Dimentichi la burocrazia",
        titleA: "Dimentichi la ",
        titleHighlight: "burocrazia",
        titleB: " e i programmi complicati.",
        sub: "Niente appunti, niente elenchi Excel, niente lunghe serate al computer. Dica semplicemente:",
        voiceCommands: [
          "«MOMO, crea un preventivo per il signor Müller.»",
          "«Invia il preventivo alla signora Meier via e-mail.»",
          "«Scrivi al cliente su WhatsApp che domani arriviamo alle 08:00.»",
          "«Crea la fattura e inviala al cliente.»",
        ],
        momoRestA: "MOMO",
        momoRestB: " fa il resto.",
        services: [
          "Preventivi",
          "Messaggi",
          "Fatture",
          "Appuntamenti",
          "Chiamate",
          "Traduzioni",
          "e molto altro…",
        ],
        magic: "La magia di MOMO",
      },
    },
    testimonials: {
      headingLine1: "Gli artigiani che",
      headingLine2a: "non ",
      headingLine2Highlight: "digitano più.",
      items: [
        {
          quote:
            "«Prima, due ore di scartoffie dopo il lavoro. Oggi parlo per 40 secondi al telefono — fatto. Ho riavuto le mie serate.»",
          name: "Marco Kälin",
          role: "Titolare, Kälin Umzüge GmbH",
          location: "Zurigo",
        },
        {
          quote:
            "«Sono cresciuta in Portogallo. MOMO capisce la mia lingua madre e scrive un tedesco impeccabile. I miei clienti notano la differenza.»",
          name: "Elira Berisha",
          role: "Direttrice, Sparkle Reinigung",
          location: "Basilea",
        },
        {
          quote:
            "«Il follow-up automatico mi ha salvato tre incarichi il mese scorso, che altrimenti avrei dimenticato. MOMO si ripaga più volte.»",
          name: "Andreas Bühler",
          role: "Falegnameria Bühler AG",
          location: "Winterthur",
        },
      ],
    },
    finalCta: {
      chipMoving: "Traslochi",
      chipCleaning: "Pulizie",
      headline1: "Meno ufficio.",
      headline2: "Più tempo. Più clienti.",
      headline3: "Più fatturato.",
      paragraph:
        "Scopra come MOMO semplifica la Sua giornata lavorativa e fa in modo che non Le sfugga più nessuna richiesta né incarico.",
      subItems: ["Nessun impegno", "Risposta rapida", "Consulenza personale"],
    },
    footer: {
      kicker: "Il Suo prossimo passo",
      headlineA: "Pronto per ",
      headlineB: "più ",
      headlineHighlight: "fatturato?",
      paragraph:
        "Una breve conversazione su WhatsApp — personale, gratuita e senza impegno. Scopra in cinque minuti come MOMO trasforma la Sua PMI.",
      brandDescription:
        "MOMO è l'assistente intelligente per le aziende svizzere di traslochi e pulizie. Disponibile 24 ore su 24, 7 giorni su 7. In ogni lingua.",
      navHeading: "Navigazione",
      navLinks: ["Per chi?", "Problemi", "Soluzioni", "Vantaggi"],
      legalHeading: "Legale",
      legalLinks: ["Impressum", "Privacy", "CG"],
      contactHeading: "Contatto",
      country: "Svizzera",
      bottomNote: "Per traslochi & pulizie · Conforme al GDPR",
    },
    phoneMockup: {
      newRequest: "Nuova richiesta",
      headline1: "Parli pure.",
      headline2: "MOMO scrive.",
      recording: "Registrazione in corso",
      transcript:
        "«Preventivo per la famiglia Meier, trasloco 3 stanze, da Zurigo a Winterthur, venerdì alle otto…",
      createdIn: "creato in 4,8 s",
      quoteNumber: "Preventivo #2049",
      now: "ORA",
      sendWhatsApp: "Invia via WhatsApp",
      micAria: "Registrazione",
    },
    cardVisuals: {
      reaktion: {
        notifications: [
          "Richiesta — Famiglia Meier · Zurigo",
          "WhatsApp — Signor Kaufmann",
          "Segreteria — Richiesta di trasloco",
        ],
        chip: "12 richieste perse · questa notte",
      },
      sprache: {
        translated: "Tradotto · Tedesco",
        reply: "Buongiorno, Le inviamo volentieri un preventivo.",
      },
      feierabend: {
        chipTop: "23:47 · Ancora alla scrivania",
        tableHead: "Preventivi · 47 in sospeso",
        overdue: "In ritardo",
        chipBottom: "Anche oggi niente fine giornata",
      },
      followUp: {
        autoReminder: "Promemoria automatico",
        momoFollowsUp: "MOMO ricontatta.",
        reminders: [
          { name: "Signor Müller", detail: "Preventivo · 3 giorni fa" },
          { name: "Signora Meier", detail: "Trasloco 3,5 loc. · 5 giorni fa" },
          { name: "Top Umzug AG", detail: "Quadro B2B · 7 giorni fa" },
        ],
      },
      anrufe: {
        incoming: "Chiamata in arrivo",
        unknown: "Sconosciuto",
        handled: "presa in carico da MOMO…",
      },
    },
  },
};

export default translations;
