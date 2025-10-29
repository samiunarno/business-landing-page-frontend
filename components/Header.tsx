import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

const LogoIcon: React.FC = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const navLinks = [
    { name: "Leistungen", href: "#leistungen" },
    { name: "Projekte", href: "#projekte" },
    { name: "Preise", href: "#preise" },
    { name: "Agentur", href: "#agentur" },
    { name: "Kontakt", href: "#kontakt" },
];


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const handleLinkClick = () => {
        setIsOpen(false);
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/70 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-foreground">
                        <LogoIcon />
                        <span>Premium</span>
                    </a>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} className="text-foreground hover:text-primary transition-colors duration-300">{link.name}</a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                         <ThemeToggle />
                        <a href="#kontakt" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
                            Angebot anfordern
                        </a>
                    </div>
                    
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button onClick={() => setIsOpen(!isOpen)} className="text-foreground focus:outline-none" aria-label="Toggle menu" aria-expanded={isOpen}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-background/90 backdrop-blur-md`}>
                <nav className="flex flex-col items-center space-y-4 py-6">
                    {navLinks.map(link => (
                        <a key={link.name} href={link.href} onClick={handleLinkClick} className="text-lg text-foreground hover:text-primary transition-colors duration-300">{link.name}</a>
                    ))}
                    <a href="#kontakt" onClick={handleLinkClick} className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105">
                        Angebot anfordern
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;