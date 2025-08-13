import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsappButtonProps {
  text?: string;
  className?: string;
  bgColor?: string;
  textColor?: string;
  iconColor?: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({ 
  text = "Entre em contato agora", 
  className = "",
  bgColor = "bg-green-500 hover:bg-green-600",
  textColor = "text-white",
  iconColor = "text-white"
}) => {
  return (
    <a
      href="https://wa.me/5512988457268?text=Olá! Gostaria de fazer um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-2 ${bgColor} ${textColor} px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl ${className}`}
    >
      <MessageCircle className={`w-5 h-5 ${iconColor}`} />
      {text}
    </a>
  );
};

export default WhatsappButton;
