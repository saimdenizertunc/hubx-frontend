import { NavigationSection } from '../types';
import documentscanner from '../assets/icons/documentscanner.svg';
import signstamp from '../assets/icons/signstamp.svg';
import batchscanning from '../assets/icons/batchscanning.svg';
import advancedfilters from '../assets/icons/advancedfilters.svg';
import exportshare from '../assets/icons/exportshare.svg';

export const NAV_ITEMS = [
  {
    id: NavigationSection.SCANNER,
    label: 'Document Scanner',
    icon: documentscanner,
  },
  {
    id: NavigationSection.SIGN,
    label: 'Sign & Stamp',
    icon: signstamp,
  },
  {
    id: NavigationSection.BATCH,
    label: 'Batch Scanning',
    icon: batchscanning,
  },
  {
    id: NavigationSection.FILTERS,
    label: 'Advanced Filters',
    icon: advancedfilters,
  },
  {
    id: NavigationSection.EXPORT,
    label: 'Export & Share',
    icon: exportshare,
  },
];
