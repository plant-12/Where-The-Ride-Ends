import React, { useState } from 'react';
import { SOLUTION_PILLARS } from '../data/campaignData';
import { CheckCircle, Navigation, ShieldCheck, MapPin, Layers, Compass, ArrowUpRight, Camera, XCircle, AlertTriangle } from 'lucide-react';

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

          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6 }}>
            Combining physical corrals, pre-dismount directional wayfinding, and digital operator coordination creates a seamless system for riders and pedestrians alike.
          </p>
        </div>

        {/* Visual Before & After Impact Comparison */}
        <div style={{
          backgroundColor: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '1.5rem',
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          marginBottom: '4rem',
          boxShadow: '0 6px 20px rgba(0, 48, 87, 0.05)'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
            <span className="badge badge-navy" style={{ marginBottom: '0.5rem' }}>
              <span>TRANSFORMATION COMPARISON</span>
            </span>
            <h3 style={{ color: '#003057', fontSize: '1.6rem', marginTop: '0.25rem' }}>
              Visual Impact: From Campus Clutter to Organized Corrals
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '0.5rem' }}>
              Contrasting current unguided parking patterns on GT campus with the proposed pilot corral framework.
            </p>
          </div>

          {/* Side-by-Side Comparison Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '2rem'
          }}>
            {/* BEFORE Card: Shows Current Unguided Campus Parking Photos */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              border: '2px solid #FECACA',
              boxShadow: '0 4px 12px rgba(225, 29, 72, 0.08)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Card Header */}
              <div style={{
                backgroundColor: 'rgba(225, 29, 72, 0.08)',
                padding: '1rem 1.25rem',
                borderBottom: '1px solid #FECACA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E11D48', fontWeight: 800, fontSize: '0.9rem' }}>
                  <XCircle size={18} />
                  <span>BEFORE: Current GT Parking Issues</span>
                </div>
                <span className="badge badge-red" style={{ fontSize: '0.75rem' }}>Unguided Parking</span>
              </div>

              {/* Photo Showcase Grid (Both Real Photos Showing Bad Parking) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', backgroundColor: '#CBD5E1', height: '220px' }}>
                <div style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
                  <img
                    src="images/improperly-parked-gt.jpg"
                    alt="Fallen e-scooter and bike blocking a main GT pedestrian walkway"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem', backgroundColor: 'rgba(0,0,0,0.7)', color: '#FFF', fontSize: '0.7rem', padding: '0.2rem 0.4rem', borderRadius: '0.3rem' }}>
                    Walkway Obstruction
                  </div>
                </div>

                <div style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
                  <img
                    src="images/scooters-lined-up-gt.jpg"
                    alt="Shared e-scooters accumulating on sidewalk edges without painted corral lines"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem', backgroundColor: 'rgba(0,0,0,0.7)', color: '#FFF', fontSize: '0.7rem', padding: '0.2rem 0.4rem', borderRadius: '0.3rem' }}>
                    Unmarked Sidewalk Edge
                  </div>
                </div>
              </div>

              {/* Content & Caption */}
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <figcaption style={{
                    fontSize: '0.85rem',
                    color: '#475569',
                    backgroundColor: '#FFF1F2',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '0.5rem',
                    marginBottom: '1rem',
                    lineHeight: 1.4,
                    borderLeft: '3px solid #E11D48'
                  }}>
                    <strong>Current Reality:</strong> Both photos show unguided parking at Georgia Tech—devices fall across walkways or accumulate along sidewalk edges without designated boundaries.
                  </figcaption>

                  <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.875rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <li>No painted corral lines or rubber wheel stops</li>
                    <li>Devices spill onto ADA ramps and footpaths</li>
                    <li>Per-minute meter pressure causes rushed parking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AFTER Card: Rendered Solution Blueprint & Corral Concept */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              border: '2px solid #A7F3D0',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.1)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Card Header */}
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.08)',
                padding: '1rem 1.25rem',
                borderBottom: '1px solid #A7F3D0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#059669', fontWeight: 800, fontSize: '0.9rem' }}>
                  <CheckCircle size={18} />
                  <span>AFTER: Proposed Corral Blueprint</span>
                </div>
                <span className="badge badge-green" style={{ fontSize: '0.75rem' }}>Painted Corrals & Signs</span>
              </div>

              {/* Graphical Blueprint Solution Concept Render */}
              <div style={{
                backgroundColor: '#001E38',
                height: '220px',
                padding: '1.25rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                borderBottom: '1px solid #A7F3D0'
              }}>
                {/* Visual Corral Graphic Box */}
                <div style={{
                  border: '2px dashed #10B981',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  borderRadius: '0.75rem',
                  padding: '1rem 1.5rem',
                  width: '90%',
                  position: 'relative'
                }}>
                  <div style={{ color: '#10B981', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    PROPOSED DESIGNATED CORRAL ZONE
                  </div>
                  <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1rem', marginTop: '0.25rem' }}>
                    Painted Surface Bounds + Wheel Stops
                  </div>
                  <div style={{ color: '#E2E8F0', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                    Pre-Dismount Wayfinding Decals • 100% Clear ADA Corridor
                  </div>
                </div>
              </div>

              {/* Content & Caption */}
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <figcaption style={{
                    fontSize: '0.85rem',
                    color: '#475569',
                    backgroundColor: '#ECFDF5',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '0.5rem',
                    marginBottom: '1rem',
                    lineHeight: 1.4,
                    borderLeft: '3px solid #10B981'
                  }}>
                    <strong>Proposed Solution Standard:</strong> High-visibility painted corrals and rubber wheel stops contain devices within marked zones outside dismount boundaries.
                  </figcaption>

                  <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.875rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <li>15-device painted corrals with wheel stops</li>
                    <li>Guaranteed 4-foot clear ADA pedestrian access</li>
                    <li>Directional signs placed 50ft prior to dismount line</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Pillar Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '1.75rem',
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
                  padding: '2rem',
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
                    marginBottom: '1rem'
                  }}>
                    <span style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '1.8rem',
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

                  <h3 style={{ fontSize: '1.3rem', color: '#003057', marginBottom: '0.4rem' }}>
                    {pillar.title}
                  </h3>

                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#B45309', marginBottom: '0.85rem' }}>
                    {pillar.subtitle}
                  </div>

                  <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                    {pillar.description}
                  </p>
                </div>

                {/* Bullets List */}
                <div style={{
                  borderTop: '1px solid #E2E8F0',
                  paddingTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem'
                }}>
                  {pillar.bullets.map((bullet, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#334155' }}>
                      <CheckCircle size={15} style={{ color: isSelected ? '#EAAA00' : '#10B981', marginTop: '0.15rem', flexShrink: 0 }} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Emphasized Interactive Campus Corral Visual Blueprint Schematic */}
        <div className="navy-card" style={{
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          borderRadius: '1.5rem',
          border: '2px solid #EAAA00',
          boxShadow: '0 12px 35px rgba(0, 48, 87, 0.25)'
        }}>
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
                <span>PRIMARY PROPOSAL GRAPHIC & MAP</span>
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginTop: '0.25rem' }}>
                Tech Green Approach & Corral Positioning Concept
              </h3>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>
              Locations engineered to match natural ride termination points
            </div>
          </div>

          {/* Map Graphic Blueprint Container */}
          <div style={{
            backgroundColor: '#001E38',
            borderRadius: '1rem',
            border: '1px solid rgba(234, 170, 0, 0.3)',
            padding: '2rem',
            position: 'relative',
            minHeight: '360px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            {/* Grid Map Background Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(234, 170, 0, 0.18) 1px, transparent 1px)',
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
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
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

                {/* Corral A Location */}
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

                {/* Corral B Location */}
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
                backgroundColor: 'rgba(0, 48, 87, 0.85)',
                border: '1px solid rgba(234, 170, 0, 0.4)',
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
