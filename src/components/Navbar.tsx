import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Box,
  useTheme, useMediaQuery, Drawer, List, ListItem, Button,
} from '@mui/material';
import { LightMode, DarkMode, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme as useCustomTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'Home',       href: '#home' },
  { name: 'About',      href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Contact',    href: '#contact' },
];

const Navbar: React.FC = () => {
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useCustomTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 260, height: '100%', bgcolor: isDarkMode ? '#0d1117' : '#ffffff', pt: 2 }}>
      <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', px:2, mb:2 }}>
        <Typography sx={{ fontWeight:800, fontSize:'1.1rem', color: isDarkMode ? '#fff' : '#111' }}>
          Ankit <Box component="span" sx={{ color:'#b06ab3' }}>Singh</Box>
        </Typography>
        <IconButton onClick={() => setMobileOpen(false)}>
          <CloseIcon sx={{ color: isDarkMode ? '#fff' : '#111' }} />
        </IconButton>
      </Box>
      <List>
        {navItems.map(item => {
          const isActive = activeSection === item.href.replace('#', '');
          return (
            <ListItem key={item.name} disablePadding>
              <Button fullWidth onClick={() => handleNavClick(item.href)} sx={{
                justifyContent:'flex-start', px:3, py:1.5,
                color: isActive ? '#b06ab3' : isDarkMode ? 'rgba(255,255,255,0.7)' : '#333',
                fontWeight: isActive ? 700 : 500,
                borderLeft: isActive ? '3px solid #b06ab3' : '3px solid transparent',
                borderRadius: 0,
                '&:hover':{ bgcolor:'rgba(176,106,179,0.08)', color:'#b06ab3' },
              }}>
                {item.name}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{
        bgcolor: scrolled
          ? isDarkMode ? 'rgba(10,10,26,0.88)' : 'rgba(255,255,255,0.88)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled
          ? isDarkMode ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.07)'
          : 'none',
        transition: 'background 0.3s, backdrop-filter 0.3s, border-bottom 0.3s',
      }}>
        <Toolbar sx={{
          maxWidth: '1200px', width: '100%', mx: 'auto',
          px: { xs: 2, md: 4 },
          minHeight: { xs: '60px', md: '64px' },
        }}>

          {/* Name */}
          <Typography variant="h6" onClick={() => handleNavClick('#home')} sx={{
            flexGrow: 1, fontWeight: 800,
            fontSize: { xs:'1.05rem', md:'1.2rem' },
            cursor: 'pointer',
            color: isDarkMode ? '#ffffff' : '#111111',
            letterSpacing: '-0.3px',
          }}>
            Ankit{' '}
            <Box component="span" sx={{ color: '#b06ab3' }}>Singh</Box>
          </Typography>

          {/* Desktop pill nav */}
          {!isMobile && (
            <Box sx={{
              display:'flex', gap:0.5,
              bgcolor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
              border: isDarkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
              borderRadius: '50px', px:1, py:0.5,
            }}>
              {navItems.map(item => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <Button key={item.name} onClick={() => handleNavClick(item.href)} sx={{
                    borderRadius:'50px', px:2, py:0.8,
                    fontSize:'0.875rem', fontWeight: isActive ? 700 : 500,
                    textTransform:'none', minWidth:'unset',
                    color: isActive ? '#ffffff' : isDarkMode ? 'rgba(255,255,255,0.62)' : 'rgba(0,0,0,0.58)',
                    background: isActive ? 'linear-gradient(90deg,#4568dc,#b06ab3)' : 'transparent',
                    transition:'all 0.2s ease',
                    '&:hover':{
                      background: isActive ? 'linear-gradient(90deg,#4568dc,#b06ab3)' : isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                      color: isActive ? '#fff' : isDarkMode ? '#fff' : '#111',
                    },
                  }}>
                    {item.name}
                  </Button>
                );
              })}
            </Box>
          )}

          {/* Theme toggle */}
          <AnimatePresence mode="wait">
            <motion.div key={isDarkMode ? 'dark' : 'light'}
              initial={{ rotate:-90, opacity:0 }} animate={{ rotate:0, opacity:1 }}
              exit={{ rotate:90, opacity:0 }} transition={{ duration:0.25 }}>
              <IconButton onClick={toggleTheme} sx={{
                ml: 1.5, width:40, height:40, borderRadius:'50%',
                bgcolor: isDarkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)',
                border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                color: isDarkMode ? '#ffffff' : '#333333',
                transition:'all 0.2s',
                '&:hover':{ bgcolor: isDarkMode ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)' },
              }}>
                {isDarkMode ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
              </IconButton>
            </motion.div>
          </AnimatePresence>

          {/* Mobile hamburger */}
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)}
              sx={{ ml:1, color: isDarkMode ? '#fff' : '#111' }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted:true }}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;