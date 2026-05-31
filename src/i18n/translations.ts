export type Locale = 'fr' | 'de' | 'en';

export const translations = {
  fr: {
    siteTitle: 'FLE — Location de matériel de tournoi',
    siteDescription: 'La Fédération Luxembourgeoise d\'Escrime loue son matériel technique de tournoi aux clubs et organisateurs d\'événements.',
    nav: { home: 'Accueil', equipment: 'Matériel', contact: 'Contact', lang: 'Langue' },
    langNames: { fr: 'Français', de: 'Deutsch', en: 'English' },
    hero: {
      title: 'Location de matériel de tournoi',
      subtitle: 'Organisez vos compétitions avec le matériel technique de la FLE. Boîtiers de signalisation, enrouleurs, afficheurs et équipement AV disponibles à la location.',
      ctaEquipment: 'Voir le matériel',
      ctaContact: 'Faire une demande',
    },
    features: [
      { title: 'Matériel de tournoi', body: 'Boîtiers de signalisation, enrouleurs, câbles, afficheurs et équipement AV.' },
      { title: 'Pour les organisateurs', body: 'Tarifs préférentiels pour les clubs membres de la FLE.' },
      { title: 'Simple et rapide', body: 'Remplissez le formulaire, notre équipe vous répond sous 48h.' },
    ],
    howItWorks: {
      title: 'Comment ça marche',
      steps: [
        { n: '1', title: 'Parcourez', body: 'Consultez notre catalogue de matériel disponible.' },
        { n: '2', title: 'Demandez', body: 'Remplissez le formulaire avec vos dates et besoins.' },
        { n: '3', title: 'Confirmez', body: 'Notre équipe confirme la disponibilité et les modalités.' },
      ],
    },
    equipment: {
      pageTitle: 'Matériel disponible',
      pageSubtitle: 'Parcourez notre catalogue. Pour connaître la disponibilité et les tarifs, utilisez le formulaire de contact.',
      availabilityNote: 'Disponibilité et tarifs sur demande — contactez-nous.',
      ctaEnquire: 'Demander ce matériel',
      categories: [
        { id: 'scoring', name: 'Boîtiers de signalisation', description: 'Appareils de signalisation FIE homologués pour compétitions toutes armes.' },
        { id: 'reels', name: 'Enrouleurs', description: 'Enrouleurs de piste pour épée, fleuret et sabre.' },
        { id: 'cables', name: 'Câbles et connecteurs', description: 'Fils de corps, fils d\'armes, câbles de piste et adaptateurs.' },
        { id: 'displays', name: 'Afficheurs et tableaux', description: 'Afficheurs de score pour le public et tableaux d\'honneur de tournoi.' },
        { id: 'av', name: 'Équipement AV', description: 'Projecteurs, écrans, système de sonorisation et matériel de diffusion.' },
        { id: 'power', name: 'Distribution électrique', description: 'Rallonges, multiprises, onduleurs et tableaux de distribution.' },
      ],
    },
    contact: {
      pageTitle: 'Formulaire de demande',
      pageSubtitle: 'Remplissez ce formulaire pour demander du matériel. Nous vous répondrons sous 48 heures ouvrables.',
      fields: {
        name: 'Nom et prénom',
        club: 'Club / Organisation',
        dateFrom: 'Date de début',
        dateTo: 'Date de fin',
        equipment: 'Matériel souhaité',
        message: 'Informations complémentaires',
      },
      placeholders: {
        name: 'Jean Dupont',
        club: 'Club d\'Escrime de Luxembourg',
        equipment: 'Ex. : 6 boîtiers, 12 enrouleurs, 2 afficheurs, système sono…',
        message: 'Contexte de l\'événement, lieu, nombre de pistes, nombre de participants…',
      },
      submit: 'Envoyer la demande',
      successTitle: 'Demande envoyée !',
      successBody: 'Nous avons bien reçu votre demande. Notre équipe vous contactera sous 48 heures ouvrables à l\'adresse fournie.',
      errorBody: 'Une erreur est survenue. Veuillez réessayer ou écrire directement à equipment@flearmory.lu',
      required: 'Champ obligatoire',
    },
    footer: {
      contact: 'Contact',
      email: 'equipment@flearmory.lu',
      rights: '© {year} Fédération Luxembourgeoise d\'Escrime. Tous droits réservés.',
      agpl: 'Code source disponible sous licence AGPL-3.0',
    },
  },
  de: {
    siteTitle: 'FLE — Verleih von Turniertechnik',
    siteDescription: 'Der Luxemburgische Fechtverband verleiht seine Turniertechnik an Vereine und Veranstalter.',
    nav: { home: 'Startseite', equipment: 'Ausrüstung', contact: 'Kontakt', lang: 'Sprache' },
    langNames: { fr: 'Français', de: 'Deutsch', en: 'English' },
    hero: {
      title: 'Turniertechnik leihen',
      subtitle: 'Organisieren Sie Ihre Wettkämpfe mit der Technik der FLE. Signalboxen, Kabeltrommeln, Anzeigesysteme und AV-Ausrüstung zum Verleih.',
      ctaEquipment: 'Ausrüstung ansehen',
      ctaContact: 'Anfrage stellen',
    },
    features: [
      { title: 'Turniertechnik', body: 'Signalboxen, Kabeltrommeln, Kabel, Anzeigesysteme und AV-Ausrüstung.' },
      { title: 'Für Veranstalter', body: 'Vorzugspreise für FLE-Mitgliedsvereine.' },
      { title: 'Einfach und schnell', body: 'Formular ausfüllen, unser Team antwortet innerhalb von 48 Stunden.' },
    ],
    howItWorks: {
      title: 'So funktioniert es',
      steps: [
        { n: '1', title: 'Stöbern', body: 'Schauen Sie sich unseren Ausrüstungskatalog an.' },
        { n: '2', title: 'Anfragen', body: 'Füllen Sie das Formular mit Ihren Terminen und Bedürfnissen aus.' },
        { n: '3', title: 'Bestätigen', body: 'Unser Team bestätigt die Verfügbarkeit und die Modalitäten.' },
      ],
    },
    equipment: {
      pageTitle: 'Verfügbare Ausrüstung',
      pageSubtitle: 'Durchsuchen Sie unseren Katalog. Für Verfügbarkeit und Preise nutzen Sie bitte das Kontaktformular.',
      availabilityNote: 'Verfügbarkeit und Preise auf Anfrage — kontaktieren Sie uns.',
      ctaEnquire: 'Diese Ausrüstung anfragen',
      categories: [
        { id: 'scoring', name: 'Signalboxen', description: 'FIE-zugelassene Signalboxen für alle Waffen.' },
        { id: 'reels', name: 'Kabeltrommeln', description: 'Kabeltrommeln für Degen-, Florett- und Säbelbahnen.' },
        { id: 'cables', name: 'Kabel und Stecker', description: 'Körperkabel, Waffenkabel, Bahnkabel und Adapter.' },
        { id: 'displays', name: 'Anzeigesysteme', description: 'Zuschauer-Scoreanzeigen und Turnier-Ergebnistafeln.' },
        { id: 'av', name: 'AV-Ausrüstung', description: 'Projektoren, Leinwände, Beschallungsanlage und Streaming-Equipment.' },
        { id: 'power', name: 'Stromverteilung', description: 'Verlängerungskabel, Steckdosenleisten, USV und Verteiler.' },
      ],
    },
    contact: {
      pageTitle: 'Anfrage stellen',
      pageSubtitle: 'Füllen Sie dieses Formular aus, um Ausrüstung anzufragen. Wir antworten innerhalb von 48 Werkstagsstunden.',
      fields: {
        name: 'Vor- und Nachname',
        club: 'Verein / Organisation',
        dateFrom: 'Startdatum',
        dateTo: 'Enddatum',
        equipment: 'Gewünschte Ausrüstung',
        message: 'Zusätzliche Informationen',
      },
      placeholders: {
        name: 'Max Mustermann',
        club: 'Fechtclub Luxemburg',
        equipment: 'z.B.: 6 Signalboxen, 12 Kabeltrommeln, 2 Anzeigesysteme, Beschallung…',
        message: 'Veranstaltungskontext, Ort, Anzahl Bahnen, Teilnehmerzahl…',
      },
      submit: 'Anfrage absenden',
      successTitle: 'Anfrage gesendet!',
      successBody: 'Wir haben Ihre Anfrage erhalten. Unser Team wird Sie innerhalb von 48 Werkstagsstunden kontaktieren.',
      errorBody: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie direkt an equipment@flearmory.lu',
      required: 'Pflichtfeld',
    },
    footer: {
      contact: 'Kontakt',
      email: 'equipment@flearmory.lu',
      rights: '© {year} Fédération Luxembourgeoise d\'Escrime. Alle Rechte vorbehalten.',
      agpl: 'Quellcode verfügbar unter AGPL-3.0-Lizenz',
    },
  },
  en: {
    siteTitle: 'FLE — Tournament Equipment Rental',
    siteDescription: 'The Luxembourg Fencing Federation rents tournament infrastructure to clubs and event organisers.',
    nav: { home: 'Home', equipment: 'Equipment', contact: 'Contact', lang: 'Language' },
    langNames: { fr: 'Français', de: 'Deutsch', en: 'English' },
    hero: {
      title: 'Tournament Equipment Rental',
      subtitle: 'Run your competitions with FLE\'s technical infrastructure. Scoring machines, reels, displays and AV equipment available for hire.',
      ctaEquipment: 'View Equipment',
      ctaContact: 'Make an Enquiry',
    },
    features: [
      { title: 'Tournament tech', body: 'Scoring machines, reels, cables, displays and AV equipment.' },
      { title: 'For organisers', body: 'Preferential rates for FLE member clubs.' },
      { title: 'Simple and fast', body: 'Fill in the form, our team responds within 48 hours.' },
    ],
    howItWorks: {
      title: 'How it works',
      steps: [
        { n: '1', title: 'Browse', body: 'Browse our catalogue of available equipment.' },
        { n: '2', title: 'Enquire', body: 'Fill in the form with your dates and requirements.' },
        { n: '3', title: 'Confirm', body: 'Our team confirms availability and arrangements.' },
      ],
    },
    equipment: {
      pageTitle: 'Available Equipment',
      pageSubtitle: 'Browse our catalogue. For availability and pricing, please use the contact form.',
      availabilityNote: 'Availability and pricing on request — contact us.',
      ctaEnquire: 'Enquire about this equipment',
      categories: [
        { id: 'scoring', name: 'Scoring Machines', description: 'FIE-approved scoring units for all weapons.' },
        { id: 'reels', name: 'Reels', description: 'Piste reels for épée, foil and sabre.' },
        { id: 'cables', name: 'Cables & Connectors', description: 'Body wires, weapon cords, piste cables and adapters.' },
        { id: 'displays', name: 'Displays & Scoreboards', description: 'Audience-facing score displays and tournament result boards.' },
        { id: 'av', name: 'AV Equipment', description: 'Projectors, screens, PA systems and streaming equipment.' },
        { id: 'power', name: 'Power Distribution', description: 'Extension leads, surge-protected strips, UPS units and distribution boards.' },
      ],
    },
    contact: {
      pageTitle: 'Enquiry Form',
      pageSubtitle: 'Fill in this form to request equipment. We will respond within 48 working hours.',
      fields: {
        name: 'Full name',
        club: 'Club / Organisation',
        dateFrom: 'Start date',
        dateTo: 'End date',
        equipment: 'Equipment needed',
        message: 'Additional information',
      },
      placeholders: {
        name: 'Jane Smith',
        club: 'Luxembourg Fencing Club',
        equipment: 'e.g. 6 scoring machines, 12 reels, 2 displays, PA system…',
        message: 'Event context, venue, number of pistes, number of participants…',
      },
      submit: 'Send enquiry',
      successTitle: 'Enquiry sent!',
      successBody: 'We have received your enquiry. Our team will contact you within 48 working hours.',
      errorBody: 'An error occurred. Please try again or write directly to equipment@flearmory.lu',
      required: 'Required field',
    },
    footer: {
      contact: 'Contact',
      email: 'equipment@flearmory.lu',
      rights: '© {year} Fédération Luxembourgeoise d\'Escrime. All rights reserved.',
      agpl: 'Source code available under AGPL-3.0 licence',
    },
  },
} as const;

export function t(locale: Locale, path: string): string {
  const keys = path.split('.');
  let current: unknown = translations[locale];
  for (const key of keys) {
    if (typeof current !== 'object' || current === null) return path;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === 'string' ? current : path;
}
