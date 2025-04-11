import { NavigationProvider } from './contexts/NavigationContext';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';

export function App() {
  return (
    <NavigationProvider>
      <Hero />
      <Navigation />
    </NavigationProvider>
  );
}
