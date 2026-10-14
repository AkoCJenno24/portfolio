import React, { useMemo } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useScrollHeader } from './hooks/useScrollHeader';
import { SkipLink } from './components/layout/SkipLink';
import { Header } from './components/layout/Header';
import { BackToTop } from './components/layout/BackToTop';
import { HeroSection } from './components/sections/HeroSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import {
  profileData,
  navigationData,
  skillGroupsData,
  projectsData,
  aboutData,
  faqsData,
  contactData,
} from './data/portfolioData';

const AppContent: React.FC = () => {
  const sectionIds = useMemo(
    () => navigationData.map((item) => item.id),
    []
  );

  const activeId = useScrollSpy(sectionIds);
  const { isScrolled, showBackToTop, headerRef } = useScrollHeader();

  return (
    <>
      <SkipLink targetId="home" label="Skip to content" />

      <Header
        headerRef={headerRef}
        items={navigationData}
        activeId={activeId}
        isScrolled={isScrolled}
      />

      <main className="container">
        <HeroSection profile={profileData} />
        <SkillsSection skillGroups={skillGroupsData} />
        <ProjectsSection projects={projectsData} />
        <AboutSection about={aboutData} faqs={faqsData} />
        <ContactSection contact={contactData} />
      </main>

      <BackToTop visible={showBackToTop} />
    </>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;

