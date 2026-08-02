import React, { useState } from 'react';
import { PILOT_PHASES, TARGET_OUTCOMES, BUDGET_ITEMS } from '../data/campaignData';
import { Calendar, TrendingDown, Ruler, ParkingSquare, Compass, DollarSign, Award, CheckCircle2, ArrowRight, Info, PieChart } from 'lucide-react';

export const PilotPlanSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'impact' | 'budget'>('roadmap');
  const [activePhase, setActivePhase] = useState(0);

  const totalBudget = BUDGET_ITEMS.reduce((sum, item) => sum + item.amount, 0);

  const getImpactIcon = (id: string) => {
    switch (id) {
      case 'reduction': return <TrendingDown size={24} />;
      case 'clearance': return <Ruler size={24} />;
      case 'rack-capacity': return <ParkingSquare size={24} />;
      default: return <Compass size={24} />;
    }
  };

  return (
    <section id="pilot" className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 2.5rem auto', textAlign: 'center' }}>
          <div className="badge badge-navy" style={{ marginBottom: '0.75rem' }}>
            <Calendar size={14} />
            <span>PILOT OPERATIONS, METRICS & BUDGET</span>
          </div>

          <h2 style={{ color: '#003057', marginBottom: '0.75rem' }}>
            The 1-Semester Implementation Plan.
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.5 }}>
            A structured 12-week roadmap, quantifiable impact targets, and a transparent $5,000 budget allocation.
          </p>

          {/* Segmented Controller Tabs */}
          <div style={{
            display: 'inline-flex',
            backgroundColor: '#E2E8F0',
            padding: '0.35rem',
            borderRadius: '0.85rem',
            marginTop: '1.5rem',
            gap: '0.35rem',
            maxWidth: '100%',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => setActiveTab('roadmap')}
              style={{
                backgroundColor: activeTab === 'roadmap' ? '#003057' : 'transparent',
                color: activeTab === 'roadmap' ? '#FFFFFF' : '#475569',
                border: 'none',
                padding: '0.6rem 1.25rem',
                borderRadius: '0.6rem',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Calendar size={16} />
              <span>12-Week Roadmap</span>
            </button>

            <button
              onClick={() => setActiveTab('impact')}
              style={{
                backgroundColor: activeTab === 'impact' ? '#003057' : 'transparent',
                color: activeTab === 'impact' ? '#FFFFFF' : '#475569',
                border: 'none',
                padding: '0.6rem 1.25rem',
                borderRadius: '0.6rem',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Award size={16} />
              <span>Target Outcomes</span>
            </button>

            <button
              onClick={() => setActiveTab('budget')}
              style={{
                backgroundColor: activeTab === 'budget' ? '#003057' : 'transparent',
                color: activeTab === 'budget' ? '#FFFFFF' : '#475569',
                border: 'none',
                padding: '0.6rem 1.25rem',
                borderRadius: '0.6rem',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <DollarSign size={16} />
              <span>$5,000 Budget</span>
            </button>
          </div>
        </div>

        {/* Tab 1: 12-Week Roadmap */}
        {activeTab === 'roadmap' && (
          <div className="animate-fade-in">
            {/* Phase Tabs Selector */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
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
                      padding: '1.25rem',
                      borderRadius: '0.85rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      boxShadow: isSelected ? '0 8px 20px rgba(0, 48, 87, 0.12)' : '0 2px 4px rgba(0,0,0,0.03)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isSelected ? '#EAAA00' : '#B45309' }}>
                        {p.weeks}
                      </span>
                      <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>Phase 0{p.phase}</span>
                    </div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1.05rem' }}>
                      {p.title.split(': ')[1]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Phase Card */}
            {(() => {
              const current = PILOT_PHASES[activePhase];
              return (
                <div className="glass-card" style={{ padding: '2rem', borderRadius: '1.25rem', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#B45309', textTransform: 'uppercase' }}>{current.weeks}</div>
                      <h3 style={{ color: '#003057', fontSize: '1.4rem', marginTop: '0.2rem' }}>{current.title}</h3>
                    </div>
                    <div style={{ backgroundColor: 'rgba(0, 48, 87, 0.06)', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#003057', fontWeight: 600 }}>
                      {current.highlight}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                    {current.tasks.map((task, idx) => (
                      <div key={idx} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', padding: '1rem', borderRadius: '0.65rem', display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: '#334155' }}>
                        <CheckCircle2 size={18} style={{ color: '#003057', marginTop: '0.1rem', flexShrink: 0 }} />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Tab 2: Target Outcomes */}
        {activeTab === 'impact' && (
          <div className="animate-fade-in">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
              {TARGET_OUTCOMES.map((item) => (
                <div key={item.id} className="glass-card" style={{ padding: '1.75rem', borderRadius: '1rem', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', backgroundColor: '#003057', color: '#EAAA00', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    {getImpactIcon(item.id)}
                  </div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 800, color: '#003057', lineHeight: 1 }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#003057', marginTop: '0.35rem', marginBottom: '0.2rem' }}>
                    {item.label}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#475569', margin: 0, lineHeight: 1.4 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: 'rgba(0, 48, 87, 0.05)', border: '1px solid rgba(0, 48, 87, 0.15)', padding: '0.75rem 1.25rem', borderRadius: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#003057' }}>
              <Info size={16} style={{ color: '#EAAA00', flexShrink: 0 }} />
              <span>Note: These metrics are target performance benchmarks for the proposed 1-semester pilot project.</span>
            </div>
          </div>
        )}

        {/* Tab 3: $5,000 Budget */}
        {activeTab === 'budget' && (
          <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Budget Bar & List */}
            <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#003057' }}>Funding Distribution</h3>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>5 Category Allocations</div>
                </div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.8rem', fontWeight: 800, color: '#003057' }}>
                  ${totalBudget.toLocaleString()}
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ height: '1rem', borderRadius: '9999px', backgroundColor: '#E2E8F0', display: 'flex', overflow: 'hidden', marginBottom: '1.25rem' }}>
                {BUDGET_ITEMS.map((item, idx) => {
                  const colors = ['#003057', '#EAAA00', '#0284C7', '#10B981', '#64748B'];
                  return (
                    <div key={item.id} style={{ width: `${item.percentage}%`, backgroundColor: colors[idx % colors.length] }} title={`${item.category}: $${item.amount}`} />
                  );
                })}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {BUDGET_ITEMS.map((item, idx) => {
                  const colors = ['#003057', '#EAAA00', '#0284C7', '#10B981', '#64748B'];
                  return (
                    <div key={item.id} style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#003057', fontWeight: 700 }}>
                          <div style={{ width: '0.65rem', height: '0.65rem', borderRadius: '50%', backgroundColor: colors[idx % colors.length] }} />
                          <span>{item.category}</span>
                        </div>
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: '#003057', fontSize: '0.95rem' }}>
                          ${item.amount.toLocaleString()} ({item.percentage}%)
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ROI Efficiency */}
            <div className="navy-card" style={{ padding: '1.75rem', borderRadius: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
                  <PieChart size={14} />
                  <span>HIGH VALUE ROI</span>
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '0.75rem' }}>Why a $5k Pilot Works</h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.925rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  Traditional concrete installations cost tens of thousands. This pilot uses modular, durable wheel stops and pavement striping that install rapidly without permanent surface alterations.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} style={{ color: '#EAAA00' }} />
                    <span>Immediate resolution of ADA walkway barriers</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} style={{ color: '#EAAA00' }} />
                    <span>Reusable materials if corral boundaries adjust</span>
                  </div>
                </div>
              </div>

              <a href="#action" className="btn btn-primary" style={{ marginTop: '1.5rem', textDecoration: 'none' }}>
                Support the $5k Request
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
