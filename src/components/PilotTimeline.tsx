import React, { useState } from 'react';
import { PILOT_PHASES } from '../data/campaignData';
import { Calendar, CheckCircle2, Flag, ArrowRight, ShieldCheck } from 'lucide-react';

export const PilotTimeline: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section id="pilot" className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '750px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <div className="badge badge-navy" style={{ marginBottom: '1rem' }}>
            <Calendar size={14} />
            <span>ONE-SEMESTER ROADMAP</span>
          </div>

          <h2 style={{ color: '#003057', marginBottom: '1rem' }}>
            How the 12-Week Pilot Operates.
          </h2>

          <p style={{ fontSize: '1.15rem', color: '#475569' }}>
            A structured, 3-phase implementation plan designed to measure baseline clutter, deploy minimal physical interventions, and evaluate long-term accessibility impact.
          </p>
        </div>

        {/* Phase Stepper Selector Tabs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          {PILOT_PHASES.map((p, idx) => {
            const isSelected = activePhase === idx;

            return (
              <button
                key={p.phase}
                onClick={() => setActivePhase(idx)}
                style={{
                  backgroundColor: isSelected ? '#003057' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : '#003057',
                  border: isSelected ? '2px solid #EAAA00' : '1px solid #E2E8F0',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxShadow: isSelected ? '0 10px 25px rgba(0, 48, 87, 0.15)' : '0 2px 4px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.25s ease',
                  position: 'relative'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: isSelected ? '#EAAA00' : '#B45309'
                  }}>
                    {p.weeks}
                  </span>
                  <span className="badge badge-gold" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>
                    Phase 0{p.phase}
                  </span>
                </div>

                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  lineHeight: 1.3
                }}>
                  {p.title.split(': ')[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Detail Display */}
        {(() => {
          const current = PILOT_PHASES[activePhase];

          return (
            <div className="glass-card animate-fade-in" style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              borderRadius: '1.5rem',
              border: '2px solid #E2E8F0',
              boxShadow: '0 12px 30px rgba(0,0,0,0.06)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                borderBottom: '1px solid #E2E8F0',
                paddingBottom: '1.5rem',
                marginBottom: '2rem'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span className="badge badge-navy">{current.weeks}</span>
                    <span className="badge badge-gold">Phase 0{current.phase} Implementation</span>
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: '#003057', marginTop: '0.25rem' }}>
                    {current.title}
                  </h3>
                  <div style={{ fontSize: '1rem', color: '#B45309', fontWeight: 600 }}>
                    {current.subtitle}
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'rgba(0, 48, 87, 0.05)',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(0, 48, 87, 0.1)',
                  maxWidth: '300px'
                }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#003057', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                    Phase Focus Objective
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.4 }}>
                    {current.highlight}
                  </div>
                </div>
              </div>

              {/* Task Grid */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: '#003057', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
                  Key Phase Deliverables & Milestones:
                </h4>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.25rem'
                }}>
                  {current.tasks.map((task, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '0.75rem',
                        padding: '1.25rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.85rem',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                      }}
                    >
                      <CheckCircle2 size={20} style={{ color: '#003057', marginTop: '0.1rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.5 }}>
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phase Progression Stepper Footer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid #E2E8F0',
                paddingTop: '1.5rem'
              }}>
                <button
                  disabled={activePhase === 0}
                  onClick={() => setActivePhase(prev => Math.max(0, prev - 1))}
                  className="btn btn-outline"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', opacity: activePhase === 0 ? 0.4 : 1 }}
                >
                  Previous Phase
                </button>

                <button
                  disabled={activePhase === PILOT_PHASES.length - 1}
                  onClick={() => setActivePhase(prev => Math.min(PILOT_PHASES.length - 1, prev + 1))}
                  className="btn btn-primary"
                  style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem', opacity: activePhase === PILOT_PHASES.length - 1 ? 0.5 : 1 }}
                >
                  <span>Next Phase</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
