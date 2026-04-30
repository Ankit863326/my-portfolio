import React, { useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion, useInView } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import BoltIcon from '@mui/icons-material/Bolt';

// --- CSS Styles & Animations ---
const styles = {
  global: `
    /* 1. Spin Animation for Profile Border */
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    /* 2. Shine Effect for 'Download Resume' */
    @keyframes sheen {
      0% { transform: translateX(-150%) skewX(-45deg); }
      50%, 100% { transform: translateX(150%) skewX(-45deg); }
    }

    /* 3. Pulse Glow for 'Contact Me' Border */
    @keyframes pulseGlow {
      0% { box-shadow: 0 0 0 0 rgba(37, 117, 252, 0.5); }
      70% { box-shadow: 0 0 0 15px rgba(37, 117, 252, 0); }
      100% { box-shadow: 0 0 0 0 rgba(37, 117, 252, 0); }
    }
  `
};

// --- COMPONENT: Floating Square Block ---
// Configured to be transparent with only a visible line
const FloatingSquare = ({ size, top, left, right, bottom, delay }: any) => (
  <motion.div
    style={{ position: 'absolute', top, left, right, bottom, zIndex: 0 }}
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.1, 0.4, 0.1], 
      y: [0, -60, 0],
      rotate: [0, 180, 360],
    }}
    transition={{ 
      duration: 20, 
      repeat: Infinity, 
      ease: 'linear', 
      delay: delay 
    }}
  >
    <Box
      sx={{
        width: size,
        height: size,
        border: '1px solid rgba(255, 255, 255, 0.15)', // Visible thin line
        bgcolor: 'transparent', // Fully transparent body
        borderRadius: '4px',
      }}
    />
  </motion.div>
);

// --- COMPONENT: Floating Background Icon ---
const FloatingIcon = ({ icon: Icon, top, left, right, bottom, delay }: any) => (
  <motion.div
    style={{ position: 'absolute', top, left, right, bottom, zIndex: 0, opacity: 0.1 }}
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    <Box
      sx={{
        p: 2,
        borderRadius: '16px',
        bgcolor: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(2px)',
      }}
    >
      <Icon sx={{ fontSize: '3rem', color: 'white' }} />
    </Box>
  </motion.div>
);

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    const link = document.createElement('a');
    link.href = '/Ankit.Resume.pdf'; // Ensure this file exists in your public folder
    link.download = 'Ankit.Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      id="home"
      ref={ref}
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at center, #11112b 0%, #0a0a1a 100%)',
        pt: { xs: 12, md: 0 },
        pb: { xs: 10, md: 0 },
      }}
    >
      <style>{styles.global}</style>

      {/* --- Background Floating Elements --- */}
      {!isMobile && (
        <>
          {/* 1. Floating Icons */}
          <FloatingIcon icon={CodeIcon} top="15%" left="10%" delay={0} />
          <FloatingIcon icon={TerminalIcon} top="25%" right="15%" delay={1} />
          <FloatingIcon icon={GitHubIcon} bottom="15%" left="15%" delay={0.5} />
          <FloatingIcon icon={BoltIcon} bottom="30%" right="10%" delay={1.5} />

          {/* 2. Floating Square Blocks (Transparent with Outline) */}
          <FloatingSquare size={60} top="10%" right="40%" delay={0} />
          <FloatingSquare size={40} bottom="20%" right="5%" delay={2} />
          <FloatingSquare size={80} top="40%" left="5%" delay={5} />
          <FloatingSquare size={30} bottom="40%" left="30%" delay={1} />
          <FloatingSquare size={100} top="20%" left="35%" delay={8} />
          <FloatingSquare size={50} bottom="10%" right="35%" delay={3} />
        </>
      )}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Stack alignItems="center" spacing={4} textAlign="center">
          
          {/* 1. Profile Image Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* FLOATING ANIMATION (Up and Down) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 150, md: 180 }, 
                  height: { xs: 150, md: 180 },
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* SPINNING Gradient Border */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -4, left: -4, right: -4, bottom: -4,
                    borderRadius: '50%',
                    background: 'conic-gradient(from 0deg, #ff0080, #7928ca, #00c6ff, #ff0080)',
                    animation: 'spin 4s linear infinite',
                    boxShadow: '0px 0px 20px rgba(121, 40, 202, 0.5)',
                  }}
                />

                {/* Inner Background Gap */}
                <Box
                   sx={{
                    position: 'absolute',
                    top: 2, left: 2, right: 2, bottom: 2,
                    borderRadius: '50%',
                    bgcolor: '#11112b',
                    zIndex: 1,
                   }}
                />

                {/* The Image */}
                <Box
                  component="img"
                  src="ankit.jpg" // Ensure this image exists in your public folder
                  alt="Ankit Singh"
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    zIndex: 2,
                    border: '3px solid transparent',
                  }}
                />
              </Box>
            </motion.div>
          </motion.div>

          {/* 2. Text Content */}
          <Box>
            {/* Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.8,
                  mb: 3,
                  borderRadius: '20px',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <BoltIcon sx={{ color: '#00c6ff', fontSize: '1.2rem' }} />
                <Typography sx={{ color: '#00c6ff', fontSize: '0.9rem', fontWeight: 600 }}>
                  Hello, I'm
                </Typography>
              </Box>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '4.5rem' },
                  mb: 2,
                  background: 'linear-gradient(90deg, #b06ab3 0%, #4568dc 100%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Ankit Singh
              </Typography>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#e0e0e0',
                  fontWeight: 400,
                  fontSize: { xs: '1rem', md: '1.4rem' },
                  mb: 4,
                  opacity: 0.9
                }}
              >
                Aspiring Software Engineer <span style={{ color: '#4568dc', margin: '0 8px' }}>|</span> Web Developer <span style={{ color: '#4568dc', margin: '0 8px' }}>|</span> Tech Enthusiast
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  maxWidth: '600px',
                  mx: 'auto',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  mb: 6,
                }}
              >
                Passionate about creating innovative solutions and building the future through code. 
                Let's turn ideas into reality together.
              </Typography>
            </motion.div>

            {/* 3. Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                justifyContent="center"
              >
                {/* Download Resume - SHINING LIGHT EFFECT */}
                <Button
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  size="large"
                  onClick={handleResumeClick}
                  sx={{
                    position: 'relative',
                    borderColor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '1rem',
                    bgcolor: 'rgba(255,255,255,0.02)',
                    overflow: 'hidden',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0))',
                      transform: 'translateX(-100%) rotate(45deg)',
                      animation: 'sheen 3s infinite',
                    },
                    '&:hover': {
                      borderColor: '#fff',
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  Download Resume
                </Button>

                {/* Contact Me - GLOWING PULSE EFFECT */}
                <Button
                  variant="contained"
                  startIcon={<EmailIcon />}
                  size="large"
                  onClick={handleContactClick}
                  sx={{
                    background: 'linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)',
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '1rem',
                    animation: 'pulseGlow 2s infinite',
                    boxShadow: '0 0 20px rgba(37, 117, 252, 0.3)',
                    '&:hover': {
                      boxShadow: '0 0 30px rgba(37, 117, 252, 0.5)',
                    }
                  }}
                >
                  Contact Me
                </Button>
              </Stack>
            </motion.div>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;