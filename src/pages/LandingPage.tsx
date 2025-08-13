import { ChevronDown, Users, Award, ArrowRight, Check } from 'lucide-react';
import { ProdutosSection } from '../components/ProdutosSection';
import { FormularioOrcamento } from '../components/FormularioOrcamento';
import WhatsappButton from '../components/WhatsappButton';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import LogoTransparente from '../assets/Logo com fundo transparente.png';


export default function LandingPage() {
  // Produtos em destaque baseado nos IDs configurados
  

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 pt-[60px] md:pt-[68px] w-screen overflow-x-clip">

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen relative overflow-x-hidden flex items-center pb-8">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-900 to-red-800 opacity-80"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="w-full px-2 sm:px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo animado */}
            <div className="mb-20 md:mb-20 transform transition-all duration-1000 hover:scale-210">
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 mx-auto flex items-center justify-center mb-4 md:mb-6">
                <img src={LogoTransparente} alt="Rei do Blend Logo" className="w-full h-full object-contain drop-shadow-lg" />
              </div>
            </div>

            <p className="text-lg sm:text-xl md:text-3xl text-yellow-400 italic font-light">
              Pai e Filho
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Rei do Blend
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white opacity-80 max-w-3xl mx-auto mb-3 px-2">
              Transforme seu negócio com hambúrgueres artesanais premium que fazem seus clientes voltarem sempre
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12 px-2">
              <button 
                onClick={() => scrollToSection('produtos')}
                className="group bg-gradient-to-r from-yellow-400 to-amber-500 text-red-900 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:from-yellow-300 hover:to-amber-400 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center"
              >
                Ver Catálogo Premium
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </button>
              <WhatsappButton 
                text="Fale com um Especialista"
                bgColor="bg-amber-500 hover:bg-amber-400"
                textColor="text-red-900"
                iconColor="text-red-900"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 mt-8 sm:mt-16">
              <div className="text-center p-2 sm:p-3 bg-black/10 rounded-lg">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-yellow-400">500+</div>
                <div className="text-white opacity-80 text-[10px] sm:text-xs md:text-sm">Clientes Ativos</div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-black/10 rounded-lg">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-yellow-400">15+</div>
                <div className="text-white opacity-80 text-[10px] sm:text-xs md:text-sm">Anos Experiência</div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-black/10 rounded-lg">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-yellow-400">98%</div>
                <div className="text-white opacity-80 text-[10px] sm:text-xs md:text-sm">Satisfação</div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-black/10 rounded-lg">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-yellow-400">24h</div>
                <div className="text-white opacity-80 text-[10px] sm:text-xs md:text-sm">Entrega Rápida</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white opacity-60" />
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-8 md:py-14 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-red-900 mb-4 md:mb-6">
                Nossa História
              </h2>
              <p className="text-lg md:text-xl text-black max-w-3xl mx-auto px-4">
                Uma tradição familiar que começou na cozinha e se tornou referência no mercado
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
              <div className="space-y-6">
                <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-xl border-l-4 border-red-800">
                  <h3 className="text-xl sm:text-2xl font-bold text-red-900 mb-4 flex items-center">
                    <Users className="mr-2 sm:mr-3 text-yellow-500" size={24} />
                    O Pai - Mestre da Tradição
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Com mais de 20 anos de experiência na arte da culinária, nosso fundador desenvolveu 
                    receitas únicas que combinam tradição brasileira com técnicas modernas. Cada blend 
                    carrega décadas de conhecimento e paixão pela gastronomia.
                  </p>
                </div>
                
                <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-xl border-l-4 border-yellow-500">
                  <h3 className="text-xl sm:text-2xl font-bold text-red-900 mb-4 flex items-center">
                    <Award className="mr-2 sm:mr-3 text-red-800" size={24} />
                    O Filho - Inovação e Qualidade
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Trazendo visão empresarial moderna e controle de qualidade rigoroso, a nova geração 
                    expandiu o negócio mantendo os valores familiares. Cada produto passa por testes 
                    rigorosos antes de chegar ao seu estabelecimento.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-red-800 to-red-900 p-4 sm:p-8 rounded-2xl shadow-2xl text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Por que somos diferentes?</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <Check className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm sm:text-base">Receitas desenvolvidas ao longo de gerações</span>
                    </div>
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <Check className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm sm:text-base">Seleção rigorosa de fornecedores locais</span>
                    </div>
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <Check className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm sm:text-base">Controle de qualidade em cada etapa</span>
                    </div>
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <Check className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm sm:text-base">Relacionamento próximo com cada cliente</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <ProdutosSection />      {/* Processo Section */}
      <section id="processo" className="py-10 md:py-14 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-red-900 mb-4 md:mb-6">
                Processo Artesanal
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Cada hambúrguer é uma obra de arte criada com carinho, dedicação e ingredientes premium
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-800 to-red-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl">
                  <span className="text-2xl text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-red-900 mb-3">Seleção Premium</h3>
                <p className="text-gray-600">Escolhemos apenas os melhores cortes de carne, direto de fornecedores certificados e de confiança.</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-800 to-red-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl">
                  <span className="text-2xl text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-red-900 mb-3">Blend Secreto</h3>
                <p className="text-gray-600">Nossa receita familiar única combina temperos especiais que realçam o sabor natural da carne.</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-800 to-red-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl">
                  <span className="text-2xl text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-red-900 mb-3">Modelagem Artesanal</h3>
                <p className="text-gray-600">Cada hambúrguer é modelado à mão, garantindo a textura perfeita e formato ideal para cocção.</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-800 to-red-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl">
                  <span className="text-2xl text-white font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-red-900 mb-3">Controle de Qualidade</h3>
                <p className="text-gray-600">Inspeção rigorosa em cada etapa garante que apenas produtos perfeitos cheguem até você.</p>
              </div>
            </div>

            {/* <div className="mt-8 md:mt-12 bg-gradient-to-r from-red-800 to-red-900 rounded-2xl p-6 md:p-10 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                🏆 Certificações e Qualidade
              </h3>
              <p className="text-lg mb-6 max-w-3xl mx-auto">
                Os produtos seguem os mais altos padrões de qualidade e segurança alimentar, 
                com certificações ANVISA e controle rigoroso de temperatura durante toda a cadeia.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <Check className="text-yellow-400 mr-2" size={20} />
                  <span>ANVISA Certificado</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <Check className="text-yellow-400 mr-2" size={20} />
                  <span>ISO 9001</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <Check className="text-yellow-400 mr-2" size={20} />
                  <span>Halal Certificado</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Parceiros Section */}
      {/* <ParceirosSection /> */}
      
      {/* CTA Section */}
      <section className="py-8 sm:py-10 md:py-14 bg-gradient-to-br from-yellow-400 to-amber-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-900 mb-4 sm:mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-red-800 mb-4 sm:mb-6 max-w-3xl mx-auto px-2">
            Junte-se a mais de 500 empresários que já aumentaram suas vendas com nossos produtos premium
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => scrollToSection('produtos')}
              className="border-2 border-red-900 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-900 hover:text-white transition-all"
            >
              Ver Produtos
            </button>
            <WhatsappButton 
              text="Entre em contato agora"
              bgColor="bg-red-900 hover:bg-red-800"
              textColor="text-yellow-400"
              iconColor="text-yellow-400"
            />
          </div>
        </div>
      </section>

      {/* Contato Section */}
            <section id="contato" className="py-8 md:py-14 bg-gradient-to-br from-slate-900 to-slate-800 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                Solicite um Orçamento
              </h2>
              <p className="text-base md:text-xl text-white opacity-80 max-w-3xl mx-auto px-2">
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