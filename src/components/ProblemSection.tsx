import React, { useState } from 'react';
import { PROBLEM_CARDS } from '../data/campaignData';
import { Coins, MapPinOff, Accessibility, AlertOctagon, HelpCircle, ArrowRight, Camera, MessageSquareHeart } from 'lucide-react';
import improperlyParkedImg from '../assets/improperly-parked-gt.jpg';
import scootersLinedUpImg from '../assets/scooters-lined-up-gt.jpg';

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
        <div style={{ maxWidth: '750px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
          <div className="badge badge-navy" style={{ marginBottom: '1rem' }}>
            <AlertOctagon size={14} />
            <span>UNDERSTANDING THE PROBLEM</span>
          </div>

          <h2 style={{ color: '#003057', marginBottom: '1rem' }}>
            A System That Tells Riders Where to Stop, But Not Where to Park.
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6 }}>
            Improper parking is not a failure of student discipline—it is a predictable consequence of conflicting economic incentives and incomplete campus infrastructure.
          </p>
        </div>

        {/* Highlighted Persuasive Core Message Callout */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderLeft: '6px solid #EAAA00',
          borderRadius: '1rem',
          padding: '1.5rem 2rem',
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
              fontSize: '1.15rem',
              fontWeight: 600,
              color: '#003057',
              lineHeight: 1.5,
              margin: 0
            }}>
              "Riders respond rationally to infrastructure that tells them where to stop riding, but does not clearly show them where to park while the rental meter keeps ticking."
            </blockquote>
          </div>
        </div>

        {/* Real GT Campus Photo Showcase Card: Both Real Bad Parking Examples */}
        <div className="glass-card" style={{
          marginBottom: '3rem',
          borderRadius: '1.25rem',
          overflow: 'hidden',
          border: '1px solid #CBD5E1',
          boxShadow: '0 8px 24px rgba(0, 48, 87, 0.08)'
        }}>
          <div style={{ padding: '1.5rem 2rem 1rem 2rem', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Camera size={18} style={{ color: '#EAAA00' }} />
              <h3 style={{ color: '#003057', fontSize: '1.3rem', margin: 0 }}>
                Real GT Campus Evidence: Current Unguided Parking Issues
              </h3>
            </div>
            <span className="badge badge-red">Two Real GT Campus Photo Examples</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1.5rem',
            padding: '1.5rem'
          }}>
            {/* Photo 1 Card */}
            <div style={{ border: '1px solid #E2E8F0', borderRadius: '0.85rem', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
              <div style={{ position: 'relative', height: '220px' }}>
                <img
                  src={improperlyParkedImg}
                  alt="An e-scooter fallen on its side against a stone wall and an e-bike parked across a wide brick walkway at Georgia Tech"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '1rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#E11D48', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  EXAMPLE 1: WALKWAY OBSTRUCTION
                </div>
                <figcaption style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.4, margin: 0 }}>
                  Fallen e-scooter and e-bike cluttering a main GT brick walkway near Skiles, forcing pedestrians into narrow detours.
                </figcaption>
              </div>
            </div>

            {/* Photo 2 Card */}
            <div style={{ border: '1px solid #E2E8F0', borderRadius: '0.85rem', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
              <div style={{ position: 'relative', height: '220px' }}>
                <img
                  src={scootersLinedUpImg}
                  alt="Four electric rental scooters parked in a row on a narrow concrete sidewalk alongside green landscaping at Georgia Tech"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '1rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#B45309', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  EXAMPLE 2: UNMARKED SIDEWALK EDGE ACCUMULATION
                </div>
                <figcaption style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.4, margin: 0 }}>
                  Shared scooters accumulating on narrow sidewalk paths without painted corral boundaries or rubber wheel stops.
                </figcaption>
              </div>
            </div>
          </div>
        </div>

        {/* Human Voice: Student Reflections Grid */}
        <div style={{
          marginBottom: '3rem',
          backgroundColor: '#FFFFFF',
          borderRadius: '1.25rem',
          padding: '1.75rem 2rem',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#B45309', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <MessageSquareHeart size={18} />
            <span>REAL GT STUDENT PERSPECTIVES</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Perspective 1 */}
            <div style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '0.85rem',
              padding: '1.25rem',
              borderLeft: '3px solid #003057'
            }}>
              <p style={{ fontSize: '0.925rem', color: '#334155', fontStyle: 'italic', margin: '0 0 0.75rem 0', lineHeight: 1.5 }}>
                "I use Lime scooters every day between classes. I want to park responsibly, but when there's no painted box and the rental meter keeps ticking $0.39/minute, you panic and leave it where others have."
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#003057' }}>
                — Daily GT Scooter Rider, Junior
              </div>
            </div>

            {/* Perspective 2 */}
            <div style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '0.85rem',
              padding: '1.25rem',
              borderLeft: '3px solid #E11D48'
            }}>
              <p style={{ fontSize: '0.925rem', color: '#334155', fontStyle: 'italic', margin: '0 0 0.75rem 0', lineHeight: 1.5 }}>
                "Clear ADA ramps aren't a luxury for me—they're how I get to lecture on time. Having a guaranteed 4-foot clear passage makes campus feel welcoming for everyone."
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#E11D48' }}>
                — GT Wheelchair User & Student Advocate
              </div>
            </div>
          </div>
        </div>

        {/* 3 Problem Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
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
                  padding: '1.75rem',
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
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '0.85rem',
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

                <h3 style={{ fontSize: '1.25rem', color: '#003057', marginBottom: '0.5rem' }}>
                  {card.title}
                </h3>

                <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  {card.summary}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
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
          <div className="navy-card animate-fade-in" style={{ padding: '1.75rem 2rem', borderRadius: '1rem' }}>
            {(() => {
              const active = PROBLEM_CARDS.find(c => c.id === selectedCard);
              if (!active) return null;
              return (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span className="badge badge-gold">{active.statLabel || 'Root Cause Breakdown'}</span>
                  </div>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                    {active.title} — Detailed Analysis
                  </h3>
                  <p style={{ color: '#E2E8F0', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: 0 }}>
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
