import React from 'react';
import { MapPin, Phone, Clock, Users, Scissors, Star, Facebook, Instagram, Mail, Globe } from 'lucide-react';

const InfoView: React.FC = () => {
  const handlePhoneCall = () => {
    window.location.href = 'tel:0365505311';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@labarbiere.se';
  };

  const handleWebsite = () => {
    const url = 'https://www.labarbiere.se/';
    
    try {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        window.location.href = url;
      }
    } catch (error) {
      window.location.href = url;
    }
  };

  const handleInstagram = () => {
    const url = 'https://www.instagram.com/la.barbiere/';
    
    try {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        window.location.href = url;
      }
    } catch (error) {
      window.location.href = url;
    }
  };

  const handleFacebook = () => {
    const url = 'https://www.facebook.com/labarbiere1/?locale=sv_SE';
    
    try {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        window.location.href = url;
      }
    } catch (error) {
      window.location.href = url;
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-6">
      {/* Header */}
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

      {/* About section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Scissors size={20} className="text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Välkommen till oss</h3>
        </div>
        <div className="space-y-4 text-barbiere-dark-gray leading-relaxed text-sm md:text-base">
          <p className="font-semibold text-barbiere-black">
            Jönköpings finaste frisörsalong som erbjuder professionella behandlingar.
          </p>
          <p>
            På La Barbiere skapar vi inte bara en ny frisyr - vi skapar en upplevelse. 
            Våra erfarna stylister tar hand om dig från konsultation till färdig look, 
            med fokus på kvalitet och personlig service.
          </p>
          <p>
            Oavsett om du söker en klassisk klippning, modern färgning, eller en komplett 
            transformation, kommer du att bli professionellt omhändertagen. Vi använder 
            endast högkvalitativa produkter och de senaste teknikerna inom hårvård.
          </p>
          <p>
            Vår passion är att få dig att känna dig vacker och självsäker när du lämnar vår salong.
          </p>
        </div>
      </div>

      {/* Services overview */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Star size={20} className="text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Våra tjänster</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="bg-barbiere-pale-gray rounded-lg p-4">
              <h4 className="font-semibold text-barbiere-black text-sm md:text-base mb-2">
                Klippning & Styling
              </h4>
              <p className="text-barbiere-dark-gray text-xs md:text-sm">
                Professionell klippning för dam, herr och barn. Styling, föning och uppsättningar.
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="font-semibold text-barbiere-black text-sm md:text-base mb-2">
                Färgning & Behandlingar
              </h4>
              <p className="text-barbiere-dark-gray text-xs md:text-sm">
                Helfärgning, slingor, balayage, toning och vårdande hårbehandlingar.
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-4">
              <h4 className="font-semibold text-amber-800 text-sm md:text-base mb-2">
                Skägg & Herrbehandlingar
              </h4>
              <p className="text-amber-700 text-xs md:text-sm">
                Professionell skäggtrimning, rakning och ansiktsbehandlingar för män.
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 text-sm md:text-base mb-2">
                Premium Services
              </h4>
              <p className="text-blue-700 text-xs md:text-sm">
                Bröllop- & event styling, kemiska behandlingar och hårförlängning.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 text-sm md:text-base mb-2">
                Konsultation
              </h4>
              <p className="text-purple-700 text-xs md:text-sm">
                Gratis konsultation för att hitta den perfekta stilen för dig.
              </p>
            </div>
            
            <div className="bg-barbiere-pale-gray rounded-lg p-4">
              <h4 className="font-semibold text-barbiere-black text-sm md:text-base mb-2">
                Kvalitetsgaranti
              </h4>
              <p className="text-barbiere-dark-gray text-xs md:text-sm">
                Vi står bakom vårt arbete och strävar efter 100% kundnöjdhet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Location and Contact */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <MapPin size={20} className="text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Hitta till oss</h3>
        </div>
        <div className="space-y-4 text-barbiere-dark-gray">
          <div className="flex items-start">
            <MapPin size={14} className="mr-2 text-barbiere-medium-gray mt-1 flex-shrink-0" />
            <span className="text-sm md:text-base">
              Skolgatan 15<br />
              553 16 Jönköping
            </span>
          </div>
          <div className="flex items-center">
            <Phone size={14} className="mr-2 text-barbiere-medium-gray flex-shrink-0" />
            <span className="text-sm md:text-base">036-550 53 11</span>
          </div>
          <div className="flex items-start">
            <Clock size={14} className="mr-2 text-barbiere-medium-gray mt-1 flex-shrink-0" />
            <div className="text-sm md:text-base">
              <div className="mb-2">
                <span className="font-semibold text-barbiere-black">Öppettider:</span>
              </div>
              <div className="space-y-1">
                <div>Måndag – Fredag: 09:00 – 18:00</div>
                <div>Lördag: 09:00 – 16:00</div>
                <div>Söndag: Stängd</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-6">
          <button
            onClick={handlePhoneCall}
            className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            title="Ring oss"
          >
            <Phone size={18} />
          </button>
          <button
            onClick={handleEmail}
            className="p-3 bg-barbiere-dark-gray text-white rounded-lg hover:bg-barbiere-black transition-colors"
            title="Skicka e-post"
          >
            <Mail size={18} />
          </button>
          <button
            onClick={handleInstagram}
            className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
            title="Följ oss på Instagram"
          >
            <Instagram size={18} />
          </button>
          <button
            onClick={handleFacebook}
            className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            title="Följ oss på Facebook"
          >
            <Facebook size={18} />
          </button>
          <button
            onClick={handleWebsite}
            className="p-3 bg-barbiere-black text-white rounded-lg hover:bg-barbiere-dark-gray transition-colors"
            title="Besök hemsida"
          >
            <Globe size={18} />
          </button>
        </div>
      </div>

      {/* Website Button - Full width */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-center">
          <button
            onClick={handleWebsite}
            className="flex items-center justify-center w-full max-w-md bg-gradient-to-r from-barbiere-black to-barbiere-dark-gray text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-barbiere-dark-gray hover:to-barbiere-black transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <Globe size={24} className="mr-3" />
            <span>www.labarbiere.se</span>
          </button>
        </div>
        <p className="text-center text-barbiere-medium-gray text-sm mt-3">
          Besök vår hemsida för mer information
        </p>
      </div>

      {/* Professional info */}
      <div className="bg-gradient-to-r from-barbiere-pale-gray to-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Users size={20} className="text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Professionell kvalitet!</h3>
        </div>
        <p className="text-barbiere-dark-gray leading-relaxed text-sm md:text-base">
          Våra erfarna frisörer har gedigen utbildning och använder endast de bästa produkterna. 
          Du kan förvänta dig en personlig konsultation, professionell service och resultat som 
          överträffar dina förväntningar. Varje besök är skräddarsytt efter dina önskemål och 
          hårtyp – vi ser fram emot att välkomna dig till La Barbiere!
        </p>
      </div>
    </div>
  );
};

export default InfoView;