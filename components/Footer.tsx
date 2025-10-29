import React from 'react';
import { TwitterIcon, GithubIcon, LinkedinIcon } from './icons';

const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'Twitter', icon: <TwitterIcon />, href: '#' },
        { name: 'GitHub', icon: <GithubIcon />, href: '#' },
        { name: 'LinkedIn', icon: <LinkedinIcon />, href: '#' },
    ];

    const footerLinks = {
        'Leistungen': [
            { name: 'Webdesign', href: '#leistungen' },
            { name: 'SEO Optimierung', href: '#leistungen' },
            { name: 'Online Shops', href: '#leistungen' },
        ],
        'Agentur': [
            { name: 'Über uns', href: '#agentur' },
            { name: 'Prozess', href: '#agentur' },
            { name: 'Team', href: '#agentur' },
        ],
        'Rechtliches': [
            { name: 'Impressum', href: '#' },
            { name: 'Datenschutz', href: '#' },
            { name: 'Kontakt', href: '#kontakt' },
        ],
    };

    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <a href="#home" className="text-3xl font-bold text-foreground">Premium</a>
                        <p className="text-muted-foreground mt-4 max-w-sm">
                            Professionelles Webdesign, das Ihre Marke stärkt, Besucher fesselt und Ihr Geschäft voranbringt.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map(link => (
                                <a key={link.name} href={link.href} aria-label={link.name} className="text-muted-foreground hover:text-primary transition-colors">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h4 className="font-semibold text-foreground mb-4">{title}</h4>
                                <ul className="space-y-3">
                                    {links.map(link => (
                                        <li key={link.name}>
                                            <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
                    <p>© {new Date().getFullYear()} Premium Webseiten. Alle Rechte vorbehalten.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;