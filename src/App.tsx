import './App.css';
import AppRoutes from './routes';
import { SpeedInsights } from '@vercel/speed-insights/next';

function App() {
  return (
    <>
      <AppRoutes />
      <SpeedInsights />
    </>
  );
}

export default App
