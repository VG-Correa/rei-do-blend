import { useMemo } from 'react';
import { ChevronDown, Users, Award, ArrowRight, Check } from 'lucide-react';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactInfoSection } from '../components/ContactInfoSection';
import { produtosMock } from '../core/products.mock';
import { config } from '../core/config';
import Header from '../components/Header';


export default function LandingPage() {
  // Produtos em destaque baseado nos IDs configurados
  const produtosDestaque = useMemo(() => {
    return produtosMock.map(produto => ({
      ...produto,
      destaque: config.productosDestaque.includes(produto.id)
    }));
  }, [produtosMock]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 pt-[60px] md:pt-[68px]">

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen relative overflow-hidden flex items-center pb-8">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-900 to-red-800 opacity-80"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo animado */}
            <div className="mb-8 transform transition-all duration-1000 hover:scale-110">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl mb-6 animate-pulse">
                <span className="text-4xl font-bold text-red-900">👑</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Rei do Blend
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-400 italic mb-6 font-light">
              Pai e Filho
            </p>
            
            <p className="text-xl text-white opacity-80 max-w-3xl mx-auto mb-3">
              Transforme seu negócio com hambúrgueres artesanais premium que fazem seus clientes voltarem sempre
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => scrollToSection('produtos')}
                className="group bg-gradient-to-r from-yellow-400 to-amber-500 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-amber-400 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center"
              >
                Ver Catálogo Premium
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-white/10 backdrop-blur-sm transition-all hover:border-red-400 hover:text-red-400"
              >
                Fale Conosco
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">500+</div>
                <div className="text-white opacity-80 text-sm">Clientes Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">15+</div>
                <div className="text-white opacity-80 text-sm">Anos Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">98%</div>
                <div className="text-white opacity-80 text-sm">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">24h</div>
                <div className="text-white opacity-80 text-sm">Entrega Rápida</div>
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
      <section id="sobre" className="py-10 md:py-14 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
                Nossa História
              </h2>
              <p className="text-xl opacity-80 max-w-3xl mx-auto">
                Uma tradição familiar que começou na cozinha e se tornou referência no mercado
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-red-800">
                  <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
                    <Users className="mr-3 text-yellow-500" size={28} />
                    O Pai - Mestre da Tradição
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Com mais de 20 anos de experiência na arte da culinária, nosso fundador desenvolveu 
                    receitas únicas que combinam tradição brasileira com técnicas modernas. Cada blend 
                    carrega décadas de conhecimento e paixão pela gastronomia.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-yellow-500">
                  <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
                    <Award className="mr-3 text-red-800" size={28} />
                    O Filho - Inovação e Qualidade
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Trazendo visão empresarial moderna e controle de qualidade rigoroso, a nova geração 
                    expandiu o negócio mantendo os valores familiares. Cada produto passa por testes 
                    rigorosos antes de chegar ao seu estabelecimento.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-red-800 to-red-900 p-8 rounded-2xl shadow-2xl text-white">
                  <h3 className="text-2xl font-bold mb-6">Por que somos diferentes?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Check className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                      <span>Receitas desenvolvidas ao longo de gerações</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                      <span>Seleção rigorosa de fornecedores locais</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                      <span>Controle de qualidade em cada etapa</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                      <span>Relacionamento próximo com cada cliente</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="py-10 md:py-14 bg-gradient-to-br from-red-900 to-red-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossos Produtos Mais Vendidos
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Cada blend é cuidadosamente desenvolvido para maximizar seu lucro e satisfação dos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {produtosDestaque.map(produto => (
              <div key={produto.id} className={`relative group ${produto.destaque ? 'md:-translate-y-4' : ''}`}>
                {produto.destaque && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-amber-500 text-red-900 px-4 py-1 rounded-full text-sm font-bold z-10">
                    MAIS VENDIDO
                  </div>
                )}
                
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={produto.imagem} 
                      alt={produto.nome}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-red-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {produto.preco}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-red-900 mb-2">{produto.nome}</h3>
                    <p className="text-gray-600 mb-4">{produto.descricao}</p>
                    
                    <div className="space-y-2 mb-6">
                      {produto.beneficios.map((beneficio, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <Check className="text-green-500 mr-2" size={16} />
                          {beneficio}
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-red-800 to-red-900 text-white py-3 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105">
                      Solicitar Orçamento
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-10">
            <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-amber-400 transition-all transform hover:scale-105 shadow-2xl">
              Ver Catálogo Completo
            </button>
          </div>
        </div>
      </section>

      {/* Processo Section */}
      <section id="processo" className="py-10 md:py-14 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
                Nosso Processo Artesanal
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada hambúrguer é uma obra de arte criada com carinho, dedicação e ingredientes premium
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            <div className="mt-8 md:mt-12 bg-gradient-to-r from-red-800 to-red-900 rounded-2xl p-6 md:p-10 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                🏆 Certificações e Qualidade
              </h3>
              <p className="text-lg mb-6 max-w-3xl mx-auto">
                Nossos produtos seguem os mais altos padrões de qualidade e segurança alimentar, 
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
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-yellow-400 to-amber-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl text-red-800 mb-6 max-w-3xl mx-auto">
            Junte-se a mais de 500 empresários que já aumentaram suas vendas com nossos produtos premium
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-red-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-800 transition-all transform hover:scale-105 shadow-2xl"
            >
              Solicitar Orçamento Agora
            </button>
            <button className="border-2 border-red-900 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-900 hover:text-white transition-all">
              (11) 9999-9999
            </button>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-10 md:py-14 bg-gradient-to-br from-slate-900 to-slate-800 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Entre em Contato
              </h2>
              <p className="text-xl text-white opacity-80 max-w-3xl mx-auto">
                Estamos aqui para ajudar seu negócio a crescer. Fale conosco e descubra como nossos produtos podem fazer a diferença
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <ContactInfoSection />

              {/* Formulário de Contato */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-red-900 mb-6">Solicite seu Orçamento</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Nome Completo *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Telefone/WhatsApp *</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">E-mail *</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Nome do Estabelecimento</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        placeholder="Nome da sua lanchonete/restaurante"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Tipo de Estabelecimento</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all">
                        <option value="">Selecione</option>
                        <option value="lanchonete">Lanchonete</option>
                        <option value="restaurante">Restaurante</option>
                        <option value="food-truck">Food Truck</option>
                        <option value="mercado">Mercadinho</option>
                        <option value="delivery">Delivery</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Produtos de Interesse</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="text-red-600 rounded focus:ring-red-500" />
                        <span className="ml-2 text-sm">Blend Premium</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="text-red-600 rounded focus:ring-red-500" />
                        <span className="ml-2 text-sm">Blend Tradicional</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="text-red-600 rounded focus:ring-red-500" />
                        <span className="ml-2 text-sm">Blend Gourmet</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Mensagem</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all resize-none"
                      placeholder="Conte-nos mais sobre seu negócio e suas necessidades..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-800 to-red-900 text-white py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Enviar Solicitação de Orçamento
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-10 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <div className="flex flex-col items-center md:items-start mb-4 gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="font-bold text-red-900 text-xl">R</span>
                </div>
                <span className="text-white font-extrabold text-xl">Rei do Blend</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm md:text-base">
                Transformando negócios com hambúrgueres artesanais premium há mais de 15 anos.
              </p>
              <div className="flex justify-center md:justify-start gap-3 mt-2">
                <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 cursor-pointer transition-colors text-lg">
                  <span>📱</span>
                </div>
                <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 cursor-pointer transition-colors text-lg">
                  <span>📧</span>
                </div>
                <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 cursor-pointer transition-colors text-lg">
                  <span>📍</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3 text-yellow-400 text-lg">Produtos</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Blend Premium Angus</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Blend Tradicional</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Blend Gourmet</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Catálogo Completo</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 text-yellow-400 text-lg">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><button onClick={() => scrollToSection('sobre')} className="hover:text-yellow-400 transition-colors text-left w-full">Nossa História</button></li>
                <li><button onClick={() => scrollToSection('processo')} className="hover:text-yellow-400 transition-colors text-left w-full">Processo Artesanal</button></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Certificações</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Trabalhe Conosco</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 text-yellow-400 text-lg">Suporte</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><button onClick={() => scrollToSection('contato')} className="hover:text-yellow-400 transition-colors text-left w-full">Fale Conosco</button></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Área de Entrega</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Política de Qualidade</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm md:text-base">
            <p>&copy; 2025 Rei do Blend - Pai e Filho. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com <span className="text-red-500">❤️</span> para transformar seu negócio</p>
          </div>
        </div>
      </footer>
    </div>

    </>
  );
}