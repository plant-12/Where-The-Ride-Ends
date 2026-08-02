import React, { useState } from 'react';
import { PledgeFormData } from '../types';
import { HeartHandshake, CheckCircle2, Share2, Copy, Send, AlertTriangle, Sparkles, MessageSquareHeart } from 'lucide-react';

export const PledgeForm: React.FC = () => {
  const [pledgeCount, setPledgeCount] = useState(248);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState<PledgeFormData>({
    name: '',
    email: '',
    role: 'student',
    transitMode: 'scooter_rental',
    comments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitted(true);
    setPledgeCount(prev => prev + 1);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="action" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            <HeartHandshake size={14} />
            <span>JOIN THE STUDENT MOVEMENT</span>
          </div>

          <h2 style={{ color: '#003057', marginBottom: '1rem' }}>
            Support the Tech Green Pilot Initiative.
          </h2>

          <p style={{ fontSize: '1.15rem', color: '#475569' }}>
            Join Georgia Tech students, faculty, and community members advocating for safer walkways, accessible ramps, and clear parking corrals.
          </p>

          {/* Prototype Counter Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            backgroundColor: '#003057',
            color: '#FFFFFF',
            padding: '0.6rem 1.5rem',
            borderRadius: '9999px',
            marginTop: '1rem',
            boxShadow: '0 4px 12px rgba(0, 48, 87, 0.2)'
          }}>
            <Sparkles size={18} style={{ color: '#EAAA00' }} />
            <span style={{ fontSize: '1rem', fontWeight: 600 }}>
              <strong style={{ color: '#EAAA00', fontSize: '1.15rem', marginRight: '0.25rem' }}>{pledgeCount}</strong> GT Community Prototype Supporters
            </span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Pledge Form Card */}
          <div className="navy-card" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', borderRadius: '1.5rem' }}>
            {/* Required Student Project Disclaimer Banner */}
            <div style={{
              backgroundColor: 'rgba(234, 170, 0, 0.15)',
              border: '1px solid rgba(234, 170, 0, 0.3)',
              borderRadius: '0.75rem',
              padding: '0.85rem 1rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.6rem'
            }}>
              <AlertTriangle size={18} style={{ color: '#EAAA00', flexShrink: 0, marginTop: '0.1rem' }} />
              <div style={{ fontSize: '0.825rem', color: '#CBD5E1', lineHeight: 1.4 }}>
                <strong style={{ color: '#EAAA00' }}>Student Proposal Prototype:</strong> Submissions record support for our student-led pilot proposal to present to Georgia Tech administration and SGA.
              </div>
            </div>

            {submitted ? (
              <div className="animate-fade-in" style={{
                textAlign: 'center',
                padding: '2rem 1rem'
              }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.2)',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginBottom: '0.5rem' }}>
                  Thank You, {formData.name}!
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '1rem', marginBottom: '1.5rem' }}>
                  Your support and message mean so much to our student team. Together, we're building a safer, more accessible Georgia Tech.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline-light"
                  style={{ fontSize: '0.875rem' }}
                >
                  Submit Another Entry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#EAAA00', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  <MessageSquareHeart size={16} />
                  <span>Connect With Our Student Team</span>
                </div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '1rem' }}>
                  Add Your Voice to the Student Pilot Pledge
                </h3>

                <p style={{ color: '#CBD5E1', fontSize: '0.925rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  "We read every comment submitted here to help strengthen our proposal for SGA and GT Infrastructure. Tell us how scooter parking affects your daily campus routine."
                </p>

                {/* Name */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="pledge-name" style={{ display: 'block', color: '#E2E8F0', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Full Name *
                  </label>
                  <input
                    id="pledge-name"
                    type="text"
                    required
                    placeholder="e.g. George P. Burdell"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      color: '#FFFFFF',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                {/* Email */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="pledge-email" style={{ display: 'block', color: '#E2E8F0', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    GT Email Address *
                  </label>
                  <input
                    id="pledge-email"
                    type="email"
                    required
                    placeholder="student@gatech.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      color: '#FFFFFF',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                {/* Role */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label htmlFor="pledge-role" style={{ display: 'block', color: '#E2E8F0', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      Campus Role
                    </label>
                    <select
                      id="pledge-role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        backgroundColor: '#001E38',
                        color: '#FFFFFF',
                        fontSize: '0.95rem'
                      }}
                    >
                      <option value="student">Student</option>
                      <option value="faculty">Faculty</option>
                      <option value="staff">Staff</option>
                      <option value="sga">SGA Representative</option>
                      <option value="visitor">Visitor</option>
                    </select>
                  </div>

                  {/* Primary Transit */}
                  <div>
                    <label htmlFor="pledge-mode" style={{ display: 'block', color: '#E2E8F0', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      Primary Travel Mode
                    </label>
                    <select
                      id="pledge-mode"
                      value={formData.transitMode}
                      onChange={(e) => setFormData({ ...formData, transitMode: e.target.value as any })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        backgroundColor: '#001E38',
                        color: '#FFFFFF',
                        fontSize: '0.95rem'
                      }}
                    >
                      <option value="scooter_rental">Shared Scooter / E-Bike</option>
                      <option value="personal_bike">Personal Bike Owner</option>
                      <option value="personal_scooter">Personal Scooter Owner</option>
                      <option value="pedestrian">Pedestrian / Mobility Needs</option>
                    </select>
                  </div>
                </div>

                {/* Optional Comment */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="pledge-comments" style={{ display: 'block', color: '#E2E8F0', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Share your thoughts or GT campus experience (Optional)
                  </label>
                  <textarea
                    id="pledge-comments"
                    rows={3}
                    placeholder="e.g. As a student walking to Skiles every morning, clear ramps and painted corrals will make a huge difference."
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      color: '#FFFFFF',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                  <Send size={18} />
                  <span>Send Your Support & Note</span>
                </button>
              </form>
            )}
          </div>

          {/* Secondary CTAs & Share Campaign Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Secondary Action Buttons Card */}
            <div className="glass-card" style={{ padding: '2rem', borderRadius: '1.25rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#003057', marginBottom: '1rem' }}>
                Explore Campaign Resources
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="#solution" className="btn btn-outline" style={{ justifyContent: 'flex-start' }}>
                  <CheckCircle2 size={18} />
                  <span>Learn Where to Park & Riding Routes</span>
                </a>
                <a href="#pilot" className="btn btn-outline" style={{ justifyContent: 'flex-start' }}>
                  <CheckCircle2 size={18} />
                  <span>Review 12-Week Pilot Operations Roadmap</span>
                </a>
                <a href="#budget" className="btn btn-outline" style={{ justifyContent: 'flex-start' }}>
                  <CheckCircle2 size={18} />
                  <span>Inspect Itemized $5,000 Budget Request</span>
                </a>
              </div>
            </div>

            {/* Share Campaign Card */}
            <div className="glass-card" style={{ padding: '2rem', borderRadius: '1.25rem', backgroundColor: 'rgba(234, 170, 0, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <Share2 size={22} style={{ color: '#B45309' }} />
                <h3 style={{ fontSize: '1.3rem', color: '#003057', margin: 0 }}>
                  Spread the Word
                </h3>
              </div>

              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Help build momentum across Georgia Tech student orgs, SGA committees, and group chats.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={handleCopyLink}
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '0.65rem 1rem', fontSize: '0.875rem' }}
                >
                  <Copy size={16} />
                  <span>{copied ? 'Link Copied!' : 'Copy Campaign Link'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
