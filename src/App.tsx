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

export default function App() {
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
              mainPhoto: fetchedPhotos[0] || prev.hero.mainPhoto
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
    <div className="font-serif antialiased text-white selection:bg-pink-500/30 selection:text-white bg-[#110204] relative">
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
  );
}
