import React, { useState } from 'react';
import { SCENARIO_STEPS } from '../data/campaignData';
import { Bike, Clock, AlertTriangle, ShieldAlert, ChevronRight, ArrowRight, CheckCircle2, User, HeartHandshake, Camera, Sparkles } from 'lucide-react';
import gtCampusBanner from '../assets/gt-campus-banner.jpg';

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
    <section id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Top Full-Width Georgia Tech Aerial Campus Banner */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(320px, 42vw, 500px)',
        backgroundImage: `linear-gradient(180deg, rgba(0, 30, 56, 0.55) 0%, rgba(0, 48, 87, 0.85) 100%), url("${gtCampusBanner}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2.5rem 1.5rem',
        boxShadow: '0 8px 30px rgba(0, 48, 87, 0.25)'
      }}>
        {/* Banner Content Container */}
        <div style={{ maxWidth: '900px', zIndex: 2 }}>
          <h1 style={{
            color: '#FFFFFF',
            fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1rem',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            letterSpacing: '-0.02em'
          }}>
            Where the Ride Ends.
          </h1>

          <p style={{
            color: '#F1F5F9',
            fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
            maxWidth: '760px',
            margin: '0 auto 1.5rem auto',
            lineHeight: 1.5,
            fontWeight: 500,
            textShadow: '0 2px 10px rgba(0,0,0,0.4)'
          }}>
            An End-of-Trip Parking & Wayfinding Pilot Proposal for the Tech Green Dismount Zone
          </p>
        </div>

        {/* Decorative Bottom Transition Overlay */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2.5rem',
          background: 'linear-gradient(180deg, transparent 0%, #F8FAFC 100%)',
          pointerEvents: 'none'
        }} />
      </div>

      {/* Main Container Content */}
      <div className="section-padding" style={{ backgroundColor: '#F8FAFC', paddingTop: '2.5rem' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Intro Description & Personal Student Advocate Welcome Badge */}
          <div style={{ maxWidth: '800px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: '#475569',
              lineHeight: 1.6,
              marginBottom: '2rem'
            }}>
              Georgia Tech built cycle tracks and a dismount zone around Tech Green, but needs a clear end-of-trip parking system. <strong>Empathetic infrastructure creates safer campuses.</strong>
            </p>

            {/* Personal Student Advocate Welcome Badge */}
            <div style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(0, 48, 87, 0.15)',
              borderRadius: '1.25rem',
              padding: '1.25rem 1.5rem',
              marginBottom: '2.25rem',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              boxShadow: '0 4px 15px rgba(0, 48, 87, 0.05)'
            }}>
              <div style={{
                width: '3.25rem',
                height: '3.25rem',
                borderRadius: '50%',
                backgroundColor: '#003057',
                color: '#EAAA00',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1.1rem',
                flexShrink: 0,
                boxShadow: '0 4px 10px rgba(0, 48, 87, 0.2)'
              }}>
                GT
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.785rem', fontWeight: 700, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                  A NOTE FROM THE STUDENT PROPOSAL ADVOCATE
                </div>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#334155', lineHeight: 1.5, fontStyle: 'italic' }}>
                  "Hi! As Georgia Tech students who rely on micromobility and walk Tech Green daily, we built this proposal out of genuine care for our campus. We love e-scooters for getting to class on time—and we also want to make sure every classmate in a wheelchair has a clear path. Explore our proposal below!"
                </p>
              </div>
            </div>

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

              <p style={{ fontSize: '1.05rem', color: '#E2E8F0', lineHeight: 1.6, marginBottom: '1.5rem' }}>
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
      </div>
    </section>
  );
};
