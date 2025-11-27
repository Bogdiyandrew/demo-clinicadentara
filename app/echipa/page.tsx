'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Award,
    Heart,
    Stethoscope,
    GraduationCap,
    Linkedin,
    Twitter,
    Mail
} from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

const team = [
    {
        name: 'Dr. Andrei Popescu',
        role: 'Fondator & Medic Specialist',
        specialization: 'Implantologie & Estetică',
        image: '/team/member-1.png',
        bio: 'Cu peste 15 ani de experiență, Dr. Popescu este recunoscut pentru abordarea sa meticuloasă și pasiunea pentru zâmbete perfecte.',
        social: {
            linkedin: '#',
            twitter: '#',
            email: 'andrei@clinicademo.ro'
        }
    },
    {
        name: 'Dr. Elena Ionescu',
        role: 'Medic primar ortodonție',
        specialization: 'Aparate Dentare & Invisalign',
        image: '/team/member-2.png',
        bio: 'Specialistă în ortodonție invizibilă, Dr. Ionescu transformă zâmbete cu răbdare și precizie, folosind cele mai noi tehnologii.',
        social: {
            linkedin: '#',
            twitter: '#',
            email: 'elena@clinicademo.ro'
        }
    },
    {
        name: 'Dr. Mihai Radu',
        role: 'Chirurg Oro-Maxilo-Facial',
        specialization: 'Chirurgie Complexă',
        image: '/team/member-3.png',
        bio: 'Expert în intervenții complexe, Dr. Radu asigură tratamente chirurgicale sigure și confortabile pentru fiecare pacient.',
        social: {
            linkedin: '#',
            twitter: '#',
            email: 'mihai@clinicademo.ro'
        }
    },
    {
        name: 'Asist. Maria Dumitrescu',
        role: 'Asistentă şefă',
        specialization: 'Igienă & Profilaxie',
        image: '/team/member-4.png',
        bio: 'Sufletul clinicii noastre, Maria se asigură că fiecare pacient se simte relaxat și bine îngrijit pe parcursul vizitei.',
        social: {
            linkedin: '#',
            twitter: '#',
            email: 'maria@clinicademo.ro'
        }
    }
];

const values = [
    {
        icon: Award,
        title: 'Excelență',
        description: 'Nu facem compromisuri când vine vorba de calitatea actului medical. Folosim cele mai bune materiale și tehnologii.'
    },
    {
        icon: Heart,
        title: 'Empatie',
        description: 'Înțelegem că vizita la dentist poate fi stresantă. Tratăm fiecare pacient cu grijă, răbdare și înțelegere.'
    },
    {
        icon: GraduationCap,
        title: 'Educație Continuă',
        description: 'Echipa noastră participă constant la cursuri și conferințe internaționale pentru a fi la curent cu ultimele inovații.'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-slate-50">

            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                            Echipa noastră
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading text-slate-900 mb-6">
                            Experți dedicați <br />
                            <span className="text-gradient">Zâmbetului tău</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Cunoaște oamenii din spatele tehnologiei. O echipă de profesioniști pasionați,
                            uniți de dorința de a oferi cele mai bune tratamente stomatologice.
                        </p>
                    </motion.div>
                </div>
            </section>


            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
                            >
                                <div className="aspect-3/4 relative overflow-hidden bg-slate-100">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div className="flex gap-4">
                                            <a href={member.social.linkedin} className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-primary transition-colors">
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                            <a href={member.social.twitter} className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-primary transition-colors">
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                            <a href={`mailto:${member.social.email}`} className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-primary transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                                        <p className="text-primary font-medium text-sm">{member.role}</p>
                                        <p className="text-slate-400 text-xs uppercase tracking-wider mt-1">{member.specialization}</p>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            <section className="py-20 px-4 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
                            Valorile care ne ghideazǎ
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Credem că stomatologia modernă înseamnă mai mult decât tratamente – înseamnă o relație bazată pe încredere și respect.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary">
                                    <value.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />
        </div>
    );
}
