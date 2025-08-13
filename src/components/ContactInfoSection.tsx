import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '../core/contact.mock';

export const ContactInfoSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Informações de Contato</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="bg-yellow-400 p-3 rounded-full mb-2">
              <Phone className="text-red-900" size={24} />
            </div>
            <div className="text-white font-semibold">Telefone/WhatsApp</div>
            <div className="text-white/80">{contactInfo.phone.main}</div>
            <div className="text-white/80">{contactInfo.phone.secondary}</div>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="bg-yellow-400 p-3 rounded-full mb-2">
              <Mail className="text-red-900" size={24} />
            </div>
            <div className="text-white font-semibold">E-mail</div>
            <div className="text-white/80">{contactInfo.email.contact}</div>
            <div className="text-white/80">{contactInfo.email.sales}</div>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="bg-yellow-400 p-3 rounded-full mb-2">
              <MapPin className="text-red-900" size={24} />
            </div>
            <div className="text-white font-semibold">Endereço</div>
            <div className="text-white/80">{contactInfo.address.street}</div>
            <div className="text-white/80">{contactInfo.address.city}, {contactInfo.address.postalCode}</div>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="bg-yellow-400 p-3 rounded-full mb-2">
              <Clock className="text-red-900" size={24} />
            </div>
            <div className="text-white font-semibold">Horário de Atendimento</div>
            <div className="text-white/80">{contactInfo.businessHours.weekdays}</div>
            <div className="text-white/80">{contactInfo.businessHours.saturday}</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-white mb-4">🚚 Área de Entrega</h3>
        <p className="text-white/90 mb-4">
          Atendemos toda a Grande São Paulo com entrega expressa em 24h
        </p>
        <div className="grid grid-cols-2 gap-2 text-sm text-white/80 max-w-xs mx-auto">
          {contactInfo.deliveryAreas.map((area, index) => (
            <div key={index}>• {area}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
