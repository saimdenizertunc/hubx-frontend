export enum NavigationSection {
  SCANNER = 'SCANNER',
  SIGN = 'SIGN',
  BATCH = 'BATCH',
  FILTERS = 'FILTERS',
  EXPORT = 'EXPORT',
}

export type NavItemType = {
  id: NavigationSection;
  label: string;
  icon: string;
};
