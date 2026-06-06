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
  const [config] = useState(CONFIG);

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
