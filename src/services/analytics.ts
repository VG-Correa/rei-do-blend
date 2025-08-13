import ReactGA from 'react-ga4';

export const TRACKING_ID = "G-XXXXXXXX"; // Substitua pelo seu ID do GA4

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const logPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

export const logButtonClick = (buttonName: string, section: string) => {
  logEvent('Button Click', buttonName, section);
};

export const logFormSubmission = (formName: string, status: 'success' | 'error') => {
  logEvent('Form Submission', formName, status);
};

export const logProductView = (productName: string, productId: string) => {
  logEvent('Product View', productName, productId);
};

export const logWhatsAppClick = (buttonLocation: string) => {
  logEvent('WhatsApp Click', 'Contact Button', buttonLocation);
};
