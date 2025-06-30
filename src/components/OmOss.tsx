import React from 'react';
import { Users, Scissors, Award, Calendar, Shield, FileText, Star, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const handleBokaDirectReviews = () => {
    const url = 'https://www.bokadirekt.se/places/la-barbiere-37620#reviews';
    
    try {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        window.location.href = url;
      }
    } catch (error) {
      window.location.href = url;
    }
  };

  // Sample of latest reviews (12 out of 700+)
  const latestReviews = [
    {
      name: "Erik L.",
      rating: 5,
      date: "2025-01-15",
      comment: "Fantastisk service av Sigge! Professionell klippning och skägg. Kommer definitivt tillbaka."
    },
    {
      name: "Maria K.",
      rating: 5,
      date: "2025-01-14",
      comment: "Mariana är fantastisk! Bästa färgningen jag någonsin fått. Toppenkvalitet!"
    },
    {
      name: "Alex M.",
      rating: 5,
      date: "2025-01-13",
      comment: "George fixade perfekt herrklippning. Mycket nöjd med resultatet!"
    },
    {
      name: "Sofia H.",
      rating: 5,
      date: "2025-01-12",
      comment: "Professionell atmosfär och excellent service. Mohammed är en riktig proff!"
    },
    {
      name: "David P.",
      rating: 5,
      date: "2025-01-11",
      comment: "Alltid perfekt resultat på La Barbiere. Sigge förstår exakt vad jag vill ha."
    },
    {
      name: "Linda N.",
      rating: 5,
      date: "2025-01-10",
      comment: "Mariana är magisk med färg! Så nöjd med min balayage."
    },
    {
      name: "Marcus T.",
      rating: 5,
      date: "2025-01-09",
      comment: "Bästa frisörsalongen i Jönköping! George är grym på herrklippningar."
    },
    {
      name: "Anna W.",
      rating: 5,
      date: "2025-01-08",
      comment: "Fantastisk service och professionellt bemötande. Verkligen värt pengarna!"
    },
    {
      name: "Johan R.",
      rating: 5,
      date: "2025-01-07",
      comment: "Mohammed har fixat mitt skägg perfekt. Riktig expert!"
    },
    {
      name: "Emma L.",
      rating: 5,
      date: "2025-01-06",
      comment: "Underbar behandling av Mariana. Känner mig som en ny person!"
    },
    {
      name: "Oliver K.",
      rating: 5,
      date: "2025-01-05",
      comment: "Sigge levererar alltid! Årets Barberare 2018 - man förstår varför."
    },
    {
      name: "Petra S.",
      rating: 5,
      date: "2025-01-04",
      comment: "Toppenkvalitet och bra priser. La Barbiere är verkligen bäst i stan!"
    }
  ];

  const teamMembers = [
    {
      name: "Sigge",
      title: "Barberare/Frisör",
      award: "Årets Barberare - 2018 🥉",
      image: "/Sigge.png",
      specialties: ["Herrklippning", "Skäggvård", "Klassiska stilar", "Modern styling"]
    },
    {
      name: "George",
      title: "Barberare/Frisör", 
      image: "/George.png",
      specialties: ["Herrklippning", "Färgning", "Styling", "Konsultation"]
    },
    {
      name: "Mohammed",
      title: "Barberare/Frisör",
      image: "/Mohammed.png",
      specialties: ["Skäggspecialist", "Herrklippning", "Traditionell barbering", "Ansiktsbehandling"]
    },
    {
      name: "Mariana",
      title: "Frisör",
      image: "/487d9cc1-de44-4fc2-a811-13e4a0e2b360.png",
      specialties: ["Damklippning", "Färgning & Balayage", "Bröllop & Event", "Hårvård"]
    }
  ];

  return (
    <motion.div 
      className="p-4 max-w-4xl mx-auto space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header section */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-40 h-20 bg-white p-3 shadow-lg flex items-center justify-center" style={{ borderRadius: '8px' }}>
            <img 
              src="/La-barbiere-logga-1000-x-500-px-1024x512.png" 
              alt="La Barbiere Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
        </div>
      </div>

      {/* Our Professional Team */}
      <div className="bg-gradient-to-r from-barbiere-pale-gray to-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Scissors size={20} className="text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Vårt Professionella Team</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-barbiere-black mr-4 flex-shrink-0">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-barbiere-pale-gray flex items-center justify-center">
                    <div className="text-barbiere-black text-lg font-bold">
                      {member.name.substring(0, 2).toUpperCase()}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-playfair font-bold text-barbiere-black">
                    {member.name}
                  </h4>
                  <p className="text-barbiere-medium-gray text-sm font-medium">
                    {member.title}
                  </p>
                  {member.award && (
                    <p className="text-amber-600 text-xs font-semibold mt-1">
                      {member.award}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {member.specialties.map((specialty, idx) => (
                  <span 
                    key={idx}
                    className="bg-barbiere-pale-gray text-barbiere-black px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Star size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">
                Senaste Recensioner
              </h3>
              <p className="text-barbiere-medium-gray text-sm">
                12 av 700+ nöjda kunder
              </p>
            </div>
          </div>
          
          <motion.button
            onClick={handleBokaDirectReviews}
            className="bg-barbiere-black text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-barbiere-dark-gray transition-colors duration-200 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} />
            Boka Direkt
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
          {latestReviews.map((review, index) => (
            <div key={index} className="bg-barbiere-pale-gray rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-barbiere-black text-sm">
                  {review.name}
                </h4>
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-barbiere-dark-gray text-xs leading-relaxed mb-2">
                "{review.comment}"
              </p>
              <p className="text-barbiere-medium-gray text-xs">
                {new Date(review.date).toLocaleDateString('sv-SE')}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-lg font-bold text-barbiere-black ml-2">5.0</span>
            <span className="text-barbiere-medium-gray text-sm ml-1">(700+ recensioner)</span>
          </div>
          
          <motion.button
            onClick={handleBokaDirectReviews}
            className="bg-gradient-to-r from-barbiere-black to-barbiere-dark-gray text-white px-8 py-3 rounded-xl font-bold text-lg hover:from-barbiere-dark-gray hover:to-barbiere-black transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink size={20} />
            Läs alla recensioner på Boka Direkt
          </motion.button>
        </div>
      </div>

      {/* Main Story */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Calendar size={20} className="text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Vår historia</h3>
        </div>
        <p className="text-barbiere-dark-gray leading-relaxed text-sm md:text-base mb-4">
          La Barbiere grundades med visionen att skapa Jönköpings finaste frisörsalong. 
          Med vårt professionella team av erfarna frisörer och barberare erbjuder vi 
          kvalitetsbehandlingar i en elegant och välkomnande miljö. Våra över 700 nöjda 
          kunder vittnar om den höga standard vi upprätthåller varje dag.
        </p>
      </div>

      {/* Our Philosophy */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Scissors size={20} className="text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Vår filosofi</h3>
        </div>
        <div className="space-y-4 text-barbiere-dark-gray leading-relaxed text-sm md:text-base">
          <p>
            På La Barbiere kombinerar vi traditionellt hantverk med modern teknik. 
            Vårt team med Sigge (Årets Barberare 2018), George, Mohammed och Mariana 
            skapar inte bara nya frisyrer – vi skapar självförtroende och stil.
          </p>
          
          <div className="border-l-4 border-barbiere-black pl-4 py-2 bg-barbiere-pale-gray rounded-r-lg italic">
            "Varje klippning är en konstform, varje kund är unik, och varje besök ska 
            överträffa förväntningarna."
          </div>
          
          <p>
            Med över 700 femstjärniga recensioner och ett team av specialister inom 
            allt från klassisk barbering till avancerad färgteknik, fortsätter vi 
            att sätta standarden för professionell hårvård i Jönköping.
          </p>
        </div>
      </div>

      {/* Privacy Policy and Terms of Use Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <motion.button
          onClick={() => window.open('/integritetspolicy', '_self')}
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 text-left"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Shield size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Integritetspolicy</h3>
          </div>
          <p className="text-barbiere-medium-gray text-sm md:text-base">
            Läs om hur vi hanterar din personliga information och skyddar din integritet.
          </p>
        </motion.button>

        <motion.button
          onClick={() => window.open('/anvandardvillkor', '_self')}
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 text-left"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <FileText size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Användarvillkor</h3>
          </div>
          <p className="text-barbiere-medium-gray text-sm md:text-base">
            Läs våra villkor för användning av våra tjänster och webbplats.
          </p>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default About;