'use client';

import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "VŠEPROSTAVBY.CZ - Stavební realizace a projekce";
    
    const faviconUrl = "https://via.placeholder.com/32x32/65a30d/ffffff?text=V";

    let faviconLink: HTMLLinkElement | null = document.querySelector('link[rel="icon"]');
    if (faviconLink) {
      faviconLink.href = faviconUrl;
    } else {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      faviconLink.href = faviconUrl;
      document.head.appendChild(faviconLink);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#onas', label: 'O nás' },
    { href: '#sluzby', label: 'Služby' },
    { href: '#materialy', label: 'Materiály' },
    { href: '#reference', label: 'Reference' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <div className="bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
             <img src="/images/logo-vseprostavby.png" alt="VŠEPROSTAVBY.CZ Logo" className="h-12 w-auto"/>
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-lime-600 transition-colors duration-300 font-medium">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={toggleMenu} className="text-gray-700 hover:text-lime-600 text-lg">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="uvod" className="relative h-[60vh] min-h-[400px] bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: "url('/images/featured-house-elevation-after-renovation.jpg')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">Vše pro Vaši stavbu od A do Z</h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8">Poskytujeme kompletní služby od projektové činnosti, přes realizaci až po prodej vlastních stavebních materiálů.</p>
            <a href="#kontakt" className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg">Nezávazná poptávka</a>
          </div>
        </section>

        {/* About Us Section */}
        <section id="onas" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">15 let zkušeností ve stavebnictví</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">VŠEPROSTAVBY.CZ s.r.o. je dynamická společnost zaměřená na stavební činnost, rekonstrukce, projektovou dokumentaci a prodej vlastních certifikovaných stavebních materiálů.</p>
              <p className="text-gray-600 leading-relaxed">Náš cíl je poskytovat komplexní servis a kvalitní řešení na míru potřebám každého klienta. Spokojenost zákazníka je naší nejvyšší prioritou.</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="/images/project-modern-house-renovation.jpg" alt="Moderní dům po rekonstrukci" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Naše služby</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Nabízíme široké portfolio služeb pro Váš dům, byt či komerční prostory.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {
                [
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, title: 'Kompletní realizace RD', description: 'Stavby rodinných domů na klíč dle vašich představ.' },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>, title: 'Rekonstrukce domů a bytů', description: 'Modernizace a kompletní přestavby interiérů i exteriérů.' },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: 'Zateplení fasád', description: 'Efektivní zateplovací systémy pro úsporu energií.' },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="3"></rect><rect x="14" y="7" width="3" height="3"></rect><rect x="14" y="14" width="3" height="3"></rect><rect x="7" y="14" width="3" height="3"></rect></svg>, title: 'Průmyslové podlahy', description: 'Realizace odolných podlah pro průmyslové a komerční využití.' },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Sanační práce', description: 'Profesionální sanace vlhkého zdiva a dalších poruch.' },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>, title: 'Projektová činnost', description: 'Zpracování projektové dokumentace pro všechny typy staveb.' },
                ].map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-lime-100 text-lime-600 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        
        {/* Materials Section */}
        <section id="materialy" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Naše materiály</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Vyvíjíme a dodáváme vlastní certifikované stavební materiály pro maximální kvalitu.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
               <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
                <img src="/images/product-thermosan-om-tka-packaging.png" alt="ThermoSAN obal" className="w-48 h-auto object-contain"/>
                <div>
                  <h3 className="text-2xl font-bold text-lime-700">ThermoSAN</h3>
                  <p className="font-semibold text-gray-700 mb-2">Sanační a tepelně izolační omítka</p>
                  <p className="text-gray-600">Ideální řešení pro sanaci vlhkého zdiva s vynikajícími tepelně izolačními vlastnostmi.</p>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
                <img src="/images/product-thermoin-om-tka-packaging.png" alt="ThermoIN obal" className="w-48 h-auto object-contain"/>
                <div>
                  <h3 className="text-2xl font-bold text-blue-700">ThermoIN</h3>
                  <p className="font-semibold text-gray-700 mb-2">Štuková omítka</p>
                   <p className="text-gray-600">Vysoce kvalitní štuková omítka pro dokonalé finální úpravy vnitřních povrchů.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section id="reference" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Naše realizace</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Prohlédněte si výběr z našich úspěšně dokončených projektů.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group overflow-hidden rounded-lg shadow-lg">
                  <img src="/images/featured-house-elevation-after-renovation.jpg" alt="Zrekonstruovaná fasáda domu" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
               <div className="group overflow-hidden rounded-lg shadow-lg">
                  <img src="/images/project-modern-house-renovation.jpg" alt="Moderní rekonstrukce rodinného domu" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Kontaktujte nás</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto mb-10">Máte dotaz nebo zájem o naše služby? Neváhejte se nám ozvat.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
              <div className="flex items-center gap-4">
                <div className="bg-lime-100 p-3 rounded-full text-lime-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <a href="tel:+420732258522" className="text-lg text-gray-700 hover:text-lime-600 font-medium">+420 732 258 522</a>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-lime-100 p-3 rounded-full text-lime-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <a href="mailto:info@vseprostavby.cz" className="text-lg text-gray-700 hover:text-lime-600 font-medium">info@vseprostavby.cz</a>
              </div>
              <div className="flex items-center gap-4">
                 <div className="bg-lime-100 p-3 rounded-full text-lime-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                 </div>
                <p className="text-lg text-gray-700 font-medium">Poděbradská 56/186, Praha 9</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-6 text-center">
           <p className="text-gray-400">&copy; {new Date().getFullYear()} VŠEPROSTAVBY.CZ s.r.o. Všechna práva vyhrazena.</p>
           <p className="text-sm text-gray-500 mt-4">
            Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="underline hover:text-lime-400 transition-colors">DigitalFusion</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
