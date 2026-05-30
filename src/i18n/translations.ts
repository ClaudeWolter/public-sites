export type Locale = 'fr' | 'de' | 'en';

export const translations = {
  fr: {
    siteTitle: 'FLE — Location de matériel',
    siteDescription: 'La Fédération Luxembourgeoise d\'Escrime met à disposition son matériel pour les clubs et associations.',
    nav: { home: 'Accueil', equipment: 'Matériel', contact: 'Contact', lang: 'Langue' },
    langNames: { fr: 'Français', de: 'Deutsch', en: 'English' },
    hero: {
      title: 'Location de matériel d\'escrime',
      subtitle: 'Équipez votre club ou votre événement avec le matériel de la FLE. Disponible pour les clubs membres et les associations.',
      ctaEquipment: 'Voir le matériel',
      ctaContact: 'Faire une demande',
    },
    features: [
      { title: 'Large catalogue', body: 'Armes, masques, lamés, matériel électrique et de compétition.' },
      { title: 'Pour les clubs', body: 'Tarifs préférentiels pour les clubs membres de la FLE.' },
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
        { id: 'armes', name: 'Armes', description: 'Épées, fleurets et sabres de compétition et d\'entraînement.' },
        { id: 'masques', name: 'Masques', description: 'Masques toutes armes et spécifiques sabre, tailles adulte et junior.' },
        { id: 'vetements', name: 'Vêtements de protection', description: 'Vestes, culottes, gants et plastrons.' },
        { id: 'lames', name: 'Lamés', description: 'Lamés épée et sabre homologués compétition.' },
        { id: 'electrique', name: 'Matériel électrique', description: 'Boîtiers de signalisation, enrouleurs et câbles de piste.' },
        { id: 'competition', name: 'Matériel de compétition', description: 'Pistes complètes, podiums et afficheurs pour tournois.' },
        { id: 'formation', name: 'Matériel de formation', description: 'Cibles, robots et accessoires pédagogiques.' },
        { id: 'divers', name: 'Divers', description: 'Sacs de transport, chariots et accessoires d\'entretien.' },
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
        equipment: 'Ex. : 10 épées, 10 masques, 2 enrouleurs…',
        message: 'Contexte de l\'événement, lieu, nombre de participants…',
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
    siteTitle: 'FLE — Ausrüstungsverleih',
    siteDescription: 'Der Luxemburgische Fechtverband stellt seine Ausrüstung für Vereine und Verbände zur Verfügung.',
    nav: { home: 'Startseite', equipment: 'Ausrüstung', contact: 'Kontakt', lang: 'Sprache' },
    langNames: { fr: 'Français', de: 'Deutsch', en: 'English' },
    hero: {
      title: 'Fechtausrüstung leihen',
      subtitle: 'Statten Sie Ihren Verein oder Ihre Veranstaltung mit der Ausrüstung der FLE aus. Verfügbar für Mitgliedsvereine und Verbände.',
      ctaEquipment: 'Ausrüstung ansehen',
      ctaContact: 'Anfrage stellen',
    },
    features: [
      { title: 'Großes Sortiment', body: 'Waffen, Masken, Fechtjacken, elektrisches und Wettkampfmaterial.' },
      { title: 'Für Vereine', body: 'Vorzugspreise für FLE-Mitgliedsvereine.' },
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
        { id: 'armes', name: 'Waffen', description: 'Degen, Florett und Säbel für Wettkampf und Training.' },
        { id: 'masques', name: 'Masken', description: 'Allwaffenmasken und Säbelmasken, Erwachsenen- und Jugendgrößen.' },
        { id: 'vetements', name: 'Schutzkleidung', description: 'Jacken, Hosen, Handschuhe und Unterziehwesten.' },
        { id: 'lames', name: 'Fechtjacken (Lames)', description: 'Zugelassene Degen- und Säbel-Lames für Wettkämpfe.' },
        { id: 'electrique', name: 'Elektromaterial', description: 'Signalboxen, Kabeltrommeln und Bahnkabel.' },
        { id: 'competition', name: 'Wettkampfmaterial', description: 'Komplette Bahnen, Podeste und Anzeigesysteme.' },
        { id: 'formation', name: 'Trainingsmaterial', description: 'Ziele, Trainingsroboter und Lehrmittel.' },
        { id: 'divers', name: 'Sonstiges', description: 'Transporttaschen, Wagen und Wartungszubehör.' },
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
        equipment: 'z.B.: 10 Degen, 10 Masken, 2 Kabeltrommeln…',
        message: 'Veranstaltungskontext, Ort, Teilnehmerzahl…',
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
    siteTitle: 'FLE — Equipment Rental',
    siteDescription: 'The Luxembourg Fencing Federation makes its equipment available for clubs and associations.',
    nav: { home: 'Home', equipment: 'Equipment', contact: 'Contact', lang: 'Language' },
    langNames: { fr: 'Français', de: 'Deutsch', en: 'English' },
    hero: {
      title: 'Fencing Equipment Rental',
      subtitle: 'Equip your club or event with FLE equipment. Available for member clubs and associations.',
      ctaEquipment: 'View Equipment',
      ctaContact: 'Make an Enquiry',
    },
    features: [
      { title: 'Large catalogue', body: 'Weapons, masks, lamés, electrical and competition equipment.' },
      { title: 'For clubs', body: 'Preferential rates for FLE member clubs.' },
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
        { id: 'armes', name: 'Weapons', description: 'Competition and training épées, foils and sabres.' },
        { id: 'masques', name: 'Masks', description: 'All-weapons and sabre-specific masks, adult and junior sizes.' },
        { id: 'vetements', name: 'Protective Clothing', description: 'Jackets, breeches, gloves and plastrons.' },
        { id: 'lames', name: 'Lamés', description: 'Competition-approved épée and sabre lamés.' },
        { id: 'electrique', name: 'Electrical Equipment', description: 'Scoring boxes, reels and piste cables.' },
        { id: 'competition', name: 'Competition Equipment', description: 'Complete pistes, podiums and scoreboards for tournaments.' },
        { id: 'formation', name: 'Training Equipment', description: 'Targets, training robots and teaching aids.' },
        { id: 'divers', name: 'Miscellaneous', description: 'Carry bags, trolleys and maintenance accessories.' },
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
        equipment: 'e.g. 10 épées, 10 masks, 2 reels…',
        message: 'Event context, venue, number of participants…',
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
