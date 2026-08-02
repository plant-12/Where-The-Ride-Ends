import React from 'react';
import { Heart, Accessibility, ShieldCheck, Users, Quote, UserCheck } from 'lucide-react';

export const WhyThisMatters: React.FC = () => {
  return (
    <section id="why-this-matters" className="section-padding" style={{ backgroundColor: '#002548', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      {/* Background Accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle, rgba(234, 170, 0, 0.1) 0%, rgba(0, 37, 72, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>
          <Heart size={14} />
          <span>STUDENT ADVOCATE PERSPECTIVE</span>
        </div>

        <h2 style={{ color: '#FFFFFF', marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
          Why This Matters
        </h2>

        <p style={{
          fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
          color: '#E2E8F0',
          lineHeight: 1.65,
          maxWidth: '820px',
          margin: '0 auto 2rem auto'
        }}>
          This proposal was created out of genuine care for the Georgia Tech community. Every student, wheelchair user, visually impaired peer, and visitor deserves campus walkways that are safe, open, and easy to navigate.
        </p>

        {/* Personal Passion Quote Card */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderLeft: '4px solid #EAAA00',
          borderRadius: '1rem',
          padding: '1.5rem 2rem',
          maxWidth: '820px',
          margin: '0 auto 3rem auto',
          textAlign: 'left',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#EAAA00', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            <Quote size={18} />
            <span>A Personal Note from the Student Author</span>
          </div>

          <blockquote style={{
            fontSize: '1.1rem',
            fontStyle: 'italic',
            color: '#F8FAFC',
            lineHeight: 1.6,
            margin: 0
          }}>
            "When I saw my classmate in a wheelchair forced to turn back because a dropped scooter blocked an ADA ramp, I realized our problem isn't careless students—it's that campus infrastructure stops guiding riders right when their trip ends. We don't have to choose between fast transit and accessible paths. We can solve this together with simple, empathetic design."
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
            <div style={{
              width: '2.25rem',
              height: '2.25rem',
              borderRadius: '50%',
              backgroundColor: '#EAAA00',
              color: '#001E38',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '0.85rem'
            }}>
              GT
            </div>
            <div>
              <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem' }}>Georgia Tech Student Advocate</div>
              <div style={{ color: '#CBD5E1', fontSize: '0.8rem' }}>Campus Micromobility & Accessibility Lead</div>
            </div>
          </div>
        </div>

        {/* 3 Core Value Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          textAlign: 'left'
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.07)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '1rem',
            padding: '1.5rem'
          }}>
            <div style={{
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '0.75rem',
              backgroundColor: 'rgba(234, 170, 0, 0.15)',
              color: '#EAAA00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <Accessibility size={22} />
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Equal ADA Access</h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.925rem', lineHeight: 1.5, margin: 0 }}>
              Protecting ramps and building entrances so every student navigate campus with confidence and dignity.
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.07)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '1rem',
            padding: '1.5rem'
          }}>
            <div style={{
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '0.75rem',
              backgroundColor: 'rgba(234, 170, 0, 0.15)',
              color: '#EAAA00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <ShieldCheck size={22} />
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Pedestrian Safety</h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.925rem', lineHeight: 1.5, margin: 0 }}>
              Removing unexpected trip hazards along Georgia Tech's highest-volume pedestrian walkways.
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.07)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '1rem',
            padding: '1.5rem'
          }}>
            <div style={{
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '0.75rem',
              backgroundColor: 'rgba(234, 170, 0, 0.15)',
              color: '#EAAA00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <Users size={22} />
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Mutual Respect</h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.925rem', lineHeight: 1.5, margin: 0 }}>
              Supporting sustainable student transit options while honoring shared public space quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
