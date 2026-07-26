import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroScenario } from './components/HeroScenario';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { PilotTimeline } from './components/PilotTimeline';
import { ImpactCards } from './components/ImpactCards';
import { BudgetViewer } from './components/BudgetViewer';
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
        <PilotTimeline />
        <ImpactCards />
        <BudgetViewer />
        <PledgeForm />
      </main>
      <SourcesFooter />
    </div>
  );
};

export default App;
