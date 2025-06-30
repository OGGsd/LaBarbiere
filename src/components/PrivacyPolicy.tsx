import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database, Mail, Phone, MapPin, Calendar, Users, Scissors } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Fallback to home page
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-barbiere-black text-white py-4 px-4 shadow-lg sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center">
          <button
            onClick={handleBackClick}
            className="mr-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            aria-label="Gå tillbaka"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="w-16 h-8 bg-white flex items-center justify-center" style={{ borderRadius: '4px' }}>
            <img 
              src="/La-barbiere-logga-1000-x-500-px-1024x512.png" 
              alt="La Barbiere Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-w-4xl mx-auto space-y-6">
        
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
          <h2 className="text-xl md:text-2xl font-playfair font-bold text-barbiere-black mb-2">
            Integritetspolicy
          </h2>
          <p className="text-barbiere-medium-gray text-sm md:text-base">
            Uppdaterad: {new Date().toLocaleDateString('sv-SE')}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Shield size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Introduktion</h3>
          </div>
          <p className="text-barbiere-dark-gray leading-relaxed text-sm md:text-base">
            La Barbiere ("vi", "oss", "vårt") respekterar din integritet och är engagerade i att skydda 
            din personliga information. Denna integritetspolicy förklarar hur vi samlar in, använder, lagrar och 
            skyddar din information när du använder våra frisörtjänster, besöker våra lokaler eller använder vår webbplats.
          </p>
        </div>

        {/* Company Information */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Users size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Personuppgiftsansvarig</h3>
          </div>
          <div className="space-y-3 text-barbiere-dark-gray text-sm md:text-base">
            <div className="flex items-start">
              <MapPin size={14} className="mr-2 text-barbiere-black mt-1 flex-shrink-0" />
              <div>
                <strong>La Barbiere</strong><br />
                Skolgatan 15<br />
                553 16 Jönköping
              </div>
            </div>
            <div className="flex items-center">
              <Phone size={14} className="mr-2 text-barbiere-black flex-shrink-0" />
              <span>036-550 53 11</span>
            </div>
            <div className="flex items-center">
              <Mail size={14} className="mr-2 text-barbiere-black flex-shrink-0" />
              <span>info@labarbiere.se</span>
            </div>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Database size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Vilken information samlar vi in?</h3>
          </div>
          <div className="space-y-4 text-barbiere-dark-gray text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-barbiere-black mb-2">Personuppgifter</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Namn och kontaktuppgifter (telefonnummer, e-postadress)</li>
                <li>Bokningsinformation och behandlingshistorik</li>
                <li>Hårtyp och önskemål för skräddarsydd behandling</li>
                <li>Betalningsinformation (hanteras säkert via tredjepartstjänster)</li>
                <li>Kommunikation via telefon, e-post eller sociala medier</li>
                <li>Eventuella allergier eller hudkänslighet som påverkar behandling</li>
                <li>Bilder av frisyrresultat (endast med ditt uttryckliga samtycke)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-barbiere-black mb-2">Teknisk information</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP-adress och enhetsidentifierare</li>
                <li>Webbläsarinformation och användningsdata</li>
                <li>Cookies och liknande teknologier</li>
                <li>Information från bokningssystem (Bokadirekt.se)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-barbiere-black mb-2">Behandlingsinformation</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Val av frisörbehandling och behandlingstid</li>
                <li>Produktval och tekniker som används</li>
                <li>Feedback och kommentarer om behandlingar</li>
                <li>Uppföljningsinformation för behandlingsresultat</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal basis for processing */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Lock size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Rättslig grund för behandling</h3>
          </div>
          <div className="space-y-3 text-barbiere-dark-gray text-sm md:text-base">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span><strong>Avtal:</strong> För att fullfölja vårt avtal med dig när du bokar frisörbehandlingar</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span><strong>Samtycke:</strong> När du ger samtycke för marknadsföring, bilder eller nyhetsbrev</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span><strong>Berättigat intresse:</strong> För att förbättra våra tjänster och kundupplevelse</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span><strong>Rättslig förpliktelse:</strong> För att uppfylla bokförings- och skattelagstiftning</span>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Scissors size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Hur använder vi din information?</h3>
          </div>
          <div className="space-y-3 text-barbiere-dark-gray text-sm md:text-base">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Hantera bokningar och tillhandahålla frisörbehandlingar</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Kommunicera med dig om dina bokningar och våra tjänster</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Anpassa behandlingar efter din hårtyp och önskemål</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Förbättra våra tjänster och kundupplevelse</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Skicka marknadsföringsinformation (endast med ditt samtycke)</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Dela resultatbilder på sociala medier (endast med ditt uttryckliga samtycke)</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Uppfylla rättsliga förpliktelser</span>
            </div>
          </div>
        </div>

        {/* Data sharing */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Users size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Delning av information</h3>
          </div>
          <div className="space-y-4 text-barbiere-dark-gray text-sm md:text-base">
            <p>Vi delar aldrig dina personuppgifter med tredje part utan ditt samtycke, förutom i följande fall:</p>
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Bokadirekt.se:</strong> För hantering av onlinebokningar</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Betalningsleverantörer:</strong> För säker hantering av betalningar</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Myndigheter:</strong> När det krävs enligt lag</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Tekniska leverantörer:</strong> För drift av webbplats och IT-säkerhet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Eye size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Dina rättigheter enligt GDPR</h3>
          </div>
          <p className="text-barbiere-dark-gray leading-relaxed text-sm md:text-base mb-4">
            Enligt dataskyddsförordningen (GDPR) har du följande rättigheter:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm"><strong>Rätt till information</strong> - om vilka uppgifter vi behandlar</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm"><strong>Rätt till rättelse</strong> - korrigering av felaktiga uppgifter</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm"><strong>Rätt till radering</strong> - "rätten att bli glömd"</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm"><strong>Rätt till begränsning</strong> - begränsa behandlingen</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm"><strong>Rätt till dataportabilitet</strong> - få ut dina uppgifter</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm"><strong>Rätt att invända</strong> - mot behandlingen</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm"><strong>Rätt att återkalla samtycke</strong> - när som helst</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm"><strong>Rätt att klaga</strong> - till Integritetsskyddsmyndigheten</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Mail size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Kontakta oss</h3>
          </div>
          <p className="text-barbiere-dark-gray leading-relaxed text-sm md:text-base mb-4">
            Om du har frågor om denna integritetspolicy eller vill utöva dina rättigheter, kontakta oss:
          </p>
          <div className="space-y-3 text-barbiere-dark-gray">
            <div className="flex items-center">
              <Phone size={16} className="mr-3 text-barbiere-black" />
              <span className="text-sm md:text-base">036-550 53 11</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-3 text-barbiere-black" />
              <span className="text-sm md:text-base">info@labarbiere.se</span>
            </div>
            <div className="flex items-start">
              <MapPin size={16} className="mr-3 text-barbiere-black mt-1" />
              <div className="text-sm md:text-base">
                <div>La Barbiere</div>
                <div>Skolgatan 15</div>
                <div>553 16 Jönköping</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-barbiere-pale-gray rounded-lg">
            <h4 className="font-semibold text-barbiere-black mb-2">Integritetsskyddsmyndigheten</h4>
            <p className="text-barbiere-dark-gray text-sm">
              Om du är missnöjd med hur vi hanterar dina personuppgifter har du rätt att klaga till 
              Integritetsskyddsmyndigheten (IMY). Besök <strong>imy.se</strong> för mer information.
            </p>
          </div>
        </div>

        {/* Updates */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Calendar size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Ändringar av policyn</h3>
          </div>
          <p className="text-barbiere-dark-gray leading-relaxed text-sm md:text-base">
            Vi kan komma att uppdatera denna integritetspolicy från tid till annan. Väsentliga ändringar kommer 
            att kommuniceras via vår webbplats eller genom direkt kommunikation. Vi rekommenderar att du 
            regelbundet läser denna policy för att hålla dig informerad om hur vi skyddar din information.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;