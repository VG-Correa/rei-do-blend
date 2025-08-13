import React from 'react';

const WhatsappButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/SEUNUMEROAQUI"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1000,
        background: '#25D366',
        borderRadius: '50%',
        width: 56,
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
      }}
      aria-label="Fale conosco no WhatsApp"
    >
      <span style={{fontSize: 32, color: 'white'}}>💬</span>
    </a>
  );
};

export default WhatsappButton;
