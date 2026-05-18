/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Clock, Star, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-[#0D0D0D] text-[#F7F4F0] min-h-screen font-sans flex flex-col overflow-x-hidden w-full">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-[999] bg-[#0D0D0D]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 flex flex-row items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#C8A96B] rounded-full flex items-center justify-center">
              <span className="text-[#0D0D0D] font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-[#C8A96B] hidden sm:block">Pés Na Areia</span>
          </div>
          <nav className="hidden xl:flex space-x-8 text-xs uppercase tracking-widest opacity-70">
            <a href="#inicio" className="hover:text-[#C8A96B] hover:opacity-100 transition-colors">Início</a>
            <a href="#sobre" className="hover:text-[#C8A96B] hover:opacity-100 transition-colors">Sobre</a>
            <a href="#menu" className="hover:text-[#C8A96B] hover:opacity-100 transition-colors">Menu</a>
            <a href="#galeria" className="hover:text-[#C8A96B] hover:opacity-100 transition-colors">Galeria</a>
            <a href="#contacto" className="hover:text-[#C8A96B] hover:opacity-100 transition-colors">Contacto</a>
          </nav>
          <a href="https://wa.me/244925397334" className="bg-[#C8A96B] text-[#0D0D0D] px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-tighter hover:bg-white transition-colors inline-block">
            Reservar Mesa
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="pt-28 pb-4 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1A1A1A] border border-white/5 h-[80vh] min-h-[500px] flex items-end p-8 md:p-12 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s]"></div>
          <div className="relative z-20 w-full animate-in fade-in slide-in-from-bottom-5 duration-1000 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
              Experiência Premium<br />
              À Beira-Mar
            </h1>
            <p className="text-xl md:text-2xl text-[#F7F4F0] opacity-80 mb-8 font-light">
              Gastronomia exclusiva, sunsets inesquecíveis,
              cocktails premium, música ao vivo e ambiente sofisticado em Luanda.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#menu" className="bg-[#C8A96B] text-[#0D0D0D] px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-tighter hover:bg-white transition-colors">Ver Menu</a>
              <a href="https://wa.me/244925397334" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-tighter hover:bg-white/20 transition-colors">
                Reservar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-4 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(160px,auto)] gap-4 md:gap-6 mb-4 md:gap-6">
          <div className="md:col-span-2 lg:col-span-2 md:row-span-2 rounded-[2.5rem] overflow-hidden relative min-h-[300px] border border-white/5 group bg-[#1A1A1A]">
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2000&auto=format&fit=crop" alt="Restaurante" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="md:col-span-1 lg:col-span-2 rounded-[2.5rem] bg-[#1A1A1A] border border-white/5 p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[#F7F4F0]">Uma experiência única em Luanda</h3>
            <p className="text-[#F7F4F0] opacity-70 font-light mb-4 text-sm md:text-base">
              O Pés Na Areia Beach Restaurant combina luxo,
              gastronomia premium e um ambiente paradisíaco à beira-mar.
            </p>
            <p className="text-[#F7F4F0] opacity-70 font-light text-sm md:text-base">
              Criamos momentos inesquecíveis para famílias,
              casais e amigos desfrutarem da melhor experiência gastronómica.
            </p>
          </div>
          <div className="md:col-span-3 lg:col-span-2 bg-[#C8A96B] text-[#0D0D0D] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center border border-[#C8A96B]/30">
            <span className="uppercase font-bold text-xs tracking-widest opacity-70 mb-4">Destaques</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 font-semibold text-sm">
              <div className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-[#0D0D0D] rounded-full"></span><span>Música ao vivo</span></div>
              <div className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-[#0D0D0D] rounded-full"></span><span>Cinema outdoor</span></div>
              <div className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-[#0D0D0D] rounded-full"></span><span>Happy hour</span></div>
              <div className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-[#0D0D0D] rounded-full"></span><span>Vista panorâmica</span></div>
              <div className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-[#0D0D0D] rounded-full"></span><span>Ambiente sofisticado</span></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
          <div className="bg-[#1A1A1A] p-8 rounded-[2rem] border border-white/5 flex flex-col justify-between min-h-[160px] group hover:border-[#C8A96B]/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#C8A96B]/10 flex items-center justify-center mb-6"><MapPin className="w-5 h-5 text-[#C8A96B]" /></div>
            <div>
              <h4 className="text-xs font-bold text-[#C8A96B] uppercase tracking-widest mb-1">Localização</h4>
              <p className="text-sm opacity-70">Kapossoca, Praia dos São Tomenses, Luanda</p>
            </div>
          </div>
          <div className="bg-[#1A1A1A] p-8 rounded-[2rem] border border-white/5 flex flex-col justify-between min-h-[160px] group hover:border-[#C8A96B]/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#C8A96B]/10 flex items-center justify-center mb-6"><Phone className="w-5 h-5 text-[#C8A96B]" /></div>
            <div>
              <h4 className="text-xs font-bold text-[#C8A96B] uppercase tracking-widest mb-1">Reservas</h4>
              <p className="text-sm opacity-70">+244 925 397 334</p>
            </div>
          </div>
          <div className="border border-[#C8A96B]/30 p-8 rounded-[2rem] flex flex-col justify-between min-h-[160px] group hover:bg-[#C8A96B]/5 transition-colors">
            <div className="flex items-center justify-between mb-6">
              <Clock className="w-6 h-6 text-[#C8A96B]" />
              <span className="text-[10px] uppercase tracking-widest font-bold bg-[#C8A96B]/10 text-[#C8A96B] px-3 py-1.5 rounded-full">Aberto</span>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">Horário</h4>
              <p className="text-sm font-medium">Terça — Domingo</p>
              <p className="text-xl font-serif text-[#C8A96B] mt-1">10h - 23h</p>
            </div>
          </div>
          <div className="bg-[#1A1A1A] p-8 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center text-center min-h-[160px]">
            <span className="text-5xl font-serif font-bold text-[#C8A96B] mb-2">3.9</span>
            <div className="flex space-x-1 mb-3">
              <Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" />
              <Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" />
              <Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" />
              <Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" />
              <Star className="w-4 h-4 text-[#C8A96B]" />
            </div>
            <span className="text-[10px] uppercase tracking-tighter opacity-50">Avaliação Google</span>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-8 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 px-2 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F7F4F0] mb-2 tracking-tight">Especialidades da Casa</h2>
            <p className="text-[#F7F4F0] opacity-70 font-light">Sabores exclusivos preparados por chefs profissionais</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-[#1A1A1A] rounded-[2rem] text-[#F7F4F0] flex flex-col border border-white/5 overflow-hidden group">
            <div className="h-64 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Picanha Premium" />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif font-bold leading-tight mb-2 text-[#C8A96B]">Picanha Premium</h3>
                <p className="text-sm opacity-80 font-light leading-relaxed">Preparada no ponto perfeito e servida com acompanhamentos especiais.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1A1A1A] rounded-[2rem] text-[#F7F4F0] flex flex-col border border-white/5 overflow-hidden group">
            <div className="h-64 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Grelhada Mista" />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif font-bold leading-tight mb-2 text-[#C8A96B]">Grelhada Mista</h3>
                <p className="text-sm opacity-80 font-light leading-relaxed">Combinação irresistível de carnes e frutos do mar frescos.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#C8A96B] rounded-[2rem] text-[#0D0D0D] flex flex-col overflow-hidden group border border-[#C8A96B]">
            <div className="h-64 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Cocktails Signature" />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-2">
                <span className="uppercase font-bold text-xs tracking-widest opacity-70">Signature</span>
                <div className="p-2 bg-white/20 text-[#0D0D0D] rounded-lg group-hover:bg-white group-hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold leading-tight mb-2">Cocktails Premium</h3>
                <p className="text-sm opacity-80 font-medium leading-relaxed">Drinks premium preparados pelos melhores bartenders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-8 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <div className="mb-8 px-2">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F7F4F0] mb-2 tracking-tight">Galeria</h2>
          <p className="text-[#F7F4F0] opacity-70 font-light">Conheça o ambiente sofisticado do restaurante</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 min-h-[500px] md:h-[600px] gap-4 md:gap-6">
          <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden relative border border-white/5 group">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" alt="Ambiente do Restaurante" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative border border-white/5 group">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" alt="Cocktails" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-2 md:col-span-1 row-span-2 rounded-[2rem] overflow-hidden relative border border-white/5 group">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop" alt="Comida Escrita" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative border border-white/5 group cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity hover:bg-black/40">
              <span className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-bold shadow-lg border border-white/10 group-hover:bg-white/30 transition-colors">+12 Fotos</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE & TESTEMUNHOS */}
      <section className="py-8 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:gap-6">
          <div className="col-span-1 md:col-span-2 rounded-[2.5rem] bg-[#1A1A1A] p-8 md:p-16 border border-white/5 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8 relative overflow-hidden group min-h-[300px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-[2s]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20"></div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#C8A96B] mb-6 leading-tight">Experiência Pés Na Areia</h2>
              <p className="text-[#F7F4F0] text-lg md:text-xl font-light leading-relaxed opacity-90 italic">
                “Preparado com cuidado, servido com a melhor vista.”
                <br /><br />
                <span className="not-italic opacity-80">Viva sunsets inesquecíveis, música ao vivo, cocktails premium e uma gastronomia exclusiva à beira-mar.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
          <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-[2rem] border border-white/5 flex flex-col justify-between hover:-translate-y-1 hover:border-[#C8A96B]/30 transition-all duration-300">
            <div>
              <div className="flex space-x-1 mb-6">
                <Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" /><Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" /><Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" /><Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" /><Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" />
              </div>
              <p className="text-[#F7F4F0] font-light opacity-90 leading-relaxed mb-8">
                “Local muito agradável. Comida excelente e atendimento impecável.”
              </p>
            </div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#C8A96B]">Cliente Verificado</h4>
          </div>
          <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-[2rem] border border-white/5 flex flex-col justify-between hover:-translate-y-1 hover:border-[#C8A96B]/30 transition-all duration-300">
            <div>
              <div className="flex space-x-1 mb-6">
                <Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" /><Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" /><Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" /><Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" /><Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" />
              </div>
              <p className="text-[#F7F4F0] font-light opacity-90 leading-relaxed mb-8">
                “Uma das melhores experiências gastronómicas à beira-mar em Luanda.”
              </p>
            </div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#C8A96B]">Visitante</h4>
          </div>
          <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-[2rem] border border-white/5 flex flex-col justify-between hover:-translate-y-1 hover:border-[#C8A96B]/30 transition-all duration-300">
            <div>
              <div className="flex space-x-1 mb-6">
                <Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" /><Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" /><Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" /><Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" /><Star className="w-4 h-4 text-[#C8A96B] fill-[#C8A96B]" />
              </div>
              <p className="text-[#F7F4F0] font-light opacity-90 leading-relaxed mb-8">
                “Ambiente sofisticado, música ao vivo e sunset incrível.”
              </p>
            </div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#C8A96B]">Cliente Verificado</h4>
          </div>
        </div>
      </section>

      {/* MAPA & CONTACTO */}
      <section id="contacto" className="py-8 px-4 md:px-8 max-w-[1400px] mx-auto w-full mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="lg:col-span-2 rounded-[2.5rem] bg-[#1A1A1A] border border-white/5 overflow-hidden h-[400px] lg:h-auto relative p-2 shadow-xl shadow-black/20">
            <iframe
              src="https://maps.google.com/maps?q=Luanda&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              title="Localização do Restaurante"
              className="w-full h-full border-0 rounded-[2rem] filter grayscale-[0.2] contrast-[1.1]"
            >
            </iframe>
          </div>
          
          <div className="lg:col-span-1 flex flex-col gap-4 md:gap-6">
            <div className="rounded-[2.5rem] border border-[#C8A96B]/30 bg-[#1A1A1A] p-8 md:p-10 flex flex-col justify-center flex-1 shadow-xl shadow-black/20">
              <h2 className="text-3xl font-serif font-bold text-[#C8A96B] mb-3">Reserve Agora</h2>
              <p className="text-[#F7F4F0] opacity-70 mb-8 font-light text-sm">Viva uma experiência única à beira-mar.</p>
              <div className="space-y-4 mb-8">
                <p className="text-[#F7F4F0] text-sm flex items-center gap-4"><MapPin className="w-5 h-5 text-[#C8A96B]"/> <span className="opacity-90">Kapossoca, Luanda</span></p>
                <p className="text-[#F7F4F0] text-sm flex items-center gap-4"><Phone className="w-5 h-5 text-[#C8A96B]"/> <span className="opacity-90">+244 925 397 334</span></p>
              </div>
              <a href="tel:+244925397334" className="bg-[#C8A96B] text-[#0D0D0D] px-6 py-4 rounded-full font-bold text-sm uppercase tracking-tighter text-center w-full hover:bg-white transition-colors">
                Ligar Agora
              </a>
            </div>
            
            <div className="rounded-[2rem] bg-white text-[#0D0D0D] p-8 flex flex-col justify-between shadow-xl shadow-black/20">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-5">Atendimento VIP</p>
              <a href="https://wa.me/244925397334" className="flex items-center space-x-4 bg-[#f0f0f0] p-4 rounded-2xl hover:bg-gray-200 transition-colors group">
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6"/>
                </div>
                <span className="text-sm font-bold tracking-tight">Reservar via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 py-8 flex flex-col sm:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-40 border-t border-white/10 max-w-[1400px] mx-auto w-full gap-4 mb-4">
        <span>© 2026 Pés Na Areia — Luanda, Angola</span>
        <span className="flex items-center space-x-6">
          <a href="https://instagram.com/pes_nareiabeach" className="hover:text-white transition-colors flex items-center gap-2"><Instagram className="w-3.5 h-3.5"/> Instagram</a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Facebook className="w-3.5 h-3.5"/> Facebook</a>
          <a href="#contacto" className="hover:text-white transition-colors flex items-center gap-2">Contacto</a>
        </span>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/244925397334" className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white text-3xl shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform z-[999]" aria-label="WhatsApp">
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
