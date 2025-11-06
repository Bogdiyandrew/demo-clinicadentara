// O bază de date falsă (mock) care simulează un CMS
// Tipul 'Service' definește structura datelor noastre
export interface Service {
  slug: string;
  title: string;
  shortDesc: string; // Folosit în Hero
  longDesc: string; // Descrierea principală
  benefits: string[]; // Listă de beneficii
  steps: { title: string; description: string }[]; // Etapele tratamentului
}

// Interfața pentru baza de date
interface ServiceDatabase {
  [key: string]: Service; // Permite accesul prin slug (ex: db['implant-dentar'])
}

export const serviceDatabase: ServiceDatabase = {
  'implant-dentar': {
    slug: 'implant-dentar',
    title: 'Implanturi Dentare',
    shortDesc: 'Soluția modernă și permanentă pentru înlocuirea dinților lipsă.',
    longDesc: 'Implantul dentar este o componentă chirurgicală care se conectează cu osul maxilarului sau al mandibulei pentru a susține o proteză dentară, cum ar fi o coroană, o punte sau o proteză totală. Este cea mai apropiată soluție de un dinte natural, oferind funcționalitate și estetică de lungă durată.',
    benefits: [
      'Prevenirea pierderii osoase',
      'Îmbunătățirea aspectului fizionomic',
      'Refacerea funcției masticatorii',
      'Durabilitate pe viață cu îngrijire corectă',
      'Nu afectează dinții vecini',
    ],
    steps: [
      { title: 'Consultație și Planificare', description: 'Realizarea unui CT și planificarea 3D a intervenției.' },
      { title: 'Inserarea Implantului', description: 'Intervenția chirurgicală de inserare a implantului în os.' },
      { title: 'Perioada de Osteointegrare', description: 'O perioadă de 3-6 luni în care implantul se vindecă și fuzionează cu osul.' },
      { title: 'Atașarea Bontului Protetic', description: 'Descoperirea implantului și atașarea componentei de legătură.' },
      { title: 'Realizarea Coroanei', description: 'Amprentarea și aplicarea coroanei finale pe implant.' },
    ],
  },
  'estetica-dentara': {
    slug: 'estetica-dentara',
    title: 'Estetică Dentară',
    shortDesc: 'Obțineți zâmbetul strălucitor și aliniat la care ați visat întotdeauna.',
    longDesc: 'Estetica dentară combină arta și știința stomatologiei pentru a îmbunătăți aspectul zâmbetului dumneavoastră. De la albiri profesionale la fațete dentare E-max, creăm zâmbete personalizate care se potrivesc perfect fizionomiei dumneavoastră.',
    benefits: [
      'Încredere în sine sporită',
      'Rezultate rapide și vizibile',
      'Corectarea imperfecțiunilor (culoare, formă, aliniere)',
      'Materiale biocompatibile și durabile',
    ],
    steps: [
      { title: 'Consultație Estetică', description: 'Analiza zâmbetului și simularea digitală a rezultatului (Digital Smile Design).' },
      { title: 'Albire Profesională', description: 'Dacă este necesar, se începe cu o ședință de albire în cabinet.' },
      { title: 'Prepararea Dinților', description: 'Șlefuirea minim invazivă a dinților pentru aplicarea fațetelor.' },
      { title: 'Aplicarea Fațetelor', description: 'Cimentarea fațetelor ceramice finale pentru un zâmbet perfect.' },
    ],
  },
  // Poți adăuga 'ortodontie' și 'urgente' aici...
};