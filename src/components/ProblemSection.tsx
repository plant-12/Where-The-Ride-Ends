import React, { useState } from 'react';
import { PROBLEM_CARDS } from '../data/campaignData';
import { Coins, MapPinOff, Accessibility, AlertOctagon, HelpCircle, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>('meter-pressure');

  const getProblemIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coins': return <Coins size={28} />;
      case 'MapPinOff': return <MapPinOff size={28} />;
      case 'Accessibility': return <Accessibility size={28} />;
      default: return <AlertOctagon size={28} />;
    }
  };

  return (
    <section id="problem" className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '750px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <div className="badge badge-navy" style={{ marginBottom: '1rem' }}>
            <AlertOctagon size={14} />
            <span>UNDERSTANDING THE PROBLEM</span>
          </div>

          <h2 style={{ color: '#003057', marginBottom: '1rem' }}>
            A System That Tells Riders Where to Stop, But Not Where to Park.
          </h2>

          <p style={{ fontSize: '1.15rem', color: '#475569' }}>
            Improper parking is not a failure of student discipline—it is a predictable consequence of conflicting economic incentives and incomplete campus infrastructure.
          </p>
        </div>

        {/* Highlighted Persuasive Core Message Callout */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderLeft: '6px solid #EAAA00',
          borderRadius: '1rem',
          padding: '1.75rem 2rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
          marginBottom: '3rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            width: '3.25rem',
            height: '3.25rem',
            borderRadius: '50%',
            backgroundColor: 'rgba(234, 170, 0, 0.15)',
            color: '#B45309',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <HelpCircle size={24} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
              KEY PERSUASIVE INSIGHT
            </div>
            <blockquote style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1.2rem',
              fontWeight: 600,
              color: '#003057',
              lineHeight: 1.5,
              margin: 0
            }}>
              "Riders are not necessarily careless. They are responding rationally to infrastructure that tells them where to stop riding, but does not clearly show them where to park while the rental meter keeps ticking."
            </blockquote>
          </div>
        </div>

        {/* 3 Problem Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.75rem',
          marginBottom: '2.5rem'
        }}>
          {PROBLEM_CARDS.map((card) => {
            const isSelected = selectedCard === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                className="glass-card"
                style={{
                  padding: '2rem',
                  cursor: 'pointer',
                  border: isSelected ? '2px solid #EAAA00' : '1px solid #E2E8F0',
                  boxShadow: isSelected ? '0 10px 25px rgba(234, 170, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.05)',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                  transition: 'all 0.25s ease',
                  position: 'relative'
                }}
              >
                {/* Stat Badge */}
                {card.stat && (
                  <div style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    backgroundColor: card.id === 'ada-access' ? 'rgba(225, 29, 72, 0.1)' : 'rgba(0, 48, 87, 0.08)',
                    color: card.id === 'ada-access' ? '#E11D48' : '#003057',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '0.5rem',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: '0.9rem'
                  }}>
                    {card.stat}
                  </div>
                )}

                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '1rem',
                  backgroundColor: isSelected ? '#003057' : 'rgba(0, 48, 87, 0.06)',
                  color: isSelected ? '#EAAA00' : '#003057',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  transition: 'all 0.25s ease'
                }}>
                  {getProblemIcon(card.icon)}
                </div>

                <h3 style={{ fontSize: '1.3rem', color: '#003057', marginBottom: '0.75rem' }}>
                  {card.title}
                </h3>

                <p style={{ color: '#475569', fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {card.summary}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: isSelected ? '#B45309' : '#003057'
                }}>
                  <span>{isSelected ? 'Viewing Details' : 'Click to Read Analysis'}</span>
                  <ArrowRight size={14} style={{ transform: isSelected ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s ease' }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Problem Detail Showcase Container */}
        {selectedCard && (
          <div className="navy-card animate-fade-in" style={{ padding: '2rem', borderRadius: '1rem' }}>
            {(() => {
              const active = PROBLEM_CARDS.find(c => c.id === selectedCard);
              if (!active) return null;
              return (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span className="badge badge-gold">{active.statLabel || 'Root Cause Breakdown'}</span>
                  </div>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '1rem' }}>
                    {active.title} — Detailed Analysis
                  </h3>
                  <p style={{ color: '#E2E8F0', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 0 }}>
                    {active.detail}
                  </p>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
};
