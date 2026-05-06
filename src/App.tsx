import React from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { lightTheme, darkTheme } from './theme/theme';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import Timeline from './components/ui/Timeline'; 
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StarField from './components/StarField';

const AppContent: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {/* ===== BACKGROUND EFFECTS (dot grid + floating stars) ===== */}
      <div className="bg-grid" />
      <StarField />
      {/* ===== MAIN CONTENT ===== */}
      <div style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <Timeline />
        <ContactSection />
        <Footer />
      </div>
    </MuiThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;