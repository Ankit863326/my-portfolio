import React, { useRef, useEffect, useState } from 'react';
import {
  Box, Container, Typography, Stack, Button,
  useTheme, useMediaQuery,
} from '@mui/material';
import { motion, useInView } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import BoltIcon from '@mui/icons-material/Bolt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const styles = {
  global: `
    @keyframes spin {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes sheen {
      0%       { transform: translateX(-150%) skewX(-45deg); }
      50%,100% { transform: translateX(150%)  skewX(-45deg); }
    }
    @keyframes pulseGlow {
      0%   { box-shadow: 0 0 0 0   rgba(37,117,252,0.5); }
      70%  { box-shadow: 0 0 0 15px rgba(37,117,252,0);   }
      100% { box-shadow: 0 0 0 0   rgba(37,117,252,0);    }
    }
    @keyframes blink {
      0%,100% { opacity:1; }
      50%      { opacity:0; }
    }
    @keyframes availablePulse {
      0%   { box-shadow: 0 0 0 0   rgba(56,189,100,0.5); }
      70%  { box-shadow: 0 0 0 8px rgba(56,189,100,0);   }
      100% { box-shadow: 0 0 0 0   rgba(56,189,100,0);   }
    }
  `,
};

const useTypewriter = (words: string[], speed = 80, pause = 1800) => {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIndex % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && charIndex <= current.length) {
      t = setTimeout(() => { setDisplayed(current.slice(0, charIndex)); setCharIndex(c => c + 1); }, speed);
    } else if (!deleting && charIndex > current.length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex >= 0) {
      t = setTimeout(() => { setDisplayed(current.slice(0, charIndex)); setCharIndex(c => c - 1); }, speed / 2);
    } else { setDeleting(false); setWordIndex(w => w + 1); }
    return () => clearTimeout(t);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);
  return displayed;
};

const FloatingSquare = ({ size, top, left, right, bottom, delay }: any) => (
  <motion.div style={{ position:'absolute', top, left, right, bottom, zIndex:0 }}
    initial={{ opacity:0 }}
    animate={{ opacity:[0.08,0.28,0.08], y:[0,-50,0], rotate:[0,180,360] }}
    transition={{ duration:20, repeat:Infinity, ease:'linear', delay }}>
    <Box sx={{ width:size, height:size, border:'1px solid rgba(255,255,255,0.12)', bgcolor:'transparent', borderRadius:'4px' }} />
  </motion.div>
);

const FloatingIcon = ({ icon: Icon, top, left, right, bottom, delay }: any) => (
  <motion.div style={{ position:'absolute', top, left, right, bottom, zIndex:0, opacity:0.07 }}
    animate={{ y:[0,-20,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut', delay }}>
    <Box sx={{ p:2, borderRadius:'16px', bgcolor:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.05)' }}>
      <Icon sx={{ fontSize:'3rem', color:'white' }} />
    </Box>
  </motion.div>
);

const stats = [
  { value:'250+', label:'Problems Solved' },
  { value:'7.33', label:'CGPA' },
  { value:'3+',   label:'Projects Shipped' },
  { value:'2+',   label:'Years Coding' },
];

const roles = [
  '~/ Open Source Builder',
  '~/ Full-Stack Developer',
  '~/ Cloud Enthusiast',
  '~/ SDE Aspirant',
];

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once:true });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const typewriterText = useTypewriter(roles);

  const handleContactClick = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior:'smooth' });

  const handleResumeClick = () => {
    const a = document.createElement('a');
    a.href = '/Ankit.Resume.pdf'; a.download = 'Ankit.Resume.pdf';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };

  return (
    <Box id="home" ref={ref} sx={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(circle at center, #11112b 0%, #0a0a1a 100%)',
      /* ── KEY FIX: enough top padding so the profile image sits below the navbar ── */
      pt: { xs: '96px', md: '80px' },
      pb: { xs: 8, md: 6 },
    }}>
      <style>{styles.global}</style>

      {!isMobile && (
        <>
          <FloatingIcon icon={CodeIcon}     top="15%"    left="10%"   delay={0}   />
          <FloatingIcon icon={TerminalIcon} top="25%"    right="15%"  delay={1}   />
          <FloatingIcon icon={GitHubIcon}   bottom="15%" left="15%"   delay={0.5} />
          <FloatingIcon icon={BoltIcon}     bottom="30%" right="10%"  delay={1.5} />
          <FloatingSquare size={60}  top="10%"    right="40%"  delay={0} />
          <FloatingSquare size={40}  bottom="20%" right="5%"   delay={2} />
          <FloatingSquare size={80}  top="40%"    left="5%"    delay={5} />
          <FloatingSquare size={30}  bottom="40%" left="30%"   delay={1} />
          <FloatingSquare size={100} top="20%"    left="35%"   delay={8} />
          <FloatingSquare size={50}  bottom="10%" right="35%"  delay={3} />
        </>
      )}

      <Container maxWidth="lg" sx={{ position:'relative', zIndex:2 }}>
        <Stack alignItems="center" spacing={2.5} textAlign="center">

          {/* Profile image */}
          <motion.div initial={{ opacity:0, scale:0.8 }}
            animate={isInView ? { opacity:1, scale:1 } : {}}
            transition={{ duration:0.7 }}>
            <motion.div animate={{ y:[0,-15,0] }}
              transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}>
              <Box sx={{
                position:'relative',
                width:{ xs:148, md:172 }, height:{ xs:148, md:172 },
                borderRadius:'50%', display:'flex',
                alignItems:'center', justifyContent:'center',
              }}>
                <Box sx={{
                  position:'absolute', top:-4, left:-4, right:-4, bottom:-4,
                  borderRadius:'50%',
                  background:'conic-gradient(from 0deg,#ff0080,#7928ca,#00c6ff,#ff0080)',
                  animation:'spin 4s linear infinite',
                  boxShadow:'0 0 20px rgba(121,40,202,0.5)',
                }} />
                <Box sx={{ position:'absolute', top:2, left:2, right:2, bottom:2, borderRadius:'50%', bgcolor:'#11112b', zIndex:1 }} />
                <Box component="img" src="ankit.jpg" alt="Ankit Singh"
                  sx={{ width:'100%', height:'100%', borderRadius:'50%', objectFit:'cover', zIndex:2 }} />
              </Box>
            </motion.div>
          </motion.div>

          {/* HELLO I'M */}
          <motion.div initial={{ opacity:0, y:15 }} animate={isInView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.5, delay:0.2 }}>
            <Typography sx={{
              fontSize:{ xs:'0.7rem', md:'0.82rem' }, letterSpacing:'4px',
              color:'rgba(255,255,255,0.4)', textTransform:'uppercase', fontWeight:500,
            }}>Hello, I'm</Typography>
          </motion.div>

          {/* Name */}
          <motion.div initial={{ opacity:0, y:15 }} animate={isInView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.5, delay:0.3 }}>
            <Typography variant="h1" sx={{
              fontWeight:800, fontSize:{ xs:'2.8rem', md:'4.8rem' },
              lineHeight:1.1, mt:-0.5, color:'#ffffff',
              '& span':{ color:'#b06ab3' },
            }}>
              Ankit <span>Singh</span>
            </Typography>
          </motion.div>

          {/* Available badge */}
          <motion.div initial={{ opacity:0, scale:0.8 }} animate={isInView ? { opacity:1, scale:1 } : {}}
            transition={{ duration:0.5, delay:0.4 }}>
            <Box sx={{
              display:'inline-flex', alignItems:'center', gap:1,
              px:2.5, py:0.8, borderRadius:'20px',
              bgcolor:'rgba(56,189,100,0.08)', border:'1px solid rgba(56,189,100,0.3)',
              animation:'availablePulse 2.5s infinite',
            }}>
              <FiberManualRecordIcon sx={{ color:'#38bd64', fontSize:'0.65rem' }} />
              <Typography sx={{ color:'#38bd64', fontSize:'0.82rem', fontWeight:600 }}>
                Available for opportunities
              </Typography>
            </Box>
          </motion.div>

          {/* Typewriter */}
          <motion.div initial={{ opacity:0, y:10 }} animate={isInView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.5, delay:0.5 }}>
            <Typography sx={{
              fontSize:{ xs:'1rem', md:'1.5rem' }, color:'rgba(255,255,255,0.72)',
              fontFamily:'"Courier New",monospace', fontWeight:500,
              minHeight:{ xs:'1.8rem', md:'2.4rem' },
            }}>
              {typewriterText}
              <span style={{ animation:'blink 1s step-end infinite', color:'#4568dc' }}>|</span>
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div initial={{ opacity:0, y:10 }} animate={isInView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.5, delay:0.6 }}>
            <Typography sx={{
              color:'rgba(255,255,255,0.45)', maxWidth:'560px', mx:'auto',
              fontSize:{ xs:'0.88rem', md:'0.98rem' }, lineHeight:1.8,
            }}>
              B.Tech CSE @ PCU Pune · Building full-stack products and{' '}
              <Box component="span" sx={{ color:'#4568dc', fontWeight:600 }}>
                300+ competitive programming
              </Box>{' '}
              challenges solved.
            </Typography>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity:0, y:20 }} animate={isInView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.5, delay:0.7 }} style={{ width:'100%' }}>
            <Box sx={{ display:'flex', justifyContent:'center', flexWrap:'wrap', gap:1.5, mt:0.5 }}>
              {stats.map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity:0, y:20 }}
                  animate={isInView ? { opacity:1, y:0 } : {}}
                  transition={{ duration:0.4, delay:0.75 + i * 0.08 }}
                  whileHover={{ scale:1.06 }}>
                  <Box sx={{
                    px:{ xs:2.5, md:3 }, py:{ xs:1.5, md:2 },
                    borderRadius:'12px',
                    bgcolor:'rgba(255,255,255,0.04)',
                    border:'1px solid rgba(255,255,255,0.08)',
                    backdropFilter:'blur(10px)',
                    textAlign:'center', minWidth:{ xs:'90px', md:'112px' },
                    transition:'border-color 0.2s, background 0.2s',
                    '&:hover':{ bgcolor:'rgba(69,104,220,0.1)', borderColor:'rgba(69,104,220,0.4)' },
                  }}>
                    <Typography sx={{
                      fontSize:{ xs:'1.3rem', md:'1.65rem' }, fontWeight:800,
                      background:'linear-gradient(90deg,#4568dc,#b06ab3)',
                      backgroundClip:'text', WebkitBackgroundClip:'text',
                      WebkitTextFillColor:'transparent', lineHeight:1.2,
                    }}>{s.value}</Typography>
                    <Typography sx={{
                      fontSize:'0.67rem', color:'rgba(255,255,255,0.38)',
                      mt:0.5, fontWeight:500, letterSpacing:'0.3px',
                    }}>{s.label}</Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* Buttons */}
          <motion.div initial={{ opacity:0, y:20 }} animate={isInView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.5, delay:0.9 }}>
            <Stack direction={{ xs:'column', sm:'row' }} spacing={2.5}
              justifyContent="center" sx={{ mt:0.5 }}>
              <Button variant="outlined" startIcon={<DownloadIcon />} size="large"
                onClick={handleResumeClick}
                sx={{
                  position:'relative', borderColor:'rgba(255,255,255,0.22)', color:'white',
                  borderRadius:'50px', px:4, py:1.5, textTransform:'none',
                  fontSize:'0.95rem', fontWeight:600, bgcolor:'rgba(255,255,255,0.03)',
                  overflow:'hidden',
                  '&::after':{
                    content:'""', position:'absolute', top:0, left:0, width:'100%', height:'100%',
                    background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)',
                    transform:'translateX(-150%) skewX(-45deg)', animation:'sheen 3s infinite',
                  },
                  '&:hover':{ borderColor:'rgba(255,255,255,0.55)', bgcolor:'rgba(255,255,255,0.07)' },
                }}>
                Download Resume
              </Button>
              <Button variant="contained" startIcon={<EmailIcon />} size="large"
                onClick={handleContactClick}
                sx={{
                  background:'linear-gradient(90deg,#2575fc 0%,#6a11cb 100%)',
                  borderRadius:'50px', px:4, py:1.5, textTransform:'none',
                  fontSize:'0.95rem', fontWeight:600,
                  animation:'pulseGlow 2s infinite',
                  boxShadow:'0 0 20px rgba(37,117,252,0.3)',
                  '&:hover':{ background:'linear-gradient(90deg,#1a6aee 0%,#5a0ab8 100%)', boxShadow:'0 0 35px rgba(37,117,252,0.5)' },
                }}>
                Contact Me
              </Button>
            </Stack>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div initial={{ opacity:0 }} animate={isInView ? { opacity:1 } : {}}
            transition={{ duration:0.5, delay:1.1 }}>
            <Box sx={{ mt:2, display:'flex', flexDirection:'column', alignItems:'center', gap:1 }}>
              <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.5, repeat:Infinity, ease:'easeInOut' }}>
                <Box sx={{
                  width:'24px', height:'38px', borderRadius:'12px',
                  border:'2px solid rgba(255,255,255,0.16)',
                  display:'flex', justifyContent:'center', pt:'6px',
                }}>
                  <Box sx={{ width:'4px', height:'8px', borderRadius:'2px', bgcolor:'rgba(255,255,255,0.4)' }} />
                </Box>
              </motion.div>
              <Typography sx={{
                fontSize:'0.65rem', letterSpacing:'3px',
                color:'rgba(255,255,255,0.25)', textTransform:'uppercase',
              }}>Scroll</Typography>
            </Box>
          </motion.div>

        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;