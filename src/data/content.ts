export interface Review {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  serviceType: 'depannage' | 'tableau' | 'renovation' | 'autre';
  comment: string;
  highlight: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  image?: string;
  isPopular?: boolean;
  ctaText: string;
  typicalDelay: string;
}

export interface CommuneInfo {
  name: string;
  postalCode: string;
  estimatedArrival: string;
  sector: string;
  description: string;
}

export const BUSINESS_INFO = {
  name: "KPC ELEC",
  tagline: "Électricien à Grenoble & Agglomération",
  phone: "06 50 83 31 85",
  phoneRaw: "tel:0650833185",
  phoneFormatted: "06 50 83 31 85",
  address: "66 Av. Jean Perrot, 38100 Grenoble",
  hours: "Lundi au vendredi : jusqu'à 18h00 (Dépannages d'urgence)",
  foundedYear: 2018,
  googleRating: 5.0,
  googleReviewCount: 53,
  email: "contact@kpc-elec-grenoble.fr",
  siret: "841 893 214 00018",
  decennale: "Assurance Décennale & Responsabilité Civile Professionnelle à jour",
  norm: "NF C 15-100 & Conformité Consuel",
};

export const REASSURANCE_BADGES = [
  {
    icon: "star",
    title: "Note Google 5.0 / 5",
    subtitle: "53 avis clients 100% vérifiés",
  },
  {
    icon: "map-pin",
    title: "Intervention rapide",
    subtitle: "Grenoble, Meylan et tout le bassin",
  },
  {
    icon: "file-check",
    title: "Devis gratuit sous 24h",
    subtitle: "Tarifs clairs & Garantie décennale",
  },
];

export const ENGAGEMENTS = [
  {
    number: "01",
    title: "Ponctualité & Réactivité",
    lead: "Un diagnostic précis sans perte de temps.",
    details:
      "Une panne n'attend pas. Nous convenons d'un créneau précis et le respectons scrupuleusement. À notre arrivée, notre équipement de diagnostic identifie la cause racine en quelques minutes.",
    stat: "98% d'arrivées à l'heure",
    quote: "« Technicien à l'heure, détecte aussitôt la cause et remet tout en ordre. »",
  },
  {
    number: "02",
    title: "Propreté rigoureuse",
    lead: "Votre intérieur laissé aussi propre qu'à notre arrivée.",
    details:
      "C'est l'argument numéro un cité par nos clients : nous protégeons systématiquement vos meubles et sols (bâches, surchaussures), et nous aspirons intégralement le chantier avant de repartir.",
    stat: "100% chantiers nettoyés",
    quote: "« Le travail est bien fait et le chantier laissé d'une propreté rigoureuse. »",
  },
  {
    number: "03",
    title: "Sécurité & Normes NF C 15-100",
    lead: "Travaux certifiés aux normes avec garantie décennale.",
    details:
      "Toutes nos installations respectent la norme NF C 15-100 en vigueur : disjoncteurs différentiels 30mA calibrés, mise à la terre mesurée, matériaux de marques réputées (Schneider, Legrand, Hager).",
    stat: "10 ans de garantie décennale",
    quote: "« Rénovation complète aux normes, sérénité totale pour notre famille. »",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "depannage",
    number: "01",
    title: "Dépannage d’urgence",
    tagline: "Intervention rapide sur panne totale ou partielle",
    description:
      "Recherche de panne immédiate et remise en sécurité de votre réseau électrique domestique ou professionnel.",
    bullets: [
      "Panne totale ou partielle de courant",
      "Diagnostic court-circuit & disjoncteur qui saute",
      "Réparation chauffe-eau / ballon d'eau chaude sans eau chaude",
      "Remplacement d'urgence de prises et câbles brûlés",
    ],
    isPopular: true,
    ctaText: "Urgence : Appeler le 06 50 83 31 85",
    typicalDelay: "Intervention sous 30 à 45 minutes",
  },
  {
    id: "tableau",
    number: "02",
    title: "Rénovation de tableau électrique",
    tagline: "Remplacement et mise en sécurité aux normes",
    description:
      "Modernisation complète du cœur de votre installation pour éliminer les risques d'incendie et d'électrocution.",
    bullets: [
      "Remplacement de vieux tableaux à fusibles ou porcelaine",
      "Mise en conformité et sécurisation NF C 15-100",
      "Pose de disjoncteurs différentiels 30mA haute sensibilité",
      "Repérage propre et étiquetage clair de chaque circuit",
    ],
    image: "/src/assets/images/service_panel_renovation_1793279342772.jpg",
    ctaText: "Demander un diagnostic tableau",
    typicalDelay: "Devis sous 24h · Chantier 1/2 journée",
  },
  {
    id: "renovation",
    number: "03",
    title: "Rénovation complète & Électricité générale",
    tagline: "Habitat individuel, appartements & cuisines",
    description:
      "Conception et réalisation sur-mesure de l'électricité de votre logement neuf ou en cours de réhabilitation.",
    bullets: [
      "Alimentation cuisine & gros électroménager (plaque induction, four)",
      "Ajout de prises de courant, interrupteurs et variateurs",
      "Éclairages modernes spots LED encastrés et bandeaux lumineux",
      "Rénovation complète d'appartements et maisons anciennes",
    ],
    image: "/src/assets/images/service_home_renovation_1793279343434.jpg",
    ctaText: "Étudier mon projet de rénovation",
    typicalDelay: "Visite sur place sous 48h",
  },
  {
    id: "tertiaire",
    number: "04",
    title: "Solutions Professionnels & Tertiaire",
    tagline: "Commerces, bureaux et locaux d'activité",
    description:
      "Installations et contrats de maintenance pour garantir la continuité d'activité de votre entreprise à Grenoble.",
    bullets: [
      "Maintenance électrique préventive et corrective pour commerces",
      "Câblage réseau informatique, baies de brassage & prises RJ45",
      "Conception et pose de réseaux électriques complets",
      "Mise en conformité ERP (Éclairage de Sécurité BAES)",
    ],
    ctaText: "Devis pro & tertiaire",
    typicalDelay: "Audit personnalisé sur site",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Jean-Pierre S.",
    location: "Grenoble centre (38000)",
    date: "Il y a 3 semaines",
    rating: 5,
    serviceType: "renovation",
    comment:
      "Intervention rapide et efficace effectuée avec un grand professionnalisme. Le travail est bien fait et le chantier laissé d'une propreté rigoureuse.",
    highlight: "Chantier d'une propreté rigoureuse",
  },
  {
    id: "2",
    name: "Annemarie H.",
    location: "Meylan (38240)",
    date: "Il y a 1 mois",
    rating: 5,
    serviceType: "depannage",
    comment:
      "Extra ! Technicien à l'heure, détecte aussitôt la panne d'eau chaude, m'explique la cause et remet tout en ordre.",
    highlight: "Détecte aussitôt la panne d'eau chaude",
  },
  {
    id: "3",
    name: "Marc & Sophie L.",
    location: "Saint-Martin-d’Hères (38400)",
    date: "Il y a 2 mois",
    rating: 5,
    serviceType: "renovation",
    comment:
      "Rénovation complète de l'électricité de notre cuisine et mise aux normes du tableau. Travail soigné, conseils avisés et délais respectés au millimètre.",
    highlight: "Délais respectés au millimètre & conseils avisés",
  },
  {
    id: "4",
    name: "Laurent D.",
    location: "Grenoble Foch / Jean Perrot",
    date: "Il y a 2 mois",
    rating: 5,
    serviceType: "tableau",
    comment:
      "Remplacement complet de notre ancien tableau porte-fusibles par un coffret sécurisé aux normes. Devis transparent, travail irréprochable et explications très claires.",
    highlight: "Devis transparent & travail irréprochable",
  },
  {
    id: "5",
    name: "Karine B.",
    location: "Échirolles (38130)",
    date: "Il y a 3 mois",
    rating: 5,
    serviceType: "depannage",
    comment:
      "Disjonction totale un vendredi soir. KPC ELEC est intervenu très rapidement, a localisé le court-circuit sur une ligne de volet roulant et a tout sécurisé. Un vrai soulagement !",
    highlight: "Intervention d'urgence salvatrice un vendredi soir",
  },
  {
    id: "6",
    name: "Cabinet Médical V.",
    location: "La Tronche (38700)",
    date: "Il y a 4 mois",
    rating: 5,
    serviceType: "autre",
    comment:
      "Mise aux normes de nos éclairages de sécurité et ajout de circuits dédiés pour nos équipements médicaux. Ponctualité exemplaire et aucune gêne pour nos patients.",
    highlight: "Ponctualité exemplaire & respect du lieu",
  },
];

export const COMMUNES: CommuneInfo[] = [
  {
    name: "Grenoble",
    postalCode: "38000 / 38100",
    estimatedArrival: "15 - 25 min",
    sector: "Centre, Île Verte, Foch, Championnet, Jean Perrot, Eaux-Claires",
    description: "Proximité immédiate de notre siège Avenue Jean Perrot.",
  },
  {
    name: "Meylan & La Tronche",
    postalCode: "38240 / 38700",
    estimatedArrival: "20 - 30 min",
    sector: "Grésivaudan, Hôpital Nord, Haut-Meylan, Buclos",
    description: "Intervention rapide via la rocade sud et boucle de l'Isère.",
  },
  {
    name: "Saint-Martin-d’Hères",
    postalCode: "38400",
    estimatedArrival: "15 - 25 min",
    sector: "Campus universitaire, Neyrpic, Galochère, Renaudie",
    description: "Accès direct en quelques minutes depuis Jean Perrot.",
  },
  {
    name: "Échirolles & Pont-de-Claix",
    postalCode: "38130 / 38800",
    estimatedArrival: "20 - 30 min",
    sector: "Comboire, Centre-Ville, Denis Papin, Les Îles",
    description: "Desserte rapide de tout le sud de l'agglomération.",
  },
  {
    name: "Fontaine & Sassenage",
    postalCode: "38600 / 38360",
    estimatedArrival: "20 - 35 min",
    sector: "Rive gauche Drac, Louis Maisonnat, Argentine, Falaise",
    description: "Déplacement fluide pour dépannages et rénovations.",
  },
  {
    name: "Saint-Égrève & Corenc",
    postalCode: "38120 / 38700",
    estimatedArrival: "25 - 35 min",
    sector: "Cap des Hés, Rocher de Meylan, Pied de Chartreuse",
    description: "Interventions régulières pour résidences et pavillons.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "En combien de temps pouvez-vous intervenir pour une urgence à Grenoble ?",
    answer:
      "Pour une panne totale, un tableau qui disjoncte ou une coupure de chauffe-eau, nous intervenons généralement en 30 à 45 minutes sur Grenoble intramuros et l'agglomération proche. Appelez directement le 06 50 83 31 85.",
  },
  {
    question: "Comment se déroule la demande de devis ?",
    answer:
      "Le devis est 100% gratuit et sans engagement. Pour un dépannage simple ou un remplacement de tableau, une estimation précise vous est fournie sous 24h. Pour une rénovation globale, nous réalisons une visite technique sur place pour évaluer l'état du réseau.",
  },
  {
    question: "Vos travaux sont-ils couverts par une garantie décennale ?",
    answer:
      "Oui, absolument. Tous les chantiers réalisés par KPC ELEC bénéficient de l'assurance décennale obligatoire et de la responsabilité civile professionnelle. Toutes nos installations respectent rigoureusement la norme NF C 15-100.",
  },
  {
    question: "Laissez-vous le logement propre après les travaux ?",
    answer:
      "C'est un de nos engagements fondateurs : nous protégeons les zones de passage, utilisons des outils avec aspiration intégrée pour les saignées ou perçages, et passons systématiquement l'aspirateur industriel avant notre départ.",
  },
];
