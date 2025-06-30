import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Calendar, CreditCard, AlertTriangle, Clock, Users, Shield, Scissors, MapPin, Phone } from 'lucide-react';

const TermsOfService: React.FC = () => {
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
            Användarvillkor
          </h2>
          <p className="text-barbiere-medium-gray text-sm md:text-base">
            Uppdaterad: {new Date().toLocaleDateString('sv-SE')}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <FileText size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Allmänna villkor</h3>
          </div>
          <p className="text-barbiere-dark-gray leading-relaxed text-sm md:text-base">
            Välkommen till La Barbiere! Dessa användarvillkor ("Villkor") styr din användning av 
            våra frisörtjänster, webbplats och besök på våra lokaler. Genom att använda våra tjänster eller 
            boka behandlingar accepterar du dessa villkor i sin helhet. Läs igenom dem noggrant innan du 
            genomför en bokning.
          </p>
        </div>

        {/* Company info */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Users size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Om oss</h3>
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
            <p className="text-sm italic">
              Vi är en registrerad frisörsalong som erbjuder professionella frisörtjänster enligt 
              svenska bestämmelser för hälso- och skönhetsvård.
            </p>
          </div>
        </div>

        {/* Our Services */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Scissors size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Våra tjänster</h3>
          </div>
          <div className="space-y-4 text-barbiere-dark-gray text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-barbiere-black mb-2">Vi erbjuder följande frisörtjänster:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Herrklippning och skäggtrimning</strong> - Professionell klippning och skäggvård</li>
                <li><strong>Damklippning</strong> - Klippning för kort och långt hår</li>
                <li><strong>Färgning och nyansering</strong> - Helfärgning, slingor, balayage och toning</li>
                <li><strong>Styling och föning</strong> - Professionell styling för alla tillfällen</li>
                <li><strong>Specialbehandlingar</strong> - Barnklippning, pensionärsrabatt, studentpriser</li>
                <li><strong>Bryn- och fransbehandling</strong> - Brynsformning och färgning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-barbiere-black mb-2">Kvalitet och säkerhet</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Alla behandlingar utförs av professionella frisörer</li>
                <li>Vi följer strikta hygien- och säkerhetsrutiner</li>
                <li>Individuellt anpassade behandlingar efter dina behov</li>
                <li>Vi använder endast högkvalitativa produkter och verktyg</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Booking Terms */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Calendar size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Bokningsvillkor</h3>
          </div>
          <div className="space-y-4 text-barbiere-dark-gray text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-barbiere-black mb-2">Bokning och bekräftelse</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Bokningar görs online via Bokadirekt.se, per telefon (036-550 53 11) eller på plats</li>
                <li>Alla bokningar måste bekräftas av oss för att vara giltiga</li>
                <li>Du får bekräftelse via SMS eller e-post</li>
                <li>Vi förbehåller oss rätten att avböja bokningar</li>
                <li>Du måste vara minst 16 år gammal för att boka behandling själv</li>
                <li>Personer under 18 år behöver vårdnadshavares samtycke för vissa behandlingar</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-barbiere-black mb-2">Förberedelser inför behandling</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Kom 5-10 minuter före din bokade tid</li>
                <li>Informera om eventuella allergier eller hudkänslighet</li>
                <li>Ha rent hår om inget annat anges</li>
                <li>Ta av smycken och accessoarer som kan hindra behandlingen</li>
                <li>Diskutera dina önskemål och förväntningar med din frisör</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-barbiere-black mb-2">Avbokning och ändringar</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Avbokning:</strong> Minst 24 timmar i förväg utan kostnad</li>
                <li><strong>Sen avbokning:</strong> Mindre än 24 timmar - 50% av behandlingens pris debiteras</li>
                <li><strong>Utebliven behandling:</strong> Fullt pris debiteras</li>
                <li><strong>Ändringar:</strong> Kontakta oss minst 24 timmar före för att ändra tid</li>
                <li><strong>Sjukdom:</strong> Vid akut sjukdom accepteras avbokning utan kostnad</li>
                <li>Kontakta oss på 036-550 53 11 för avbokning eller ändringar</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-barbiere-black mb-2">Förseningar</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Vid försening kortas behandlingstiden ner för att hålla schemat</li>
                <li>Fullt pris debiteras även vid förkortad behandling</li>
                <li>Vi strävar efter flexibilitet men kan inte garantera ombokning vid försening</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <CreditCard size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Betalningsvillkor</h3>
          </div>
          <div className="space-y-3 text-barbiere-dark-gray text-sm md:text-base">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Betalning sker efter avslutad behandling på plats</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Vi accepterar kontanter, bankkort, Swish och andra digitala betalningsmetoder</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Priser kan ändras utan förvarning - aktuella priser finns på hemsidan och Bokadirekt</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Alla priser inkluderar moms enligt svensk lag</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Dricks är frivilligt och uppskattas</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Bokadirekt.se kan kräva förskottsbetalning för vissa bokningar</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Kvitto utfärds alltid vid behandling</span>
            </div>
          </div>
        </div>

        {/* Health and Safety */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Shield size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Hälsa och säkerhet</h3>
          </div>
          <div className="space-y-4 text-barbiere-dark-gray text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-barbiere-black mb-2">Din hälsa och säkerhet</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Informera alltid om allergier, hudkänslighet eller medicinska tillstånd</li>
                <li>Meddela omedelbart om du känner obehag under behandlingen</li>
                <li>Vi följer alla hälso- och säkerhetsbestämmelser enligt svensk lag</li>
                <li>Sterilisering av verktyg enligt branschstandard</li>
                <li>Om du är sjuk, vänligen avboka för att skydda andra kunder och personal</li>
                <li>Vi förbehåller oss rätten att vägra behandling av hälsoskäl</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-barbiere-black mb-2">Förväntade uppförande</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Respektfullt bemötande av personal och andra kunder</li>
                <li>Punktlighet för bokade tider</li>
                <li>Följ personalens instruktioner och säkerhetsriktlinjer</li>
                <li>Ingen konsumtion av alkohol eller droger före behandling</li>
                <li>Respektera våra lokaler och utrustning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service quality */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Scissors size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Servicekvalitet och garanti</h3>
          </div>
          <div className="space-y-4 text-barbiere-dark-gray text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-barbiere-black mb-2">Vår kvalitetsgaranti</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Vi strävar efter högsta kvalitet i alla våra behandlingar</li>
                <li>Om du inte är nöjd, kontakta oss inom 48 timmar efter behandlingen</li>
                <li>Vi erbjuder kompletterande behandling vid behov</li>
                <li>Feedback och förslag är alltid välkomna för att förbättra våra tjänster</li>
                <li>Alla våra frisörer har professionell utbildning och certifiering</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-barbiere-black mb-2">Behandlingsresultat</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Individuella resultat kan variera beroende på hårtyp och önskemål</li>
                <li>Vi garanterar professionell utförande men inte specifika estetiska resultat</li>
                <li>Hårets tillstånd och struktur påverkar slutresultatet</li>
                <li>Eftervård och rätt produkter påverkar hållbarheten</li>
                <li>Färgresultat kan variera beroende på hårets utgångsläge</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Liability */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <AlertTriangle size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Ansvarsbegränsning</h3>
          </div>
          <div className="space-y-3 text-barbiere-dark-gray text-sm md:text-base">
            <p>
              La Barbiere ansvarar inte för:
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Allergiska reaktioner som inte rapporterats i förväg</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Personliga tillhörigheter som försvinner eller skadas</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Resultat som inte uppfyller orealistiska förväntningar</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Skador som uppstår på grund av felaktig information från kunden</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-barbiere-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Problem som uppstår efter behandlingen på grund av bristande eftervård</span>
              </div>
            </div>
            <p className="text-sm italic bg-barbiere-pale-gray p-3 rounded-lg">
              <strong>Viktigt:</strong> Vi har ansvarsförsäkring som täcker vår verksamhet enligt 
              branschstandard. Detta ansvar gäller endast vid påvisad vårdslöshet från vår sida.
            </p>
          </div>
        </div>

        {/* Contact and Disputes */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Phone size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Kontakt och reklamationer</h3>
          </div>
          <div className="space-y-4 text-barbiere-dark-gray text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-barbiere-black mb-2">Klagomål och reklamationer</h4>
              <p className="mb-2">
                För klagomål eller reklamationer, kontakta oss omedelbart:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Telefon: 036-550 53 11</li>
                <li>Besök vår salong på Skolgatan 15, Jönköping</li>
                <li>Följ oss på Instagram: @la.barbiere</li>
                <li>Facebook: facebook.com/labarbiere1</li>
                <li>E-post: info@labarbiere.se</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-barbiere-black mb-2">Reklamationsprocess</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Kontakta oss inom 48 timmar efter behandlingen</li>
                <li>Beskriv problemet så detaljerat som möjligt</li>
                <li>Vi strävar efter att lösa alla problem inom 7 arbetsdagar</li>
                <li>Vid behov erbjuder vi kompletterande behandling eller återbetalning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final note */}
        <div className="bg-gradient-to-r from-barbiere-pale-gray to-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-barbiere-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Scissors size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-playfair font-bold text-barbiere-black">Tack för ditt förtroende!</h3>
          </div>
          <p className="text-barbiere-dark-gray leading-relaxed text-sm md:text-base">
            Vi ser fram emot att välkomna dig till La Barbiere och ge dig den bästa möjliga 
            frisörupplevelsen. Genom att följa dessa villkor skapar vi tillsammans en trygg 
            och professionell miljö för alla våra kunder. Vårt team av Sigge, George, Mohammed 
            och Mariana står redo att ta hand om dig!
          </p>
        </div>

      </div>
    </div>
  );
};

export default TermsOfService;