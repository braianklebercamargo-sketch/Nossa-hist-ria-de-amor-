import { useEffect, useRef, useState } from "react";
import { CONFIG } from "./config";
import { Hero } from "./components/Hero";
import { Counter } from "./components/Counter";
import { Gallery } from "./components/Gallery";
import { Message } from "./components/Message";
import { Footer } from "./components/Footer";
import { AudioPlayer, type AudioPlayerRef } from "./components/AudioPlayer";
import { Reasons } from "./components/Reasons";
import { FloatingHearts } from "./components/FloatingHearts";
import { Future } from "./components/Future";
import { Timeline } from "./components/Timeline";
import { LoveLetters } from "./components/LoveLetters";
import { DateGenerator } from "./components/DateGenerator";
import { LandingPage } from "./components/LandingPage";
import { ArrowLeft } from "lucide-react";

export default function App() {
  const [showDemo, setShowDemo] = useState(false);
  const audioRef = useRef<AudioPlayerRef>(null);
  const [config, setConfig] = useState(CONFIG);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await fetch("/api/photos");
        if (!response.ok) {
          if (response.status === 401) {
            setError("API Key do Pexels não configurada. Configure a chave nas configurações (Secrets).");
          }
          return;
        }
        
        const data = await response.json();
        if (data.photos && data.photos.length > 0) {
          const fetchedPhotos = data.photos.map((p: any) => p.src.large);
          
          setConfig(prev => ({
            ...prev,
            hero: {
              ...prev.hero,
              mainPhoto: data.photos[0]?.src?.large2x || prev.hero.mainPhoto
            },
            photos: fetchedPhotos.slice(1, 11) // Pegar 10 fotos para a galeria
          }));
        }
      } catch (err) {
        console.error("Erro ao buscar fotos", err);
      }
    }
    
    fetchPhotos();
  }, []);

  const handleStart = () => {
    // Attempt to start audio
    if (audioRef.current) {
      audioRef.current.play();
    }
    
    // Scroll to counter section
    const counterSec = document.getElementById("counter");
    if (counterSec) {
      counterSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {!showDemo && <LandingPage onEnterDemo={() => setShowDemo(true)} />}
      
      {showDemo && (
        <div className="font-serif antialiased text-white selection:bg-pink-500/30 selection:text-white bg-[#110204] relative w-full overflow-x-hidden min-h-screen">
          <button
            onClick={() => setShowDemo(false)}
            className="fixed top-4 left-4 z-[9999] bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl px-4 py-2 rounded-full flex items-center gap-2 transition-all group font-sans text-sm outline-none border border-white/20 shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline font-medium">Voltar à página inicial</span>
          </button>
          <FloatingHearts />
          {error && (
            <div className="bg-red-500/90 text-white text-center py-2 px-4 z-50 fixed top-0 w-full font-sans text-sm font-medium">
              {error}
            </div>
          )}
          <div className="relative z-10">
            <Hero onStart={handleStart} heroConfig={config.hero} couple={config.couple} />
            <Counter startDate={config.startDate} />
            <Timeline timeline={config.timeline} />
            <Reasons reasons={config.reasons} />
            <LoveLetters letters={config.letters} />
            <DateGenerator />
            <Gallery photos={config.photos} />
            <Message message={config.message} />
            <Future />
            <Footer />
          </div>
          <AudioPlayer ref={audioRef} url={config.musicUrl} spotifyPlaylistId={config.spotifyPlaylistId} />
        </div>
      )}
    </>
  );
}
