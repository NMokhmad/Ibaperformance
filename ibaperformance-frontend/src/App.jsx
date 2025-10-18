import { HelmetProvider } from 'react-helmet-async';
import AppRouter from './components/routing/AppRouter';

export default function App() {
  return (
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  );
}