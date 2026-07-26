import React, { useState } from 'react';
import { SCENARIO_STEPS } from '../data/campaignData';
import { Bike, Clock, AlertTriangle, ShieldAlert, ChevronRight, ArrowRight, CheckCircle2, User, HeartHandshake } from 'lucide-react';

export const HeroScenario: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bike': return <Bike size={24} />;
      case 'Clock': return <Clock size={24} />;
      case 'AlertTriangle': return <AlertTriangle size={24} />;
      case 'ShieldAlert': return <ShieldAlert size={24} />;
      default: return <Bike size={24} />;
    }
  };

  const currentStep = SCENARIO_STEPS[activeStep];

  return (
    <section id="hero" className="section-padding" style={{
      background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Background Accents */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '40rem',
        height: '40rem',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(234, 170, 0, 0.08) 0%, rgba(0, 48, 87, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Headline Block */}
        <div style={{ maxWidth: '800px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>
            <HeartHandshake size={14} />
            <span>CAMPAIGN TAGLINE • FINISH EVERY RIDE RIGHT</span>
          </div>

          <h1 style={{ marginBottom: '1.25rem', color: '#003057', fontSize: 'clamp(2.5rem, 5vw, 3.8rem)' }}>
            Where the Ride Ends.
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: '#475569',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            Georgia Tech built cycle tracks and a dismount zone around Tech Green, but hasn't created a clear system for ending those rides. <strong>Empathetic infrastructure creates safer campuses.</strong>
          </p>

          {/* Action CTAs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <a href="#action" className="btn btn-primary">
              <span>Support the Tech Green Pilot</span>
              <ArrowRight size={18} />
            </a>
            <a href="#solution" className="btn btn-outline">
              <span>See How It Works</span>
            </a>
          </div>
        </div>

        {/* Interactive Student Scenario Showcase */}
        <div className="navy-card" style={{
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          borderRadius: '1.5rem',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
            paddingBottom: '1.25rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <span style={{ color: '#EAAA00', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                IMMERSIVE STUDENT SCENARIO
              </span>
              <h2 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginTop: '0.25rem' }}>
                Experience the Tech Green Dismount Dilemma
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', color: '#CBD5E1' }}>Step {activeStep + 1} of {SCENARIO_STEPS.length}</span>
            </div>
          </div>

          {/* Step Selector Tabs */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.75rem',
            marginBottom: '2rem'
          }}>
            {SCENARIO_STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    backgroundColor: isActive ? '#EAAA00' : 'rgba(255, 255, 255, 0.07)',
                    color: isActive ? '#001E38' : '#FFFFFF',
                    border: isActive ? '2px solid #EAAA00' : '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '0.875rem 1rem',
                    borderRadius: '0.75rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    fontWeight: isActive ? 700 : 500
                  }}
                >
                  <div style={{
                    color: isActive ? '#001E38' : '#EAAA00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {getStepIcon(step.iconName)}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.8, textTransform: 'uppercase' }}>Step 0{step.id}</div>
                    <div style={{ fontSize: '0.9rem', lineHeight: 1.2 }}>{step.title.split('. ')[1]}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Content Card */}
          <div key={currentStep.id} className="animate-fade-in" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '1rem',
            padding: '1.75rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '1rem'
            }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>
                  <User size={12} />
                  <span>Location: {currentStep.location}</span>
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: '0.35rem' }}>
                  {currentStep.title}: {currentStep.subtitle}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: '1.1rem', color: '#E2E8F0', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              "{currentStep.description}"
            </p>

            {/* Consequences Box */}
            <div style={{
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              borderRadius: '0.75rem',
              padding: '1.25rem',
              borderLeft: '4px solid #EAAA00'
            }}>
              <div style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#EAAA00',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                letterSpacing: '0.05em'
              }}>
                {activeStep === 3 ? "CASCADING COMMUNITY CONSEQUENCES" : "IMPACT ON RIDER BEHAVIOR"}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {currentStep.consequences.map((c, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} style={{ color: '#EAAA00', marginTop: '0.2rem', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#FFFFFF', marginRight: '0.5rem' }}>{c.target}:</strong>
                      <span style={{ color: '#CBD5E1' }}>{c.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Navigation Controls */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '1.75rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                className="btn btn-outline-light"
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  opacity: activeStep === 0 ? 0.4 : 1,
                  cursor: activeStep === 0 ? 'not-allowed' : 'pointer'
                }}
              >
                Previous Step
              </button>

              <button
                onClick={() => setActiveStep(prev => (prev + 1) % SCENARIO_STEPS.length)}
                className="btn btn-primary"
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
              >
                <span>{activeStep === SCENARIO_STEPS.length - 1 ? 'Replay Scenario' : 'Next Step'}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
