import React from 'react';
import { NavigationSection, NavItemType } from '../types';
import { useNavigation } from '../contexts/NavigationContext';
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
  const { activeSection, setActiveSection } = useNavigation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-500">
      <ul className="flex justify-between max-w-7xl mx-auto">
        {NAV_ITEMS.map((item: NavItemType) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveSection(item.id)}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            >
              <div className="nav-icon-wrapper">
                <img src={item.icon} alt={item.label} className="nav-icon" />
              </div>
              <span className="font-sf-pro text-base">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
