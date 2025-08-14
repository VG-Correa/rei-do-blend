// src/pages/LandingPage.tsx
import { ChevronDown, Users, Award, Check } from 'lucide-react';
import { ProdutosSection } from '../components/ProdutosSection';
import { FormularioOrcamento } from '../components/FormularioOrcamento';
import WhatsappButton from '../components/WhatsappButton';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import LogoTransparente from '../assets/Logo com fundo transparente.png';
import { Head } from '../components/SEO/Head';
import { organizationSchema, localBusinessSchema } from '../schemas';
import { logPageView, logButtonClick } from '../services/analytics';
import { useEffect } from 'react';

export default function LandingPage() {
  useEffect(() => {
    logPageView('/');
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    logButtonClick('Navigation', sectionId);
  };

  return (
    <>
      <Head 
        title="Rei do Blend - Hambúrgueres Artesanais Premium | São José dos Campos"
        description="Blends premium para hambúrgueres artesanais. Mais de 500 clientes satisfeitos e 15 anos de tradição em São José dos Campos. Transforme seu negócio com hambúrgueres que fazem seus clientes voltarem sempre."
        schema={{
          "@context": "https://schema.org",
          "@graph": [organizationSchema, localBusinessSchema]
        }}
      />
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-[hsl(359,69%,30%)] to-red-800 pt-[60px] md:pt-[68px] w-full text-sans">

        {/* Hero Section */}
        <section id="inicio" className="relative overflow-x-hidden flex items-center pb-8">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(359,69%,30%)] to-red-800 opacity-90"></div>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")`
            }}
            aria-hidden
          ></div>

          <div className="w-full px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Logo animado */}
              <div className="mb-6 md:mb-20 mt-4 motion-safe:animate-fadeIn">
                <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 mx-auto flex items-center justify-center mb-4 md:mb-6 transform transition-transform duration-500 hover:scale-105 focus-within:scale-105">
                  <img
                    src={LogoTransparente}
                    alt="Rei do Blend Logo"
                    className="w-full h-full object-contain drop-shadow-2xl rounded-lg"
                  />
                </div>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-white opacity-95 max-w-3xl mx-auto mb-5 px-2 motion-safe:animate-slideUp">
                Transforme seu negócio com hambúrgueres artesanais premium que fazem seus clientes voltarem sempre
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-12 px-2">
                <WhatsappButton 
                  text="Fale conosco"
                  bgColor="bg-[#febf00] hover:bg-amber-400 focus:ring-4 focus:ring-amber-300 transition-all duration-300 shadow-lg hover:shadow-2xl"
                  textColor="text-red-900"
                  iconColor="text-red-900"
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              aria-label="Rolar para baixo"
              onClick={() => scrollToSection('sobre')}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors motion-safe:animate-bounce focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              <ChevronDown className="w-6 h-6 text-white opacity-85" />
            </button>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="py-10 md:py-14 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6 md:mb-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-red-900 mb-4 md:mb-6 tracking-tight">
                  QUEM SOMOS
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
                  Uma tradição familiar que começou na cozinha e se tornou referência no mercado
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
                <div className="space-y-6">
                  <article className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border-l-4 border-red-800 hover:shadow-2xl transition-all duration-300 motion-safe:animate-fadeIn">
                    <h3 className="text-xl sm:text-2xl font-bold text-red-900 mb-4 flex items-center">
                      <Users className="mr-3 text-yellow-500" size={26} />
                      O Pai - Mestre da Tradição
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Com mais de 20 anos de experiência na arte da culinária, nosso fundador desenvolveu 
                      receitas únicas que combinam tradição brasileira com técnicas modernas. Cada blend 
                      carrega décadas de conhecimento e paixão pela gastronomia.
                    </p>
                  </article>
                  
                  <article className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border-l-4 border-yellow-500 hover:shadow-2xl transition-all duration-300 motion-safe:animate-fadeIn delay-200">
                    <h3 className="text-xl sm:text-2xl font-bold text-red-900 mb-4 flex items-center">
                      <Award className="mr-3 text-red-800" size={26} />
                      O Filho - Inovação e Qualidade
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Trazendo visão empresarial moderna e controle de qualidade rigoroso, a nova geração 
                      expandiu o negócio mantendo os valores familiares. Cada produto passa por testes 
                      rigorosos antes de chegar ao seu estabelecimento.
                    </p>
                  </article>
                </div>

                <div className="relative motion-safe:animate-slideUp">
                  <div className="bg-gradient-to-br from-[hsl(359,69%,30%)] to-red-800 p-6 sm:p-8 rounded-2xl shadow-2xl text-white hover:shadow-red-700/40 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Por que somos diferentes?</h3>
                    <div className="space-y-4">
                      {[
                        'Receitas desenvolvidas ao longo de gerações',
                        'Seleção rigorosa de fornecedores locais',
                        'Controle de qualidade em cada etapa',
                        'Relacionamento próximo com cada cliente'
                      ].map((text, idx) => (
                        <div key={idx} className="flex items-start space-x-3 group">
                          <Check className="text-yellow-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                          <span className="text-sm sm:text-base">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos Section */}
        <ProdutosSection />

        {/* Processo Section */}
        <section id="processo" className="py-10 md:py-14 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-red-900 mb-4 md:mb-6">
                  PROCESSO ARTESANAL
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                  Cada hambúrguer é uma obra de arte criada com carinho, dedicação e ingredientes premium
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {[
                  { n: '1', t: 'Seleção Premium', d: 'Escolhemos apenas os melhores cortes de carne, direto de fornecedores certificados e de confiança.' },
                  { n: '2', t: 'Blend Secreto', d: 'Nossa receita familiar única combina temperos especiais que realçam o sabor natural da carne.' },
                  { n: '3', t: 'Modelagem Artesanal', d: 'Cada hambúrguer é modelado à mão, garantindo a textura perfeita e formato ideal para cocção.' },
                  { n: '4', t: 'Controle de Qualidade', d: 'Inspeção rigorosa em cada etapa garante que apenas produtos perfeitos cheguem até você.' },
                ].map((item) => (
                  <div key={item.n} className="text-center group motion-safe:animate-fadeIn">
                    <div className="w-20 h-20 bg-[#febf00] rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform duration-300 group-hover:scale-110 shadow-xl">
                      <span className="text-2xl text-red-900 font-bold">{item.n}</span>
                    </div>
                    <h3 className="text-xl font-bold text-red-900 mb-3">{item.t}</h3>
                    <p className="text-gray-600">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-10 md:py-14 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-900 mb-4 sm:mb-6">
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 max-w-3xl mx-auto px-2">
              Junte-se a mais de 500 empresários que já aumentaram suas vendas com nossos produtos premium
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => scrollToSection('produtos')}
                className="border-2 border-red-900 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-900 hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-200"
              >
                Ver Produtos
              </button>
              <WhatsappButton 
                text="Entre em contato agora"
                bgColor="bg-red-900 hover:bg-red-800 focus:ring-4 focus:ring-red-300 transition-all duration-300"
                textColor="text-yellow-400"
                iconColor="text-yellow-400"
              />
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="py-8 md:py-14 bg-gradient-to-br from-[hsl(359,69%,30%)] to-red-800 text-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-6 md:mb-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 md:mb-6">
                  SOLICITE UM ORÇAMENTO
                </h2>
                <p className="text-base md:text-xl text-white opacity-85 max-w-3xl mx-auto px-2">
                  Estamos aqui para ajudar seu negócio a crescer. Preencha o formulário abaixo para receber uma proposta personalizada.
                </p>
              </div>
                <FormularioOrcamento />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
