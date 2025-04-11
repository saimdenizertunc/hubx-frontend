import React from 'react';
import { NavigationSection, NavItemType } from '../types';
import documentScannerIcon from '../assets/icons/documentscanner.svg';
import signStampIcon from '../assets/icons/signstamp.svg';
import batchScanningIcon from '../assets/icons/batchscanning.svg';
import advancedFiltersIcon from '../assets/icons/advancedfilters.svg';
import exportShareIcon from '../assets/icons/exportshare.svg';

const NAV_ITEMS: NavItemType[] = [
  {
    id: NavigationSection.SCANNER,
    label: 'Document Scanner',
    icon: documentScannerIcon,
  },
  {
    id: NavigationSection.SIGN,
    label: 'Sign & Stamp',
    icon: signStampIcon,
  },
  {
    id: NavigationSection.BATCH,
    label: 'Batch Scanning',
    icon: batchScanningIcon,
  },
  {
    id: NavigationSection.FILTERS,
    label: 'Advanced Filters',
    icon: advancedFiltersIcon,
  },
  {
    id: NavigationSection.EXPORT,
    label: 'Export & Share',
    icon: exportShareIcon,
  },
];

export const Navigation = () => {
  return (
    <nav>
      <ul>
        {NAV_ITEMS.map((item: NavItemType) => (
          <li key={item.id}>
            <img src={item.icon} alt={item.label} />
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};
