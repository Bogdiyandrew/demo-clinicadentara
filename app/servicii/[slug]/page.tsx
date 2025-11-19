export interface ServiceStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  steps: ServiceStep[];
  benefits: string[];
}

export const serviceDatabase: Record<string, Service> = {
  'implant-dentar': {
    slug: 'implant-dentar',
    title: 'Implanturi Dentare',
    shortDesc: 'Soluția ideală pentru înlocuirea dinților lipsă, redând funcționalitatea și estetica naturală.',
    longDesc: `Implantul dentar este cea mai modernă și eficientă soluție pentru înlocuirea unuia sau mai multor dinți lipsă. Acesta constă într-un șurub din titan sau zirconiu, care înlocuiește rădăcina dintelui natural, fiind inserat în osul maxilar.

    Procedura este minim invazivă și nedureroasă, realizându-se sub anestezie locală. După perioada de vindecare (osteointegrare), pe implant se atașează bontul protetic și coroana dentară, rezultatul fiind un dinte care arată și se simte exact ca unul natural.`,
    steps: [
      { title: 'Consultație și Planificare', description: 'Evaluarea stării de sănătate orală, realizarea unui CT dentar și stabilirea planului de tratament personalizat.' },
      { title: 'Inserarea Implantului', description: 'Intervenția chirurgicală propriu-zisă de introducere a implantului în os, sub anestezie locală.' },
      { title: 'Perioada de Vindecare', description: 'Procesul de osteointegrare, care durează între 3 și 6 luni, timp în care implantul se fixează în os.' },
      { title: 'Montarea Coroanei', description: 'Realizarea și fixarea coroanei dentare definitive pe implant, restabilind complet estetica și funcționalitatea.' }
    ],
    benefits: [
      'Aspect și funcționalitate identică cu dinții naturali',
      'Previne resorbția osoasă și îmbătrânirea prematură a feței',
      'Nu afectează dinții vecini (spre deosebire de punțile dentare)',
      'Durabilitate pe viață cu o igienă corespunzătoare'
    ]
  },
  'estetica-dentara': {
    slug: 'estetica-dentara',
    title: 'Estetică Dentară',
    shortDesc: 'Zâmbetul perfect prin fațete dentare, albire profesională și design digital al zâmbetului.',
    longDesc: `Estetica dentară nu este doar despre frumusețe, ci și despre încredere în sine. Folosim tehnologii avansate precum Digital Smile Design (DSD) pentru a proiecta zâmbetul ideal înainte de a începe tratamentul.

    Serviciile noastre includ fațete dentare ceramice (Veneers), coroane integral ceramice sau din zirconiu, și albire dentară profesională cu lampa ZOOM sau laser, pentru rezultate spectaculoase și durabile.`,
    steps: [
      { title: 'Analiză Estetică', description: 'Fotografii de diagnostic și simulare digitală a rezultatului final (Digital Smile Design).' },
      { title: 'Pregătirea Dinților', description: 'O intervenție minim invazivă pentru a pregăti suprafața dinților, dacă este necesar.' },
      { title: 'Proba Mock-up', description: 'Testarea noului zâmbet cu materiale provizorii pentru a valida forma și culoarea.' },
      { title: 'Cimentarea Finală', description: 'Fixarea fațetelor sau coroanelor definitive pentru un zâmbet strălucitor.' }
    ],
    benefits: [
      'Zâmbet alb și strălucitor în timp record',
      'Corectarea formei, culorii și poziției dinților',
      'Materiale biocompatibile și rezistente',
      'Rezultate naturale și armonioase'
    ]
  },
  'ortodontie': {
    slug: 'ortodontie',
    title: 'Ortodonție',
    shortDesc: 'Alinierea dinților și corectarea mușcăturii folosind aparate dentare moderne, fixe sau invizibile.',
    longDesc: `Ortodonția se ocupă cu diagnosticarea, prevenirea și tratarea anomaliilor dento-maxilare. Dinții înghesuiți sau spațiați nu reprezintă doar o problemă estetică, ci pot afecta sănătatea gingiilor și a articulației temporo-mandibulare.

    Oferim soluții moderne, de la aparate metalice și ceramice (Safir), până la alignere invizibile (Spark, Invisalign), care sunt confortabile și estetice.`,
    steps: [
      { title: 'Dosar Ortodontic', description: 'Amprente digitale, fotografii și radiografii pentru analiza completă a cazului.' },
      { title: 'Montarea Aparatului', description: 'Aplicarea aparatului fix sau predarea setului de alignere invizibile.' },
      { title: 'Activări Periodice', description: 'Vizite lunare pentru ajustarea aparatului și monitorizarea progresului.' },
      { title: 'Contenție', description: 'Menținerea rezultatului obținut după îndepărtarea aparatului dentar.' }
    ],
    benefits: [
      'Îmbunătățește estetica facială și a zâmbetului',
      'Facilitează igiena orală corectă',
      'Rezolvă problemele de masticație și fonatori',
      'Previne uzura prematură a dinților'
    ]
  },
  'endodontie': {
    slug: 'endodontie',
    title: 'Endodonție (Canal)',
    shortDesc: 'Salvarea dinților naturali prin tratamente de canal precise, realizate sub microscop.',
    longDesc: `Endodonția modernă realizată sub microscop permite salvarea dinților care altfel ar fi extrași. Tratamentul de canal presupune îndepărtarea nervului inflamat sau infectat, curățarea și dezinfectarea canalelor radiculare și obturarea (sigilarea) acestora.

    Utilizarea microscopului dentar ne oferă o vizibilitate de până la 25x mai mare, asigurând o rată de succes maximă a tratamentului.`,
    steps: [
      { title: 'Diagnostic și Anestezie', description: 'Identificarea dintelui problemă și asigurarea confortului total prin anestezie.' },
      { title: 'Curățare sub Microscop', description: 'Îndepărtarea țesutului infectat și a nervului folosind instrumentar rotativ de precizie.' },
      { title: 'Dezinfectare', description: 'Sterilizarea canalelor cu soluții specifice și laser dentar.' },
      { title: 'Obturarea Canalului', description: 'Sigilarea etanșă a canalelor pentru a preveni reinfecția.' }
    ],
    benefits: [
      'Salvarea dintelui natural de la extracție',
      'Eliminarea imediată a durerii',
      'Precizie maximă datorită microscopului',
      'Tratament realizat, de regulă, într-o singură ședință'
    ]
  },
  'parodontologie': {
    slug: 'parodontologie',
    title: 'Parodontologie',
    shortDesc: 'Tratamentul bolilor gingivale și prevenirea pierderii dinților cauzate de parodontoză.',
    longDesc: `Parodontologia se ocupă cu sănătatea țesuturilor de susținere a dintelui (gingie, os, ligamente). Boala parodontală ("parodontoza") este principala cauză a pierderii dinților la adulți, dar poate fi tratată și oprită din evoluție dacă este diagnosticată la timp.

    Tratamentele noastre variază de la igienizări profunde (chiuretaj subgingival) și terapie laser, până la tehnici regenerative avansate.`,
    steps: [
      { title: 'Parodontometrie', description: 'Măsurarea pungilor parodontale și evaluarea gradului de afectare.' },
      { title: 'Terapie Inițială', description: 'Detartraj, periaj și chiuretaj subgingival pentru eliminarea tartrului profund.' },
      { title: 'Terapie Laser', description: 'Decontaminarea bacteriană a pungilor parodontale folosind laserul.' },
      { title: 'Menținere', description: 'Monitorizare periodică strictă pentru a preveni recidiva.' }
    ],
    benefits: [
      'Oprește sângerarea gingivală și retracția gingiilor',
      'Elimină respirația urât mirositoare (halena)',
      'Previne mobilitatea și pierderea dinților',
      'Îmbunătățește starea generală de sănătate'
    ]
  },
  'protetica-dentara': {
    slug: 'protetica-dentara',
    title: 'Protetică Dentară',
    shortDesc: 'Restaurarea integrității arcadelor dentare prin coroane, punți și proteze estetice.',
    longDesc: `Protetica dentară refaçe echilibrul funcțional și estetic al gurii atunci când există dinți distruși coronar sau lipsă. Utilizăm materiale de ultimă generație, precum ceramica presată (E-max) și Zirconiul Multilayer, care imită perfect transluciditatea dintelui natural.

    Toate lucrările sunt realizate prin tehnologie CAD/CAM (scanare și frezare computerizată) pentru o adaptare perfectă.`,
    steps: [
      { title: 'Amprenta Digitală', description: 'Scanarea intraorală 3D, fără disconfortul materialelor clasice de amprentă.' },
      { title: 'Design Computerizat', description: 'Proiectarea viitoarei lucrări în software specializat.' },
      { title: 'Proba Lucrării', description: 'Verificarea adaptării, a ocluziei (mușcăturii) și a esteticii.' },
      { title: 'Fixarea Definitivă', description: 'Cimentarea lucrării protetice pentru un rezultat durabil.' }
    ],
    benefits: [
      'Restaurare rapidă și precisă (CAD/CAM)',
      'Estetică superioară (Zirconiu, E-max)',
      'Biocompatibilitate totală cu țesuturile',
      'Rezistență mecanică ridicată'
    ]
  },
  'chirurgie-orala': {
    slug: 'chirurgie-orala',
    title: 'Chirurgie Orală',
    shortDesc: 'Intervenții chirurgicale complexe, extracții de molari de minte și adiții osoase.',
    longDesc: `Chirurgia orală cuprinde o gamă largă de manopere, de la extracții dentare complexe (molari de minte incluși, canini incluși), până la rezecții apicale și chirurgie pre-protetică.

    Punem un accent major pe confortul pacientului, utilizând tehnici atraumatice și PRF (Platelet Rich Fibrin) pentru a accelera vindecarea post-operatorie.`,
    steps: [
      { title: 'Evaluare Radiologică', description: 'Analiza detaliată a poziției dintelui și a structurilor învecinate pe CBCT.' },
      { title: 'Intervenția Chirurgicală', description: 'Realizarea manoperei sub anestezie locală profundă.' },
      { title: 'Utilizare PRF', description: 'Aplicarea membranelor obținute din sângele pacientului pentru vindecare rapidă.' },
      { title: 'Îngrijire Post-op', description: 'Monitorizarea vindecării și îndepărtarea firelor de sutură (dacă e cazul).' }
    ],
    benefits: [
      'Rezolvarea sigură a cazurilor complexe',
      'Vindecare accelerată și edem (umflătură) redus',
      'Prevenirea complicațiilor la dinții vecini',
      'Pregătirea terenului pentru implanturi (adiții osoase)'
    ]
  },
  'pedodontie': {
    slug: 'pedodontie',
    title: 'Pedodonție (Copii)',
    shortDesc: 'Tratamente dedicate copiilor într-un mediu prietenos, fără frică de dentist.',
    longDesc: `Sănătatea orală a copilului tău este esențială pentru o dezvoltare armonioasă. Pedodonția se ocupă cu îngrijirea dinților de lapte și a dinților permanenți tineri.

    Abordarea noastră este bazată pe răbdare, empatie și tehnici de acomodare (Tell-Show-Do), transformând vizita la dentist într-o experiență pozitivă și educativă.`,
    steps: [
      { title: 'Vizita de Acomodare', description: 'Cunoașterea medicului și a cabinetului într-o atmosferă de joacă.' },
      { title: 'Prevenție', description: 'Sigilarea șanțurilor și fosetelor pentru a preveni cariile și fluorizări locale.' },
      { title: 'Tratamentul Cariilor', description: 'Obturații cu materiale colorate atractive pentru copii.' },
      { title: 'Educație Dentară', description: 'Învățarea tehnicilor corecte de periaj.' }
    ],
    benefits: [
      'Prevenirea fricii de dentist la vârstă adultă',
      'Menținerea spațiului pentru dinții definitivi',
      'Prevenirea durerilor și a infecțiilor',
      'Dezvoltarea unor obiceiuri sănătoase pe viață'
    ]
  },
  'profilaxie': {
    slug: 'profilaxie',
    title: 'Profilaxie și Igienă',
    shortDesc: 'Prevenirea afecțiunilor dentare prin igienizări profesionale periodice.',
    longDesc: `Cea mai bună metodă de tratament este prevenția. Ședințele periodice de profilaxie (recomandate o dată la 6 luni) te ajută să eviți tratamentele complexe și costisitoare în viitor.

    Pachetul nostru de igienizare completă include: detartraj cu ultrasunete, periaj profesional și Air-Flow (jet de bicarbonat) pentru îndepărtarea petelor.`,
    steps: [
      { title: 'Detartraj Ultrasunete', description: 'Îndepărtarea tartrului supra și subgingival.' },
      { title: 'Air-Flow', description: 'Curățarea petelor de tutun, cafea și a plăcii bacteriene din zonele greu accesibile.' },
      { title: 'Periaj Profesional', description: 'Lustruirea suprafețelor dentare cu paste speciale.' },
      { title: 'Instructaj', description: 'Personalizarea tehnicilor de igienă orală pentru acasă.' }
    ],
    benefits: [
      'Prevenirea cariilor și a bolii parodontale',
      'Respirație proaspătă',
      'Dinți mai albi și mai curați',
      'Economisirea banilor pe termen lung'
    ]
  }
};