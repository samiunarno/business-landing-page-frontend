import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-4">
        {children}
    </div>
);

const svgProps = {
    className: "w-6 h-6 text-primary",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
};

export const WebDesignIcon: React.FC = () => (
    <IconWrapper>
        <svg {...svgProps}>
            <path d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path><path d="M12 3v18"></path><path d="M5 12h14"></path>
        </svg>
    </IconWrapper>
);

export const SeoIcon: React.FC = () => (
    <IconWrapper>
        <svg {...svgProps}>
            <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
    </IconWrapper>
);

export const ShopIcon: React.FC = () => (
    <IconWrapper>
        <svg {...svgProps}>
            <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path>
        </svg>
    </IconWrapper>
);

export const MaintenanceIcon: React.FC = () => (
    <IconWrapper>
        <svg {...svgProps}>
            <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"></path>
        </svg>
    </IconWrapper>
);

export const TextIcon: React.FC = () => (
    <IconWrapper>
        <svg {...svgProps}>
            <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
        </svg>
    </IconWrapper>
);

export const LogoIcon: React.FC = () => (
    <IconWrapper>
        <svg {...svgProps}>
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>
        </svg>
    </IconWrapper>
);

export const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || "w-12 h-12 text-primary/20"} viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.5 10c0-2.21 1.79-4 4-4v3c-1.65 0-3 1.35-3 3h3v6H6.5v-6zm9 0c0-2.21 1.79-4 4-4v3c-1.65 0-3 1.35-3 3h3v6H15.5v-6z"></path>
    </svg>
);


export const PartnershipIcon: React.FC = () => (
    <IconWrapper>
        <svg {...svgProps}>
            <path d="M18 8h-3a1 1 0 00-1 1v12a1 1 0 001 1h3a1 1 0 001-1V9a1 1 0 00-1-1z"></path><path d="M6 14h3a1 1 0 001-1V3a1 1 0 00-1-1H6a1 1 0 00-1 1v10a1 1 0 001 1z"></path><path d="M12 11h3a1 1 0 001-1V6a1 1 0 00-1-1h-3a1 1 0 00-1 1v4a1 1 0 001 1z"></path>
        </svg>
    </IconWrapper>
);

export const QualityIcon: React.FC = () => (
    <IconWrapper>
        <svg {...svgProps}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
    </IconWrapper>
);

export const InnovationIcon: React.FC = () => (
    <IconWrapper>
        <svg {...svgProps}>
             <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z"></path><path d="M12 12a3 3 0 100-6 3 3 0 000 6z"></path>
        </svg>
    </IconWrapper>
);


export const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
);

export const MinusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
);

export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path><path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path><path d="M20 12h2"></path>
        <path d="m4.93 19.07 1.41-1.41"></path><path d="m17.66 6.34 1.41-1.41"></path>
    </svg>
);

export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || "w-6 h-6"} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.39.106-.803.163-1.227.163-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.32 4.512 2.09 7.14 2.09 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
    </svg>
);

export const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || "w-6 h-6"} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"/>
    </svg>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || "w-6 h-6"} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);


export const DesignIcon: React.FC = () => (
    <IconWrapper>
        <svg {...svgProps}>
            <path d="M12 20h.01"></path><path d="M10 20h.01"></path><path d="M14 20h.01"></path><path d="M12 14h.01"></path><path d="M10 14h.01"></path><path d="M14 14h.01"></path><path d="M12 8h.01"></path><path d="M10 8h.01"></path><path d="M14 8h.01"></path><path d="M3 2v6c0 1.1.9 2 2 2h14a2 2 0 002-2V2"></path><path d="M5 10v10"></path><path d="M19 10v10"></path>
        </svg>
    </IconWrapper>
);

export const PerformanceIcon: React.FC = () => (
    <IconWrapper>
        <svg {...svgProps}>
            <path d="M19.67 6.33a10 10 0 10-15.34 0" /><path d="M12 12l-4 4" />
        </svg>
    </IconWrapper>
);

export const TransparencyIcon: React.FC = () => (
    <IconWrapper>
        <svg {...svgProps}>
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
        </svg>
    </IconWrapper>
);

export const ResultsIcon: React.FC = () => (
    <IconWrapper>
        <svg {...svgProps}>
            <path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20V14"></path>
        </svg>
    </IconWrapper>
);

export const CheckmarkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
    </svg>
);

export const SuccessIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || "w-12 h-12"} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);