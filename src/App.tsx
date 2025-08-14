import './App.css';
import AppRoutes from './routes';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <AppRoutes />
      <SpeedInsights />
    </HelmetProvider>
  );
}

export default App
