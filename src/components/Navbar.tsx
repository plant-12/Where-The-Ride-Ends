import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, MapPin, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'problem', 'solution', 'pilot', 'action'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'The Problem', href: '#problem', id: 'problem' },
    { name: 'Our Solution', href: '#solution', id: 'solution' },
    { name: 'Pilot & Budget', href: '#pilot', id: 'pilot' },
    { name: 'Take Action', href: '#action', id: 'action' },
  ];

  return (
    <>
      {/* Top Student Project Disclaimer Banner */}
      <div style={{
        backgroundColor: '#003057',
        color: '#EAAA00',
        padding: '0.4rem 1rem',
        fontSize: '0.8rem',
        fontWeight: 600,
        textAlign: 'center',
        borderBottom: '1px solid rgba(234, 170, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}>
        <Sparkles size={14} />
        <span>Georgia Tech Student Campaign Proposal • Tech Green Dismount Zone Pilot</span>
      </div>

      {/* Main Sticky Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid #E2E8F0' : '1px solid transparent',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 4px 12px rgba(0, 0, 0, 0.05)' : 'none'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.5rem'
        }}>
          {/* Brand / Logo */}
          <a href="#hero" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none'
          }}>
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '0.75rem',
              backgroundColor: '#003057',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#EAAA00',
              boxShadow: '0 4px 10px rgba(0, 48, 87, 0.2)'
            }}>
              <Compass size={22} />
            </div>
            <div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: '1.2rem',
                color: '#003057',
                lineHeight: 1.1
              }}>
                WHERE THE RIDE ENDS
              </div>
              <div style={{
                fontSize: '0.7rem',
                color: '#64748B',
                fontWeight: 600,
                letterSpacing: '0.05em'
              }}>
                TECH GREEN PARKING PILOT
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.5rem'
          }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: activeSection === link.id ? 700 : 500,
                  color: activeSection === link.id ? '#003057' : '#475569',
                  padding: '0.4rem 0.6rem',
                  borderRadius: '0.5rem',
                  position: 'relative',
                  transition: 'all 0.2s ease',
                  borderBottom: activeSection === link.id ? '2px solid #EAAA00' : '2px solid transparent'
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a href="#action" className="btn btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.875rem' }}>
              <MapPin size={16} />
              <span>Support Pilot</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #CBD5E1',
                backgroundColor: 'transparent',
                color: '#003057',
                cursor: 'pointer'
              }}
              className="mobile-toggle"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #E2E8F0',
            padding: '1rem 1.5rem 1.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: '0.6rem 0.8rem',
                  fontSize: '1rem',
                  fontWeight: activeSection === link.id ? 700 : 500,
                  color: activeSection === link.id ? '#003057' : '#475569',
                  backgroundColor: activeSection === link.id ? 'rgba(234, 170, 0, 0.15)' : 'transparent',
                  borderRadius: '0.5rem',
                  textDecoration: 'none'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
};
