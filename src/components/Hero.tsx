import { useNavigation } from '../contexts/NavigationContext';
import { NavigationSection } from '../types';
import { DocumentScanner } from '../pages/DocumentScanner';
import { SignStamp } from '../pages/SignStamp';
import { BatchScanning } from '../pages/BatchScanning';
import { AdvancedFilters } from '../pages/AdvancedFilters';
import { ExportShare } from '../pages/ExportShare';

export const Hero = () => {
  const { activeSection } = useNavigation();

  const renderContent = () => {
    switch (activeSection) {
      case NavigationSection.SCANNER:
        return <DocumentScanner />;
      case NavigationSection.SIGN:
        return <SignStamp />;
      case NavigationSection.BATCH:
        return <BatchScanning />;
      case NavigationSection.FILTERS:
        return <AdvancedFilters />;
      case NavigationSection.EXPORT:
        return <ExportShare />;
      default:
        return <DocumentScanner />;
    }
  };

  return (
    <main className="min-h-screen bg-gray-200 pt-8 pb-32">
      {renderContent()}
    </main>
  );
};
