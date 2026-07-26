import React, { useState } from 'react';
import { BUDGET_ITEMS } from '../data/campaignData';
import { DollarSign, ShieldAlert, PieChart, CheckCircle2 } from 'lucide-react';

export const BudgetViewer: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const totalBudget = BUDGET_ITEMS.reduce((sum, item) => sum + item.amount, 0);

  return (
    <section id="budget" className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <div className="badge badge-navy" style={{ marginBottom: '1rem' }}>
            <DollarSign size={14} />
            <span>TRANSPARENT PILOT BUDGET</span>
          </div>

          <h2 style={{ color: '#003057', marginBottom: '1rem' }}>
            Requested Pilot Budget Allocation: $5,000
          </h2>

          <p style={{ fontSize: '1.15rem', color: '#475569' }}>
            A lean, highly cost-effective budget designed to deliver maximum accessibility and safety impact with minimal physical intervention.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Itemized Budget Breakdown Card */}
          <div className="glass-card" style={{ padding: '2.25rem', borderRadius: '1.25rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.75rem',
              borderBottom: '1px solid #E2E8F0',
              paddingBottom: '1rem'
            }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#003057' }}>Funding Distribution</h3>
                <div style={{ fontSize: '0.85rem', color: '#64748B' }}>5 Allocated Budget Categories</div>
              </div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '2rem',
                fontWeight: 800,
                color: '#003057'
              }}>
                ${totalBudget.toLocaleString()}
              </div>
            </div>

            {/* Visual Stacked Progress Bar */}
            <div style={{
              height: '1.25rem',
              borderRadius: '9999px',
              backgroundColor: '#E2E8F0',
              display: 'flex',
              overflow: 'hidden',
              marginBottom: '2rem'
            }}>
              {BUDGET_ITEMS.map((item, idx) => {
                const colors = ['#003057', '#EAAA00', '#0284C7', '#10B981', '#64748B'];
                return (
                  <div
                    key={item.id}
                    style={{
                      width: `${item.percentage}%`,
                      backgroundColor: colors[idx % colors.length],
                      transition: 'width 0.3s ease'
                    }}
                    title={`${item.category}: $${item.amount} (${item.percentage}%)`}
                  />
                );
              })}
            </div>

            {/* Itemized List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {BUDGET_ITEMS.map((item, idx) => {
                const colors = ['#003057', '#EAAA00', '#0284C7', '#10B981', '#64748B'];
                const isSelected = selectedId === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedId(isSelected ? null : item.id)}
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: '0.75rem',
                      backgroundColor: isSelected ? 'rgba(0, 48, 87, 0.06)' : '#FFFFFF',
                      border: isSelected ? '2px solid #003057' : '1px solid #E2E8F0',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.25rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <div style={{
                          width: '0.75rem',
                          height: '0.75rem',
                          borderRadius: '50%',
                          backgroundColor: colors[idx % colors.length]
                        }} />
                        <strong style={{ fontSize: '0.95rem', color: '#003057' }}>{item.category}</strong>
                      </div>
                      <div style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: '#003057'
                      }}>
                        ${item.amount.toLocaleString()}
                        <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 500, marginLeft: '0.35rem' }}>
                          ({item.percentage}%)
                        </span>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.85rem', color: '#475569', margin: 0, lineHeight: 1.4 }}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Budget Efficiency Callout & ROI Card */}
          <div className="navy-card" style={{ padding: '2.25rem', borderRadius: '1.25rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
              <PieChart size={14} />
              <span>HIGH VALUE RETURN ON INVESTMENT</span>
            </div>

            <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginBottom: '1rem' }}>
              Why a $5,000 Investment Works
            </h3>

            <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Traditional permanent concrete installations can cost tens of thousands of dollars. The 1-semester pilot relies on modular, durable wheel stops and high-impact pavement striping that can be installed rapidly without long-term surface alterations.
            </p>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.07)',
              borderRadius: '0.75rem',
              padding: '1.25rem',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              marginBottom: '1.5rem'
            }}>
              <div style={{ fontSize: '0.8rem', color: '#EAAA00', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Cost Efficiency Highlights
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#EAAA00' }} />
                  <span>Immediate resolution of ADA compliance hazards</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#EAAA00' }} />
                  <span>Low friction setup requiring minimal maintenance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#EAAA00' }} />
                  <span>Reusable materials if corral boundaries are adjusted</span>
                </div>
              </div>
            </div>

            <a href="#action" className="btn btn-primary" style={{ width: '100%' }}>
              Support the $5k Pilot Request
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
