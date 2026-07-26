import React, { useState } from 'react';
import { SOLUTION_PILLARS } from '../data/campaignData';
import { CheckCircle, Navigation, ShieldCheck, MapPin, Layers, Compass, ArrowUpRight } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('corrals');

  return (
    <section id="solution" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            <Compass size={14} />
            <span>THE THREE PILOT PILLARS</span>
          </div>

          <h2 style={{ color: '#003057', marginBottom: '1rem' }}>
            A Practical 3-Part End-of-Trip Infrastructure Solution.
          </h2>

          <p style={{ fontSize: '1.15rem', color: '#475569' }}>
            By combining physical parking corrals, pre-dismount directional wayfinding, and digital operator coordination, the pilot creates a seamless system for riders and pedestrians alike.
          </p>
        </div>

        {/* Solution Pillar Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {SOLUTION_PILLARS.map((pillar) => {
            const isSelected = activeTab === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className="glass-card"
                style={{
                  padding: '2.25rem',
                  borderRadius: '1.25rem',
                  cursor: 'pointer',
                  border: isSelected ? '2px solid #003057' : '1px solid #E2E8F0',
                  boxShadow: isSelected ? '0 12px 30px rgba(0, 48, 87, 0.12)' : '0 4px 6px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Pillar Number Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}>
                    <span style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: isSelected ? '#EAAA00' : '#CBD5E1',
                      lineHeight: 1
                    }}>
                      {pillar.number}
                    </span>

                    <span className={pillar.isProposedOnly ? "badge badge-gold" : "badge badge-green"}>
                      {pillar.statusBadge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', color: '#003057', marginBottom: '0.5rem' }}>
                    {pillar.title}
                  </h3>

                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#B45309', marginBottom: '1rem' }}>
                    {pillar.subtitle}
                  </div>

                  <p style={{ color: '#475569', fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {pillar.description}
                  </p>
                </div>

                {/* Bullets List */}
                <div style={{
                  borderTop: '1px solid #E2E8F0',
                  paddingTop: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  {pillar.bullets.map((bullet, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: '#334155' }}>
                      <CheckCircle size={16} style={{ color: isSelected ? '#EAAA00' : '#10B981', marginTop: '0.15rem', flexShrink: 0 }} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Campus Corral Visual Map / Blueprint Schematic */}
        <div className="navy-card" style={{ padding: 'clamp(1.5rem, 4vw, 3rem)', borderRadius: '1.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.75rem',
            flexWrap: 'wrap',
            gap: '1rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
            paddingBottom: '1rem'
          }}>
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>
                <Layers size={14} />
                <span>PILOT BLUEPRINT SCHEMATIC</span>
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginTop: '0.25rem' }}>
                Tech Green Approach & Corral Positioning Concept
              </h3>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
              Locations engineered to match natural ride termination points
            </div>
          </div>

          {/* Interactive Map Graphic Canvas Simulation */}
          <div style={{
            backgroundColor: '#001E38',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            padding: '2rem',
            position: 'relative',
            minHeight: '380px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            {/* Grid Map Background Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(234, 170, 0, 0.15) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              borderRadius: '1rem',
              pointerEvents: 'none'
            }} />

            {/* Campus Map Elements Visual Representation */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
              }}>
                {/* Tech Green Central Dismount Zone */}
                <div style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  border: '2px dashed #EF4444',
                  borderRadius: '0.75rem',
                  padding: '1.25rem',
                  textAlign: 'center'
                }}>
                  <div style={{ color: '#FCA5A5', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    RESTRICTED INNER ZONE
                  </div>
                  <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.1rem', marginTop: '0.25rem' }}>
                    Tech Green Dismount Boundary
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#FECACA', marginTop: '0.5rem' }}>
                    Zero Riding Permitted • Pedestrian Priority Zone
                  </div>
                </div>

                {/* Corral 1 Location */}
                <div style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '2px solid #10B981',
                  borderRadius: '0.75rem',
                  padding: '1.25rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span style={{ color: '#6EE7B7', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
                      PROPOSED CORRAL A
                    </span>
                    <MapPin size={16} style={{ color: '#10B981' }} />
                  </div>
                  <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1rem' }}>
                    West Approach (CRC Path Connection)
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#D1D5DB', marginTop: '0.35rem' }}>
                    Wheel stops, pavement striping, 15-device capacity.
                  </div>
                </div>

                {/* Corral 2 Location */}
                <div style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '2px solid #10B981',
                  borderRadius: '0.75rem',
                  padding: '1.25rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span style={{ color: '#6EE7B7', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
                      PROPOSED CORRAL B
                    </span>
                    <MapPin size={16} style={{ color: '#10B981' }} />
                  </div>
                  <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1rem' }}>
                    North Walkway (Skiles Walkway Junction)
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#D1D5DB', marginTop: '0.35rem' }}>
                    Positioned 50ft before dismount line; keeps ADA ramp 100% clear.
                  </div>
                </div>
              </div>

              {/* Wayfinding Markings Legend */}
              <div style={{
                backgroundColor: 'rgba(0, 48, 87, 0.8)',
                border: '1px solid rgba(234, 170, 0, 0.3)',
                borderRadius: '0.75rem',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Navigation size={20} style={{ color: '#EAAA00' }} />
                  <div>
                    <strong style={{ color: '#FFFFFF', fontSize: '0.95rem' }}>Pre-Dismount Wayfinding Signs & Decals</strong>
                    <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>Installed 50 feet prior to zone boundary pointing toward Corrals A & B.</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#EAAA00', fontWeight: 700 }}>
                  <span>Positive Behavior Guidance</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
