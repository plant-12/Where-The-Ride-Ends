import React from 'react';
import { SOURCE_CITATIONS } from '../data/campaignData';
import { BookOpen, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const SourcesFooter: React.FC = () => {
  return (
    <footer id="sources" style={{
      backgroundColor: '#001E38',
      color: '#FFFFFF',
      paddingTop: '4rem',
      paddingBottom: '2.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        {/* Sources & Citations Header */}
        <div style={{ maxWidth: '800px', marginBottom: '2.5rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            <BookOpen size={14} />
            <span>SOURCES & PROPOSAL CITATIONS</span>
          </div>

          <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
            Research Foundations & Reference Material
          </h3>

          <p style={{ color: '#CBD5E1', fontSize: '0.975rem', lineHeight: 1.6 }}>
            The "Where the Ride Ends" campaign content is synthesized directly from GT campus mobility specifications, student proposal research, and academic micromobility planning literature.
          </p>
        </div>

        {/* Sources Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3.5rem'
        }}>
          {SOURCE_CITATIONS.map((src) => (
            <div
              key={src.id}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '0.75rem',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ fontSize: '0.75rem', color: '#EAAA00', fontWeight: 700, textTransform: 'uppercase' }}>
                    {src.authorOrOrg}
                  </span>
                  <span style={{
                    fontSize: '0.7rem',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '0.25rem',
                    backgroundColor: src.type === 'gt_fact' ? 'rgba(2, 132, 199, 0.2)' : 'rgba(234, 170, 0, 0.15)',
                    color: src.type === 'gt_fact' ? '#38BDF8' : '#FDE047',
                    fontWeight: 600
                  }}>
                    {src.type === 'gt_fact' ? 'GT Campus Fact' : src.type === 'proposal_spec' ? 'Student Proposal' : 'External Research'}
                  </span>
                </div>

                <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                  {src.title}
                </h4>

                <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5, margin: 0 }}>
                  {src.context}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', marginBottom: '2rem' }} />

        {/* Footer Bottom Bar & Disclaimer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          fontSize: '0.85rem',
          color: '#94A3B8'
        }}>
          <div>
            <strong style={{ color: '#FFFFFF' }}>Where the Ride Ends • Tech Green Dismount Zone Pilot Proposal</strong>
            <div style={{ marginTop: '0.25rem', fontSize: '0.8rem' }}>
              Designed for Georgia Tech student campaign awareness and SGA proposal review.
            </div>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '0.6rem 1rem',
            borderRadius: '0.5rem',
            fontSize: '0.775rem',
            maxWidth: '450px',
            lineHeight: 1.4
          }}>
            <ShieldCheck size={14} style={{ color: '#EAAA00', display: 'inline', marginRight: '0.35rem' }} />
            <strong>Student Project Disclaimer:</strong> This website is an independent student academic campaign proposal. It is not officially operated by Georgia Tech administration, Parking & Transportation Services, or Lime.
          </div>
        </div>
      </div>
    </footer>
  );
};
