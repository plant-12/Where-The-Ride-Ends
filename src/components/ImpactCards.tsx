import React from 'react';
import { TARGET_OUTCOMES } from '../data/campaignData';
import { TrendingDown, Ruler, ParkingSquare, Compass, Info, Award } from 'lucide-react';

export const ImpactCards: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'reduction': return <TrendingDown size={28} />;
      case 'clearance': return <Ruler size={28} />;
      case 'rack-capacity': return <ParkingSquare size={28} />;
      default: return <Compass size={28} />;
    }
  };

  return (
    <section id="impact" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            <Award size={14} />
            <span>MEASURABLE TARGET OUTCOMES</span>
          </div>

          <h2 style={{ color: '#003057', marginBottom: '1rem' }}>
            Expected Impact & Performance Metrics.
          </h2>

          <p style={{ fontSize: '1.15rem', color: '#475569' }}>
            The pilot establishes strict, quantifiable benchmarks to evaluate success before permanent infrastructure investments are made.
          </p>

          {/* Factual Disclaimer Banner */}
          <div style={{
            marginTop: '1.25rem',
            backgroundColor: 'rgba(0, 48, 87, 0.05)',
            border: '1px solid rgba(0, 48, 87, 0.15)',
            borderRadius: '0.75rem',
            padding: '0.75rem 1.25rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.875rem',
            color: '#003057'
          }}>
            <Info size={16} style={{ color: '#EAAA00', flexShrink: 0 }} />
            <span>Note: These metrics are <strong>target goals for the proposed pilot project</strong>, not completed historical survey results.</span>
          </div>
        </div>

        {/* 4 Stat Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem'
        }}>
          {TARGET_OUTCOMES.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '2.25rem 1.75rem',
                borderRadius: '1.25rem',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              <div>
                {/* Stat Icon */}
                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '1rem',
                  backgroundColor: '#003057',
                  color: '#EAAA00',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: '0 4px 10px rgba(0, 48, 87, 0.2)'
                }}>
                  {getIcon(item.id)}
                </div>

                {/* Big Stat Display */}
                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '2.8rem',
                  fontWeight: 800,
                  color: '#003057',
                  lineHeight: 1,
                  marginBottom: '0.5rem'
                }}>
                  {item.value}
                </div>

                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#003057', marginBottom: '0.25rem' }}>
                  {item.label}
                </div>

                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#B45309', marginBottom: '1rem' }}>
                  {item.subtitle}
                </div>

                <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.5, marginBottom: 0 }}>
                  {item.description}
                </p>
              </div>

              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid #E2E8F0',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#64748B',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Target Pilot Benchmark
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
