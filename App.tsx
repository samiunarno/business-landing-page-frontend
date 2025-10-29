import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import LazyLoad from './components/LazyLoad';
import { ThemeProvider } from './contexts/ThemeProvider';

// Lazy-loaded components for performance optimization
const VerticalMarqueeSection = React.lazy(() => import('./components/VerticalMarqueeSection'));
const InteractiveMarqueeSection = React.lazy(() => import('./components/InteractiveMarqueeSection'));
const Services = React.lazy(() => import('./components/Services'));
const Advantages = React.lazy(() => import('./components/Advantages'));
const ValueProps = React.lazy(() => import('./components/ValueProps'));
const Philosophy = React.lazy(() => import('./components/Philosophy'));
const Process = React.lazy(() => import('./components/Process'));
const Showcase = React.lazy(() => import('./components/Showcase'));
const Team = React.lazy(() => import('./components/Team'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const Faq = React.lazy(() => import('./components/Faq'));
const Cta = React.lazy(() => import('./components/Cta'));

const App: React.FC = () => {

    useEffect(() => {
        const loader = document.getElementById('loader');
        const root = document.getElementById('root');

        // This timer ensures the initial content has rendered and styles (especially from Tailwind JIT)
        // have been applied before we reveal the page.
        const timer = setTimeout(() => {
            if (loader) {
                loader.style.opacity = '0';
                // Remove the loader from the DOM after its transition is complete
                loader.addEventListener('transitionend', () => loader.remove());
            }
            if (root) {
                // Fade in the main content
                root.style.opacity = '1';
            }
        }, 500); // A 500ms delay is a safe bet for most connections to avoid any content flash.

        return () => clearTimeout(timer);
    }, []);


    return (
        <ThemeProvider defaultTheme="dark" storageKey="premium-web-theme">
            <div className="overflow-x-hidden">
                <Header />
                <main className="pt-20">
                    <Hero id="home" />
                    <LazyLoad placeholderHeight="90vh"><VerticalMarqueeSection /></LazyLoad>
                    <LazyLoad placeholderHeight="800px"><InteractiveMarqueeSection id="webseiten" /></LazyLoad>
                    <LazyLoad placeholderHeight="700px"><Services id="leistungen" /></LazyLoad>
                    <LazyLoad placeholderHeight="1000px"><Advantages id="vorteile" /></LazyLoad>
                    <LazyLoad placeholderHeight="800px"><ValueProps /></LazyLoad>
                    <LazyLoad placeholderHeight="800px"><Philosophy id="agentur" /></LazyLoad>
                    <LazyLoad placeholderHeight="900px"><Process /></LazyLoad>
                    <LazyLoad placeholderHeight="1000px"><Showcase id="projekte" /></LazyLoad>
                    <LazyLoad placeholderHeight="800px"><Team /></LazyLoad>
                    <LazyLoad placeholderHeight="700px"><Testimonials /></LazyLoad>
                    <LazyLoad placeholderHeight="900px"><Pricing id="preise" /></LazyLoad>
                    <LazyLoad placeholderHeight="800px"><Faq /></LazyLoad>
                    <LazyLoad placeholderHeight="800px"><Cta id="kontakt" /></LazyLoad>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;