import type { Locale } from './translations';

export const routes: Record<Locale, { equipment: string; contact: string }> = {
  fr: { equipment: 'materiel',    contact: 'contact' },
  de: { equipment: 'ausruestung', contact: 'kontakt' },
  en: { equipment: 'equipment',   contact: 'contact' },
};
