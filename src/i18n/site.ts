import app from "./app.json";

/** The app's own languages, in the order of its language list. English lives at the root. */
export const LANGS = ["en", "es", "de", "fr", "it", "pt"] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_NAMES: Record<Lang, string> = {
  en: "English",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
  pt: "Português",
};

export const SITE = "https://lumen.fungicode.io";

/** Public contact until hello@fungicode.io is confirmed to receive mail. */
export const CONTACT_EMAIL = "marrietaporras@gmail.com";

/** Languages the privacy policy is written in; the rest show the English text. */
export const POLICY_LANGS: readonly Lang[] = ["en", "es"];

export type Page = "home" | "privacy" | "support";

export function path(lang: Lang, page: Page): string {
  const base = lang === "en" ? "/" : `/${lang}/`;
  return page === "home" ? base : `${base}${page}/`;
}

/** Wording copied from the app (src/i18n/app.json), so the site says what Lumen says. */
export type AppStrings = (typeof app)["en"];
export const appStrings = (lang: Lang): AppStrings => app[lang];

interface Feature {
  title: string;
  body: string;
}

export interface SiteStrings {
  metaTitle: string;
  metaDescription: string;
  nav: { features: string; pro: string; privacy: string; support: string; language: string };
  kicker: string;
  heroSub: string;
  playSoon: string;
  phoneLabel: string;
  favorites: string[];
  featuresTitle: string;
  clock: Feature;
  wallpapers: Feature;
  screenTimeBody: string;
  search: Feature;
  bedside: Feature;
  proTag: string;
  privacy: Feature & { link: string };
  footerMade: string;
  footerFonts: string;
  privacyTitle: string;
  privacyOnlyIn: string;
  support: {
    title: string;
    intro: string;
    faq: [string, string][];
    contactTitle: string;
    contactBody: string;
  };
  notFound: { title: string; body: string; home: string };
}

const en: SiteStrings = {
  metaTitle: "Lumen — a calm home screen for Android",
  metaDescription:
    "Lumen is a minimalist Android launcher: your apps by name, an A–Z index, a clock you design and tools that keep distractions away. No ads, no accounts, no tracking.",
  nav: { features: "Features", pro: "Pro", privacy: "Privacy", support: "Support", language: "Language" },
  kicker: "Launcher for Android",
  heroSub:
    "A minimalist home screen: your apps by name, a clock you design, and nothing pulling at your attention. No ads, no accounts, no tracking.",
  playSoon: "Coming soon to Google Play",
  phoneLabel: "Lumen's home screen",
  favorites: ["phone", "messages", "camera", "maps", "music"],
  featuresTitle: "Everything in its place",
  clock: {
    title: "A clock you design",
    body: "Pick a layout, a typeface, its weight and color, and place it anywhere on home. Or start from a ready-made style that sets the clock, type, color and wallpaper in one go.",
  },
  wallpapers: {
    title: "Wallpapers that match",
    body: "Drawn wallpapers that follow your accent color and light or dark mode, curated collections, or your own photo with filters. On the home and lock screens, together or apart.",
  },
  screenTimeBody:
    "Today's total sits in a corner of home. Tap it for the week, your unlocks and the apps that take your time. Everything is calculated on your phone.",
  search: {
    title: "Smart search",
    body: "Type or say “alarm 7:30”, “timer 10” or “call mom”. Lumen understands it on your phone and gets it done.",
  },
  bedside: {
    title: "Bedside mode",
    body: "While the phone charges, your clock becomes a dimmed screensaver, with a red night tint if you like.",
  },
  proTag: "Pro",
  privacy: {
    title: "Your phone, your data",
    body: "Lumen has no accounts, shows no ads and includes no analytics or tracking. Your apps, settings and statistics stay on your phone. Every permission is optional and explained before Lumen asks for it.",
    link: "Read the privacy policy",
  },
  footerMade: "Made by FungiCode",
  footerFonts: "Type: Space Grotesk, SIL Open Font License",
  privacyTitle: "Privacy policy",
  privacyOnlyIn: "",
  support: {
    title: "Support",
    intro: "Answers to common questions. If yours isn't here, write to us.",
    faq: [
      [
        "How do I make Lumen my home screen?",
        "Lumen offers it at the end of its welcome. To do it later, open your phone's settings, search for “home app” or “default apps”, and choose Lumen Launcher.",
      ],
      [
        "Why does Lumen ask for permissions?",
        "Each one is optional and turns on a single feature: location for the weather, notification access for the player and for holding paused apps' notifications, usage access for screen time, and contacts for calls and messages from smart search. Lumen works without any of them.",
      ],
      [
        "I bought Pro. How do I get it on a new phone?",
        "Sign in with the same Google account, open Lumen's settings → Lumen Pro and tap “Restore purchase”.",
      ],
      [
        "How do I go back to my previous launcher?",
        "Choose another home app in your phone's settings (search for “home app”). You can then uninstall Lumen, which removes everything it stored on your phone.",
      ],
      [
        "The weather doesn't show.",
        "Turn on weather in Lumen's settings and allow approximate location. The forecast comes from MET Norway, so the first one can take a moment.",
      ],
    ],
    contactTitle: "Contact",
    contactBody: "Questions, bugs or ideas:",
  },
  notFound: { title: "Page not found", body: "This page doesn't exist, or it moved.", home: "Back to Lumen" },
};

const es: SiteStrings = {
  metaTitle: "Lumen — un inicio tranquilo para Android",
  metaDescription:
    "Lumen es un launcher minimalista para Android: tus apps por nombre, un índice A–Z, un reloj que diseñas tú y herramientas para alejar las distracciones. Sin publicidad, sin cuentas, sin rastreo.",
  nav: { features: "Funciones", pro: "Pro", privacy: "Privacidad", support: "Soporte", language: "Idioma" },
  kicker: "Launcher para Android",
  heroSub:
    "Un inicio minimalista: tus apps por nombre, un reloj que diseñas tú y nada que te robe la atención. Sin publicidad, sin cuentas, sin rastreo.",
  playSoon: "Muy pronto en Google Play",
  phoneLabel: "La pantalla de inicio de Lumen",
  favorites: ["teléfono", "mensajes", "cámara", "mapas", "música"],
  featuresTitle: "Todo en su lugar",
  clock: {
    title: "Un reloj a tu medida",
    body: "Elige un diseño, una tipografía, su grosor y su color, y ubícalo donde quieras en el inicio. O parte de un estilo listo que define reloj, letra, color y fondo de una vez.",
  },
  wallpapers: {
    title: "Fondos que combinan",
    body: "Fondos dibujados que siguen tu color de acento y el modo claro u oscuro, colecciones seleccionadas o tu propia foto con filtros. En inicio y bloqueo, juntos o por separado.",
  },
  screenTimeBody:
    "El total de hoy queda en una esquina del inicio. Tócalo para ver la semana, tus desbloqueos y las apps que se llevan tu tiempo. Todo se calcula en tu teléfono.",
  search: {
    title: "Búsqueda inteligente",
    body: "Escribe o di «alarma 7:30», «temporizador 10» o «llamar a mamá». Lumen lo entiende en tu teléfono y lo hace.",
  },
  bedside: {
    title: "Modo mesita",
    body: "Mientras el teléfono carga, tu reloj se vuelve un salvapantallas atenuado, con tinte rojo nocturno si quieres.",
  },
  proTag: "Pro",
  privacy: {
    title: "Tu teléfono, tus datos",
    body: "Lumen no tiene cuentas, no muestra publicidad y no incluye analítica ni rastreo. Tus apps, ajustes y estadísticas se quedan en tu teléfono. Cada permiso es opcional y se explica antes de pedirlo.",
    link: "Lee la política de privacidad",
  },
  footerMade: "Hecho por FungiCode",
  footerFonts: "Tipografía: Space Grotesk, SIL Open Font License",
  privacyTitle: "Política de privacidad",
  privacyOnlyIn: "",
  support: {
    title: "Soporte",
    intro: "Respuestas a las preguntas frecuentes. Si la tuya no está, escríbenos.",
    faq: [
      [
        "¿Cómo pongo Lumen como pantalla de inicio?",
        "Lumen te lo ofrece al final de la bienvenida. Para hacerlo después, abre los ajustes del teléfono, busca «app de inicio» o «apps predeterminadas» y elige Lumen Launcher.",
      ],
      [
        "¿Por qué Lumen pide permisos?",
        "Cada uno es opcional y activa una sola función: la ubicación para el clima, el acceso a notificaciones para el reproductor y para retener las notificaciones de apps en pausa, el acceso de uso para el tiempo de pantalla y los contactos para llamar y escribir desde la búsqueda inteligente. Lumen funciona sin ninguno.",
      ],
      [
        "Compré Pro. ¿Cómo lo tengo en un teléfono nuevo?",
        "Inicia sesión con la misma cuenta de Google, abre los ajustes de Lumen → Lumen Pro y toca «Restaurar compra».",
      ],
      [
        "¿Cómo vuelvo a mi launcher anterior?",
        "Elige otra app de inicio en los ajustes del teléfono (busca «app de inicio»). Después puedes desinstalar Lumen, y se borra todo lo que guardó en tu teléfono.",
      ],
      [
        "No aparece el clima.",
        "Activa el clima en los ajustes de Lumen y permite la ubicación aproximada. El pronóstico viene de MET Norway, así que el primero puede tardar un momento.",
      ],
    ],
    contactTitle: "Contacto",
    contactBody: "Preguntas, errores o ideas:",
  },
  notFound: { title: "Página no encontrada", body: "Esta página no existe o se movió.", home: "Volver a Lumen" },
};

const de: SiteStrings = {
  metaTitle: "Lumen — ein ruhiger Startbildschirm für Android",
  metaDescription:
    "Lumen ist ein minimalistischer Android-Launcher: deine Apps beim Namen, ein A–Z-Index, eine Uhr nach deinem Design und Werkzeuge gegen Ablenkung. Keine Werbung, keine Konten, kein Tracking.",
  nav: { features: "Funktionen", pro: "Pro", privacy: "Datenschutz", support: "Hilfe", language: "Sprache" },
  kicker: "Launcher für Android",
  heroSub:
    "Ein minimalistischer Startbildschirm: deine Apps beim Namen, eine Uhr nach deinem Design und nichts, was um deine Aufmerksamkeit buhlt. Keine Werbung, keine Konten, kein Tracking.",
  playSoon: "Bald bei Google Play",
  phoneLabel: "Der Startbildschirm von Lumen",
  favorites: ["telefon", "nachrichten", "kamera", "karten", "musik"],
  featuresTitle: "Alles an seinem Platz",
  clock: {
    title: "Eine Uhr nach deinem Design",
    body: "Wähle ein Layout, eine Schrift, ihre Stärke und Farbe und platziere die Uhr, wo du willst. Oder starte mit einem fertigen Stil, der Uhr, Schrift, Farbe und Hintergrund auf einmal setzt.",
  },
  wallpapers: {
    title: "Passende Hintergründe",
    body: "Gezeichnete Hintergründe, die deiner Akzentfarbe und dem hellen oder dunklen Modus folgen, ausgewählte Sammlungen oder dein eigenes Foto mit Filtern. Für Start- und Sperrbildschirm, zusammen oder getrennt.",
  },
  screenTimeBody:
    "Die heutige Gesamtzeit steht in einer Ecke des Startbildschirms. Tippe darauf für die Woche, deine Entsperrungen und die Apps, die deine Zeit beanspruchen. Alles wird auf deinem Handy berechnet.",
  search: {
    title: "Smarte Suche",
    body: "Tippe oder sag „Wecker 7:30“, „Timer 10“ oder „Mama anrufen“. Lumen versteht es auf deinem Handy und erledigt es.",
  },
  bedside: {
    title: "Nachttischmodus",
    body: "Während das Handy lädt, wird deine Uhr zu einem gedimmten Bildschirmschoner, auf Wunsch mit rotem Nachtfilter.",
  },
  proTag: "Pro",
  privacy: {
    title: "Dein Handy, deine Daten",
    body: "Lumen hat keine Konten, zeigt keine Werbung und enthält weder Analyse noch Tracking. Deine Apps, Einstellungen und Statistiken bleiben auf deinem Handy. Jede Berechtigung ist optional und wird erklärt, bevor Lumen danach fragt.",
    link: "Datenschutzerklärung lesen",
  },
  footerMade: "Gemacht von FungiCode",
  footerFonts: "Schrift: Space Grotesk, SIL Open Font License",
  privacyTitle: "Datenschutzerklärung",
  privacyOnlyIn: "Diese Datenschutzerklärung gibt es vorerst auf Englisch und Spanisch. Hier ist die englische Fassung.",
  support: {
    title: "Hilfe",
    intro: "Antworten auf häufige Fragen. Wenn deine nicht dabei ist, schreib uns.",
    faq: [
      [
        "Wie mache ich Lumen zu meinem Startbildschirm?",
        "Lumen bietet es am Ende der Begrüßung an. Um es später zu tun, öffne die Einstellungen deines Handys, suche nach „Start-App“ oder „Standard-Apps“ und wähle Lumen Launcher.",
      ],
      [
        "Warum fragt Lumen nach Berechtigungen?",
        "Jede ist optional und schaltet nur eine Funktion frei: Standort für das Wetter, Benachrichtigungszugriff für den Player und zum Zurückhalten der Benachrichtigungen pausierter Apps, Nutzungszugriff für die Bildschirmzeit und Kontakte für Anrufe und Nachrichten aus der smarten Suche. Lumen funktioniert auch ganz ohne.",
      ],
      [
        "Ich habe Pro gekauft. Wie bekomme ich es auf ein neues Handy?",
        "Melde dich mit demselben Google-Konto an, öffne Lumens Einstellungen → Lumen Pro und tippe auf „Kauf wiederherstellen“.",
      ],
      [
        "Wie kehre ich zu meinem vorherigen Launcher zurück?",
        "Wähle in den Einstellungen deines Handys eine andere Start-App (suche nach „Start-App“). Danach kannst du Lumen deinstallieren; dabei wird alles gelöscht, was es auf deinem Handy gespeichert hat.",
      ],
      [
        "Das Wetter wird nicht angezeigt.",
        "Schalte das Wetter in Lumens Einstellungen ein und erlaube den ungefähren Standort. Die Vorhersage kommt von MET Norway, die erste kann also einen Moment dauern.",
      ],
    ],
    contactTitle: "Kontakt",
    contactBody: "Fragen, Fehler oder Ideen:",
  },
  notFound: { title: "Seite nicht gefunden", body: "Diese Seite gibt es nicht oder sie ist umgezogen.", home: "Zurück zu Lumen" },
};

const fr: SiteStrings = {
  metaTitle: "Lumen — un écran d'accueil apaisé pour Android",
  metaDescription:
    "Lumen est un launcher Android minimaliste : vos apps par leur nom, un index A–Z, une horloge à votre image et des outils pour éloigner les distractions. Sans publicité, sans compte, sans pistage.",
  nav: { features: "Fonctions", pro: "Pro", privacy: "Confidentialité", support: "Aide", language: "Langue" },
  kicker: "Launcher pour Android",
  heroSub:
    "Un écran d'accueil minimaliste : vos apps par leur nom, une horloge à votre image, et rien qui accapare votre attention. Sans publicité, sans compte, sans pistage.",
  playSoon: "Bientôt sur Google Play",
  phoneLabel: "L'écran d'accueil de Lumen",
  favorites: ["téléphone", "messages", "appareil photo", "plans", "musique"],
  featuresTitle: "Chaque chose à sa place",
  clock: {
    title: "Une horloge à votre image",
    body: "Choisissez une disposition, une police, sa graisse et sa couleur, et placez-la où vous voulez. Ou partez d'un style prêt à l'emploi qui règle horloge, police, couleur et fond d'un coup.",
  },
  wallpapers: {
    title: "Des fonds assortis",
    body: "Des fonds dessinés qui suivent votre couleur d'accent et le mode clair ou sombre, des collections choisies, ou votre propre photo avec des filtres. Pour l'accueil et le verrouillage, ensemble ou séparément.",
  },
  screenTimeBody:
    "Le total du jour s'affiche dans un coin de l'accueil. Touchez-le pour voir la semaine, vos déverrouillages et les apps qui prennent votre temps. Tout est calculé sur votre téléphone.",
  search: {
    title: "Recherche intelligente",
    body: "Tapez ou dites « alarme 7h30 », « minuteur 10 » ou « appeler maman ». Lumen le comprend sur votre téléphone et s'en charge.",
  },
  bedside: {
    title: "Mode chevet",
    body: "Pendant que le téléphone charge, votre horloge devient un économiseur d'écran tamisé, avec une teinte rouge de nuit si vous le souhaitez.",
  },
  proTag: "Pro",
  privacy: {
    title: "Votre téléphone, vos données",
    body: "Lumen n'a pas de compte, n'affiche pas de publicité et n'inclut ni analyse ni pistage. Vos apps, réglages et statistiques restent sur votre téléphone. Chaque autorisation est facultative et expliquée avant que Lumen ne la demande.",
    link: "Lire la politique de confidentialité",
  },
  footerMade: "Créé par FungiCode",
  footerFonts: "Police : Space Grotesk, SIL Open Font License",
  privacyTitle: "Politique de confidentialité",
  privacyOnlyIn: "Cette politique existe pour l'instant en anglais et en espagnol. Voici la version anglaise.",
  support: {
    title: "Aide",
    intro: "Les réponses aux questions fréquentes. Si la vôtre n'y est pas, écrivez-nous.",
    faq: [
      [
        "Comment faire de Lumen mon écran d'accueil ?",
        "Lumen vous le propose à la fin de l'accueil. Pour le faire plus tard, ouvrez les paramètres du téléphone, cherchez « application d'accueil » ou « applications par défaut », puis choisissez Lumen Launcher.",
      ],
      [
        "Pourquoi Lumen demande-t-il des autorisations ?",
        "Chacune est facultative et n'active qu'une fonction : la position pour la météo, l'accès aux notifications pour le lecteur et pour retenir les notifications des apps en pause, l'accès à l'utilisation pour le temps d'écran, et les contacts pour appeler et écrire depuis la recherche intelligente. Lumen fonctionne sans aucune d'elles.",
      ],
      [
        "J'ai acheté Pro. Comment le retrouver sur un nouveau téléphone ?",
        "Connectez-vous avec le même compte Google, ouvrez les réglages de Lumen → Lumen Pro et touchez « Restaurer l’achat ».",
      ],
      [
        "Comment revenir à mon ancien launcher ?",
        "Choisissez une autre application d'accueil dans les paramètres du téléphone (cherchez « application d'accueil »). Vous pouvez ensuite désinstaller Lumen, ce qui efface tout ce qu'il a enregistré sur votre téléphone.",
      ],
      [
        "La météo ne s'affiche pas.",
        "Activez la météo dans les réglages de Lumen et autorisez la position approximative. Les prévisions viennent de MET Norway ; la première peut donc prendre un instant.",
      ],
    ],
    contactTitle: "Contact",
    contactBody: "Questions, bugs ou idées :",
  },
  notFound: { title: "Page introuvable", body: "Cette page n'existe pas ou a été déplacée.", home: "Retour à Lumen" },
};

const it: SiteStrings = {
  metaTitle: "Lumen — una schermata home tranquilla per Android",
  metaDescription:
    "Lumen è un launcher Android minimalista: le tue app per nome, un indice A–Z, un orologio che disegni tu e strumenti per tenere lontane le distrazioni. Niente pubblicità, niente account, niente tracciamento.",
  nav: { features: "Funzioni", pro: "Pro", privacy: "Privacy", support: "Assistenza", language: "Lingua" },
  kicker: "Launcher per Android",
  heroSub:
    "Una schermata home minimalista: le tue app per nome, un orologio che disegni tu e niente che ti rubi l'attenzione. Niente pubblicità, niente account, niente tracciamento.",
  playSoon: "Presto su Google Play",
  phoneLabel: "La schermata home di Lumen",
  favorites: ["telefono", "messaggi", "fotocamera", "mappe", "musica"],
  featuresTitle: "Ogni cosa al suo posto",
  clock: {
    title: "Un orologio su misura",
    body: "Scegli un layout, un carattere, il suo spessore e il colore, e mettilo dove vuoi nella home. Oppure parti da uno stile pronto che imposta orologio, carattere, colore e sfondo in un colpo solo.",
  },
  wallpapers: {
    title: "Sfondi in armonia",
    body: "Sfondi disegnati che seguono il tuo colore d'accento e la modalità chiara o scura, collezioni selezionate o una tua foto con filtri. Per home e blocco, insieme o separati.",
  },
  screenTimeBody:
    "Il totale di oggi sta in un angolo della home. Toccalo per vedere la settimana, gli sblocchi e le app che si prendono il tuo tempo. Tutto viene calcolato sul tuo telefono.",
  search: {
    title: "Ricerca intelligente",
    body: "Scrivi o di' «sveglia 7:30», «timer 10» o «chiama mamma». Lumen lo capisce sul tuo telefono e lo fa.",
  },
  bedside: {
    title: "Modalità comodino",
    body: "Mentre il telefono si ricarica, il tuo orologio diventa un salvaschermo attenuato, con una tinta rossa notturna se vuoi.",
  },
  proTag: "Pro",
  privacy: {
    title: "Il tuo telefono, i tuoi dati",
    body: "Lumen non ha account, non mostra pubblicità e non include analisi né tracciamento. Le tue app, impostazioni e statistiche restano sul tuo telefono. Ogni autorizzazione è facoltativa e spiegata prima che Lumen la chieda.",
    link: "Leggi l'informativa sulla privacy",
  },
  footerMade: "Creato da FungiCode",
  footerFonts: "Carattere: Space Grotesk, SIL Open Font License",
  privacyTitle: "Informativa sulla privacy",
  privacyOnlyIn: "Per ora questa informativa è disponibile in inglese e spagnolo. Ecco la versione inglese.",
  support: {
    title: "Assistenza",
    intro: "Risposte alle domande frequenti. Se la tua non c'è, scrivici.",
    faq: [
      [
        "Come imposto Lumen come schermata home?",
        "Lumen te lo propone alla fine del benvenuto. Per farlo dopo, apri le impostazioni del telefono, cerca «app home» o «app predefinite» e scegli Lumen Launcher.",
      ],
      [
        "Perché Lumen chiede autorizzazioni?",
        "Ognuna è facoltativa e attiva una sola funzione: la posizione per il meteo, l'accesso alle notifiche per il player e per trattenere le notifiche delle app in pausa, l'accesso all'utilizzo per il tempo di utilizzo e i contatti per chiamare e scrivere dalla ricerca intelligente. Lumen funziona anche senza.",
      ],
      [
        "Ho comprato Pro. Come lo ritrovo su un nuovo telefono?",
        "Accedi con lo stesso account Google, apri le impostazioni di Lumen → Lumen Pro e tocca «Ripristina acquisto».",
      ],
      [
        "Come torno al mio launcher di prima?",
        "Scegli un'altra app home nelle impostazioni del telefono (cerca «app home»). Poi puoi disinstallare Lumen, che cancella tutto ciò che ha salvato sul telefono.",
      ],
      [
        "Il meteo non compare.",
        "Attiva il meteo nelle impostazioni di Lumen e consenti la posizione approssimativa. Le previsioni arrivano da MET Norway, quindi la prima può richiedere un momento.",
      ],
    ],
    contactTitle: "Contatti",
    contactBody: "Domande, bug o idee:",
  },
  notFound: { title: "Pagina non trovata", body: "Questa pagina non esiste o è stata spostata.", home: "Torna a Lumen" },
};

const pt: SiteStrings = {
  metaTitle: "Lumen — uma tela inicial tranquila para Android",
  metaDescription:
    "Lumen é um launcher minimalista para Android: seus apps pelo nome, um índice A–Z, um relógio que você desenha e ferramentas para afastar distrações. Sem anúncios, sem contas, sem rastreamento.",
  nav: { features: "Recursos", pro: "Pro", privacy: "Privacidade", support: "Suporte", language: "Idioma" },
  kicker: "Launcher para Android",
  heroSub:
    "Uma tela inicial minimalista: seus apps pelo nome, um relógio que você desenha e nada disputando sua atenção. Sem anúncios, sem contas, sem rastreamento.",
  playSoon: "Em breve no Google Play",
  phoneLabel: "A tela inicial do Lumen",
  favorites: ["telefone", "mensagens", "câmera", "mapas", "música"],
  featuresTitle: "Tudo no seu lugar",
  clock: {
    title: "Um relógio do seu jeito",
    body: "Escolha um layout, uma fonte, o peso e a cor, e coloque-o onde quiser na tela inicial. Ou comece com um estilo pronto que define relógio, fonte, cor e fundo de uma vez.",
  },
  wallpapers: {
    title: "Fundos que combinam",
    body: "Fundos desenhados que seguem sua cor de destaque e o modo claro ou escuro, coleções selecionadas ou sua própria foto com filtros. Na tela inicial e de bloqueio, juntos ou separados.",
  },
  screenTimeBody:
    "O total de hoje fica num canto da tela inicial. Toque nele para ver a semana, seus desbloqueios e os apps que levam seu tempo. Tudo é calculado no seu celular.",
  search: {
    title: "Busca inteligente",
    body: "Digite ou diga “alarme 7:30”, “timer 10” ou “ligar para a mãe”. O Lumen entende no seu celular e resolve.",
  },
  bedside: {
    title: "Modo mesa de cabeceira",
    body: "Enquanto o celular carrega, seu relógio vira um protetor de tela esmaecido, com tom vermelho noturno se você quiser.",
  },
  proTag: "Pro",
  privacy: {
    title: "Seu celular, seus dados",
    body: "O Lumen não tem contas, não mostra anúncios e não inclui análises nem rastreamento. Seus apps, ajustes e estatísticas ficam no seu celular. Cada permissão é opcional e explicada antes de o Lumen pedir.",
    link: "Leia a política de privacidade",
  },
  footerMade: "Feito por FungiCode",
  footerFonts: "Fonte: Space Grotesk, SIL Open Font License",
  privacyTitle: "Política de privacidade",
  privacyOnlyIn: "Por enquanto, esta política está disponível em inglês e espanhol. Esta é a versão em inglês.",
  support: {
    title: "Suporte",
    intro: "Respostas para as dúvidas mais comuns. Se a sua não estiver aqui, escreva para nós.",
    faq: [
      [
        "Como deixo o Lumen como tela inicial?",
        "O Lumen oferece isso no fim das boas-vindas. Para fazer depois, abra as configurações do celular, procure “app de início” ou “apps padrão” e escolha Lumen Launcher.",
      ],
      [
        "Por que o Lumen pede permissões?",
        "Cada uma é opcional e ativa um único recurso: a localização para o clima, o acesso às notificações para o player e para segurar as notificações de apps pausados, o acesso de uso para o tempo de tela e os contatos para ligar e mandar mensagens pela busca inteligente. O Lumen funciona sem nenhuma delas.",
      ],
      [
        "Comprei o Pro. Como tenho ele num celular novo?",
        "Entre com a mesma conta do Google, abra os ajustes do Lumen → Lumen Pro e toque em “Restaurar compra”.",
      ],
      [
        "Como volto para o meu launcher anterior?",
        "Escolha outro app de início nas configurações do celular (procure “app de início”). Depois você pode desinstalar o Lumen, o que apaga tudo o que ele guardou no seu celular.",
      ],
      [
        "O clima não aparece.",
        "Ative o clima nos ajustes do Lumen e permita a localização aproximada. A previsão vem do MET Norway, então a primeira pode levar um momento.",
      ],
    ],
    contactTitle: "Contato",
    contactBody: "Dúvidas, erros ou ideias:",
  },
  notFound: { title: "Página não encontrada", body: "Esta página não existe ou mudou de lugar.", home: "Voltar ao Lumen" },
};

const STRINGS: Record<Lang, SiteStrings> = { en, es, de, fr, it, pt };
export const siteStrings = (lang: Lang): SiteStrings => STRINGS[lang];
