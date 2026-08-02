import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroScenario } from './components/HeroScenario';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { PilotPlanSection } from './components/PilotPlanSection';
import { PledgeForm } from './components/PledgeForm';
import { SourcesFooter } from './components/SourcesFooter';

export const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <HeroScenario />
        <ProblemSection />
        <SolutionSection />
        <PilotPlanSection />
        <PledgeForm />
      </main>
      <SourcesFooter />
    </div>
  );
};

export default App;
