import React, { useEffect, useState } from 'react'; 
import { Cake, Heart, Stars, Music, Sparkles, Gift } from 'lucide-react';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const images = [
    "sana6.jpg",
    "serana4.jpg",
    "serena1.jpg",
    "serena2.jpg"
  ];

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 1000);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById('bgMusic');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-200 via-purple-200 to-indigo-200 flex items-center justify-center p-4 overflow-hidden">
      <audio id="bgMusic" loop>
        <source src="/public/Dk2fois.mp3" type="audio/mp3" />
      </audio>
      
      {/* Fond animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              transform: `scale(${0.5 + Math.random() * 0.5})`
            }}
          >
            {i % 4 === 0 ? <Stars className="text-yellow-400" /> : 
             i % 4 === 1 ? <Sparkles className="text-purple-400" /> :
             i % 4 === 2 ? <Heart className="text-pink-400" /> :
             <Gift className="text-indigo-400" />}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <div className={`bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl transition-all duration-1000 ${showMessage ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="text-center">
            <button
              onClick={toggleMusic}
              className="absolute top-4 right-4 p-3 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors"
            >
              <Music className={`w-6 h-6 ${isPlaying ? 'animate-pulse' : ''}`} />
            </button>

            <div className="flex justify-center gap-6 mb-8">
              <Cake className="w-16 h-16 text-pink-500 animate-bounce" />
              <Gift className="w-16 h-16 text-purple-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
              <Music className="w-16 h-16 text-indigo-500 animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-8">
              Joyeux Anniversaire Serena! ✨
            </h1>

            {/* Galerie d'images autour du texte */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {images.map((img, index) => (
                <div key={index} className="relative group overflow-hidden rounded-2xl">
                  <img 
                    src={img}
                    alt={`Célébration ${index + 1}`}
                    className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110 rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </div>
              ))}
            </div>

            {/* Texte entouré d'images */}
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8 text-center relative">
              <img src="sana6.jpg" className="float-left w-40 h-40 object-cover rounded-xl mr-6 shadow-md" alt="Célébration" />
              <h2 className="text-2xl font-semibold text-purple-600 mb-6">Pour Toi, Serena</h2>
              
              <p className="italic leading-relaxed">
                À Serena, l'amie aux yeux d'or,<br/>
                En ce jour où le soleil se dore,<br/>
                Un an de plus, une étoile qui brille,<br/>
                Dans ton ciel bleu, où l'amour ne faiblit jamais.
              </p>

              <img src="serena1.jpg" className="float-right w-40 h-40 object-cover rounded-xl ml-6 shadow-md" alt="Célébration" />
              <p className="italic leading-relaxed">
                Tes rires sont des mélodies célestes,<br/>
                Qui chassent les ombres et les tristesses.<br/>
                Ta présence est un rayon de lumière divine,<br/>
                Qui illumine nos vies et nous guide vers le bonheur.
              </p>

              <img src="serana4.jpg" className="float-left w-40 h-40 object-cover rounded-xl mr-6 shadow-md" alt="Célébration" />
              <p className="italic leading-relaxed">
                Que cette année t'apporte des joies infinies,<br/>
                Des rêves fous, des projets brillants, des souvenirs éternels.<br/>
                Que tes désirs se réalisent, que tes espoirs se concrétisent,<br/>
                Et que la joie emplisse chaque instant de ta vie.
              </p>
              
              <img src="serena2.jpg" className="float-right w-40 h-40 object-cover rounded-xl mr-6 shadow-md" alt="Célébration" />
              <p className="italic leading-relaxed">
                Alors, Serena, lève ton verre,<br/>
                À ta santé, à ton mystère, à ton cœur d'or.<br/>
                Joyeux anniversaire, amie chérie,<br/>
                Que l'amour, la lumière et la joie soient tes compagnes de route.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
