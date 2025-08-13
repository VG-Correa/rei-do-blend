import { useState } from 'react';
import { PhoneCall, Mail, MapPin, X } from 'lucide-react';
import { config } from '../core/config';

interface ContatoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContatoModal = ({ isOpen, onClose }: ContatoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">Informações de Contato</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <PhoneCall className="text-red-900" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Telefone/WhatsApp</h4>
                <p className="text-gray-600">(11) 4321-1234</p>
                <p className="text-gray-600">{config.social.whatsapp}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Mail className="text-red-900" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">E-mail</h4>
                <p className="text-gray-600">{config.social.email}</p>
                <p className="text-gray-600">comercial@reidoblend.com.br</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <MapPin className="text-red-900" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Endereço</h4>
                <p className="text-gray-600">{config.social.endereco}</p>
                <p className="text-gray-600">São Paulo - SP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BotaoContato = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="group bg-gradient-to-r from-yellow-400 to-amber-500 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-amber-400 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center"
      >
        Entre em Contato Agora
      </button>
      <ContatoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
