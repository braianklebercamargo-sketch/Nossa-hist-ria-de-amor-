import { motion } from "motion/react";
import { Sparkles, ArrowRight, Heart, Image as ImageIcon, Music, Gift, MessageCircle, Clock, Send, Smartphone, Star, CreditCard, ShieldCheck, Timer, X, Check, Users, QrCode } from "lucide-react";

export function LandingPage({ onEnterDemo }: { onEnterDemo: () => void }) {
  return (
    <div className="min-h-screen z-50 bg-[#110204] text-white flex flex-col relative overflow-x-hidden font-sans pt-12 md:pt-0">
      {/* Background glowing effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none fixed">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[150px] translate-y-1/2" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-20 flex-1 flex flex-col items-center justify-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Surpreenda o seu amor com algo único</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
            Eternize sua história em um <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 text-pink-400">site inesquecível</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10">
            Você está prestes a ver um <strong>molde de demonstração</strong>. Imagine este mesmo site com as suas fotos, suas declarações, suas datas e a música de vocês tocando de fundo.
          </p>
          
          <button
            onClick={onEnterDemo}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full text-white font-medium text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:shadow-[0_0_40px_rgba(219,39,119,0.5)] cursor-pointer"
          >
            <span>Acessar Molde de Demonstração</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/60">
             <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-pink-500/20 border border-white/10 flex items-center justify-center backdrop-blur-sm"><Heart className="w-4 h-4 text-pink-400" /></div>
                <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-white/10 flex items-center justify-center backdrop-blur-sm"><Star className="w-4 h-4 text-rose-400" /></div>
                <div className="w-8 h-8 rounded-full bg-red-500/20 border border-white/10 flex items-center justify-center backdrop-blur-sm"><Users className="w-4 h-4 text-red-400" /></div>
             </div>
             <p>Mais de <strong className="text-white">3.400 casais</strong> emocionados neste mês.</p>
          </div>
        </motion.div>

        {/* Comparison Section */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="w-full max-w-5xl mb-16"
        >
           <h2 className="text-3xl font-serif font-bold text-center mb-10">Por que escolher um site?</h2>
           <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl opacity-80 backdrop-blur-sm">
                 <h3 className="text-xl font-bold mb-6 text-white/60">Presente Comum</h3>
                 <ul className="space-y-4 text-white/60">
                    <li className="flex items-center gap-3"><X className="w-5 h-5 text-red-400 shrink-0" /> Esquece rápido e fica na gaveta</li>
                    <li className="flex items-center gap-3"><X className="w-5 h-5 text-red-400 shrink-0" /> Mais caro do que você imaginava</li>
                    <li className="flex items-center gap-3"><X className="w-5 h-5 text-red-400 shrink-0" /> Comum e clichê</li>
                    <li className="flex items-center gap-3"><X className="w-5 h-5 text-red-400 shrink-0" /> Não é personalizado</li>
                 </ul>
              </div>
              <div className="bg-gradient-to-br from-pink-900/40 to-rose-900/40 border border-pink-500/30 p-8 rounded-3xl backdrop-blur-sm shadow-[0_0_30px_rgba(236,72,153,0.15)] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-pink-500/30 transition-colors" />
                 <h3 className="text-xl font-bold mb-6 text-pink-100 flex items-center gap-2"><Sparkles className="w-5 h-5 text-pink-400" /> Site Personalizado</h3>
                 <ul className="space-y-4 text-white">
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 shrink-0" /> Dura para sempre online e emociona</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 shrink-0" /> Preço super acessível e justo</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 shrink-0" /> Uma surpresa inovadora e original</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400 shrink-0" /> Feito sob medida com a música de vocês</li>
                 </ul>
              </div>
           </div>
        </motion.div>

        {/* Features & Pricing Section */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="w-full max-w-5xl grid md:grid-cols-2 gap-8 mb-16"
        >
           {/* Package Details */}
           <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm h-full flex flex-col relative overflow-hidden group hover:bg-white/10 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-pink-500/20 transition-colors" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                 <Gift className="w-8 h-8 text-pink-400" />
                 <h2 className="text-2xl font-serif font-bold">O Pacote Perfeito</h2>
              </div>
              <p className="text-white/70 mb-8 flex-1 relative z-10">
                Receba um site lindo, personalizado e totalmente online para vocês compartilharem com quem quiserem ou guardarem como um segredo só de vocês.
              </p>
              
              <div className="space-y-4 mb-8 relative z-10">
                 <div className="flex items-center gap-3 text-white/90">
                    <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0">
                       <ImageIcon className="w-4 h-4 text-pink-300" />
                    </div>
                    <span>Até 10 fotos marcantes da história de vocês</span>
                 </div>
                 <div className="flex items-center gap-3 text-white/90">
                    <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0">
                       <Music className="w-4 h-4 text-pink-300" />
                    </div>
                    <span>Player de música com a playlist do casal</span>
                 </div>
                 <div className="flex items-center gap-3 text-white/90">
                    <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0">
                       <Heart className="w-4 h-4 text-pink-300" />
                    </div>
                    <span>Textos, cartas, linha do tempo e motivos</span>
                 </div>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10 relative z-10">
                 <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                       <p className="text-sm text-white/50 mb-1 line-through font-medium">De R$ 85,70</p>
                       <p className="text-sm text-green-400 mb-1 font-bold uppercase tracking-wider flex items-center gap-1">
                          <Sparkles className="w-4 h-4" /> Oferta Especial
                       </p>
                       <div className="flex items-baseline gap-1">
                          <span className="text-2xl text-white font-bold">R$</span>
                          <span className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 font-bold font-serif tracking-tight drop-shadow-[0_0_15px_rgba(244,114,182,0.3)]">40,00</span>
                       </div>
                       <p className="text-sm text-pink-200/80 mt-2 font-medium flex items-center gap-1.5"><CreditCard className="w-4 h-4" /> Ou em até 5x no cartão</p>
                    </div>
                 </div>
                 
                 <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-sm text-white/80">
                       <ShieldCheck className="w-5 h-5 text-green-400 shrink-0" />
                       <p><strong className="text-white">Risco Zero:</strong> Você confere uma prévia do site antes de fazer o pagamento!</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm flex-col sm:flex-row bg-rose-500/10 border border-rose-500/20 p-3 rounded-lg mt-2 text-rose-200">
                       <Timer className="w-5 h-5 text-rose-400 shrink-0 hidden sm:block" />
                       <p className="text-center sm:text-left"><strong className="text-rose-100">Atenção:</strong> Vagas diárias limitadas para garantir a entrega rápida. Garanta a sua agora.</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Contact & Support */}
           <div className="bg-gradient-to-br from-pink-950/40 to-[#110204] border border-pink-500/20 p-8 rounded-3xl backdrop-blur-sm h-full flex flex-col justify-between">
              <div>
                 <h2 className="text-2xl font-serif font-bold mb-4">Gostou? Peça o seu!</h2>
                 <p className="text-white/70 mb-8 leading-relaxed">
                   Após ver a demonstração, entre em contato. Nós montamos tudo com as suas informações e entregamos o site no ar, pronto para surpreender!
                 </p>
              </div>

              <div className="space-y-4">
                 <a href="https://wa.me/5554991064604?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20site%20de%20presente%20personalizado." target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-2xl transition-colors border border-white/5 cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#25D366]/30 transition-all">
                       <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                       <p className="font-bold text-white group-hover:text-[#25D366] transition-colors">WhatsApp</p>
                       <p className="text-sm text-white/50">Fale direto com a gente</p>
                    </div>
                 </a>
              </div>
           </div>
        </motion.div>

        {/* Bônus Exclusivo */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="w-full max-w-5xl mb-16"
        >
           <div className="bg-gradient-to-r from-green-900/40 to-[#110204] border border-green-500/30 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 justify-between shadow-[0_0_30px_rgba(34,197,94,0.15)]">
              <div className="flex items-center gap-5">
                 <div className="w-16 h-16 shrink-0 bg-green-500/20 rounded-2xl flex items-center justify-center border border-green-500/30">
                    <QrCode className="w-8 h-8 text-green-400" />
                 </div>
                 <div>
                    <div className="flex items-center gap-2 mb-2">
                       <span className="bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide flex items-center gap-1">
                          <Gift className="w-3 h-3" /> Bônus Exclusivo
                       </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Arte com QR Code em PDF</h3>
                    <p className="text-white/70 max-w-lg leading-relaxed">Você recebe uma arte pronta para imprimir. Quando seu amor receber o papel, basta apontar a câmera do celular e o site se abrirá como mágica na tela!</p>
                 </div>
              </div>
              <div className="text-center md:text-right shrink-0 bg-black/20 p-4 rounded-xl border border-white/5">
                 <p className="text-white/40 line-through text-sm mb-1">De R$ 20,00</p>
                 <p className="text-green-400 font-bold text-2xl">GRÁTIS HOJE</p>
              </div>
           </div>
        </motion.div>

        {/* Como Funciona Section */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="w-full max-w-5xl mb-16"
        >
           <h2 className="text-3xl font-serif font-bold text-center mb-10">Como Funciona?</h2>
           <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative">
                 <div className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold text-lg mb-4">1</div>
                 <h3 className="text-xl font-bold mb-2">Faça o Pedido</h3>
                 <p className="text-white/70">Entre em contato pelo WhatsApp e confira a demonstração. Gostando, você faz o pagamento.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative">
                 <div className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold text-lg mb-4">2</div>
                 <h3 className="text-xl font-bold mb-2">Envie os Detalhes</h3>
                 <p className="text-white/70">Mande suas fotos favoritas, os textos, datas marcantes e as músicas do casal para nós.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative">
                 <div className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold text-lg mb-4">3</div>
                 <h3 className="text-xl font-bold mb-2">Receba a Surpresa</h3>
                 <p className="text-white/70">Nós montamos o site e você recebe o link exclusivo em até 24h para emocionar seu amor!</p>
              </div>
           </div>
        </motion.div>

        {/* Target Audience / Para quem é */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="w-full max-w-5xl mb-16"
        >
           <h2 className="text-3xl font-serif font-bold text-center mb-4">Para quem é esse presente?</h2>
           <p className="text-center text-white/60 mb-10 max-w-2xl mx-auto">Não importa o tempo de relacionamento, uma verdadeira demonstração de amor sempre surpreende.</p>
           <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                 <h3 className="text-xl font-bold mb-3 text-pink-300">Namorados</h3>
                 <p className="text-white/70">Perfeito para aniversários de namoro, Dia dos Namorados ou para um pedido criativo. É moderno e não cai na mesmice!</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                 <h3 className="text-xl font-bold mb-3 text-rose-300">Noivos & Casados</h3>
                 <p className="text-white/70">Relembre toda a jornada e comprove que o romantismo não tem fim. Uma ótima surpresa de aniversário de casamento.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                 <h3 className="text-xl font-bold mb-3 text-red-300">Conquistas & Ficantes</h3>
                 <p className="text-white/70">Quer impressionar de verdade e mostrar que pensou em cada detalhe? O site encanta logo no primeiro impacto.</p>
              </div>
           </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="w-full max-w-5xl mb-16"
        >
           <h2 className="text-3xl font-serif font-bold text-center mb-10">O que dizem os apaixonados?</h2>
           <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative">
                 <div className="flex gap-1 mb-4 text-pink-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                 </div>
                 <p className="text-white/80 italic mb-4">"Nossa, ficou perfeito! Ele chorou muito quando viu o site com as nossas músicas e fotos. Muito obrigado pelo capricho em cada detalhe!"</p>
                 <p className="font-bold text-pink-300">- Amanda Silva</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative">
                 <div className="flex gap-1 mb-4 text-pink-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                 </div>
                 <p className="text-white/80 italic mb-4">"Achei a ideia genial. Estava sem ideias para o Dia dos Namorados e o site foi a maior surpresa. Atendimento super rápido e atencioso."</p>
                 <p className="font-bold text-pink-300">- Lucas Mendes</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative">
                 <div className="flex gap-1 mb-4 text-pink-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                 </div>
                 <p className="text-white/80 italic mb-4">"Simplesmente maravilhoso! Mandei o link pra ela de manhã cedo e foi a melhor forma de começar o nosso aniversário de namoro."</p>
                 <p className="font-bold text-pink-300">- Rafael Costa</p>
              </div>
           </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="w-full max-w-3xl mx-auto mb-16 space-y-6"
        >
           <h2 className="text-3xl font-serif font-bold text-center mb-8">Perguntas Frequentes</h2>
           <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                 <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><Clock className="w-5 h-5 text-pink-400" /> Em quanto tempo fica pronto?</h3>
                 <p className="text-white/70">O site fica pronto e no ar em até 24 horas após o envio de todas as informações (fotos, textos e música).</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                 <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><Smartphone className="w-5 h-5 text-pink-400" /> Funciona no celular?</h3>
                 <p className="text-white/70">Sim! O site é 100% responsivo, funcionando perfeitamente em celulares, tablets e computadores.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                 <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><Send className="w-5 h-5 text-pink-400" /> Como envio as fotos?</h3>
                 <p className="text-white/70">É muito fácil! Toda a comunicação, envio dos arquivos e informações são feitos diretamente no WhatsApp.</p>
              </div>
           </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="w-full max-w-4xl mx-auto mb-12 text-center bg-gradient-to-br from-pink-600/20 to-rose-900/40 border border-pink-500/20 p-10 rounded-3xl"
        >
           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Pronto para emocionar?</h2>
           <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Não deixe para a última hora. Garanta agora um presente único, criativo e que vai arrancar lágrimas de alegria.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/5554991064604?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20site%20de%20presente%20personalizado." target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] rounded-full text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                 <MessageCircle className="w-6 h-6" />
                 <span>Pedir pelo WhatsApp</span>
              </a>
              <button 
                onClick={onEnterDemo}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full text-white font-bold text-lg transition-all duration-300 border border-white/20"
              >
                 <span>Ver a demonstração novamente</span>
              </button>
           </div>
        </motion.div>

        {/* Floating WhatsApp Button */}
        <motion.a
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 1, duration: 0.5 }}
           href="https://wa.me/5554991064604?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20site%20de%20presente%20personalizado." 
           target="_blank" 
           rel="noopener noreferrer"
           className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        >
           <MessageCircle className="w-8 h-8" />
           <span className="absolute right-full mr-4 bg-white text-gray-900 text-sm font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
             Fale com a gente!
           </span>
        </motion.a>

        <p className="text-center text-white/40 text-sm mb-8 z-10 relative">
           O modelo apresenta nomes genéricos e imagens ilustrativas. Tudo será adaptado para a história de vocês.
        </p>

      </div>
    </div>
  );
}
