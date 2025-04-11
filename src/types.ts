export enum NavigationSection {
  SCANNER = 'scanner',
  SIGN = 'sign',
  BATCH = 'batch',
  FILTERS = 'filters',
  EXPORT = 'export',
}

export interface SectionText {
  title: string;
  tagline: string;
  description: string[];
  cta: string;
}

export const SECTION_TEXT: Record<NavigationSection, SectionText> = {
  [NavigationSection.SCANNER]: {
    title: 'DOCUMENT SCANNER',
    tagline: 'Scan with Ease',
    description: [
      'Scan any document instantly with your mobile device in just a few steps.',
      'Save files in multiple formats: PDF, JPG, ZIP, TXT, and Word.',
    ],
    cta: 'Learn More',
  },
  [NavigationSection.SIGN]: {
    title: 'SIGN & STAMP',
    tagline: 'One-Tap Focus',
    description: [
      'Draw, scan, or import your signature and stamp with a simple touch.',
      'Sign and stamp any document with just a single tap.',
    ],
    cta: 'Learn More',
  },
  [NavigationSection.BATCH]: {
    title: 'BATCH SCANNING',
    tagline: 'Multiple Page Scan',
    description: [
      'Scan multiple pages or documents in multiple-scanning mode.',
      'Combine all scans into a single document.',
    ],
    cta: 'Learn More',
  },
  [NavigationSection.FILTERS]: {
    title: 'ADVANCED FILTERS',
    tagline: 'Unique Filters',
    description: [
      'Apply advanced filters to enhance document quality.',
      'Customize brightness and contrast manually using custom filters.',
    ],
    cta: 'Learn More',
  },
  [NavigationSection.EXPORT]: {
    title: 'EXPORT & SHARE',
    tagline: 'All-Round Conversion',
    description: [
      'Export scans in various formats: PDF, JPG, ZIP, TXT, and Word.',
    ],
    cta: 'Learn More',
  },
};
