import './App.css';
import AppRoutes from './routes';
import WhatsappButton from './components/WhatsappButton';
import { SpeedInsights } from '@vercel/speed-insights/next';

function App() {
  return (
    <>
      <AppRoutes />
      <WhatsappButton />
      <SpeedInsights />
    </>
  );
}

export default App
