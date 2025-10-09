import React from 'react';

import {

  Box,

  Container,

  Typography,

  Button,

  useTheme,

} from '@mui/material';

import { Download, Email } from '@mui/icons-material';

import { motion } from 'framer-motion';



const HeroSection: React.FC = () => {

  const theme = useTheme();



  const handleContactClick = () => {

    const element = document.querySelector('#contact');

    if (element) {

      element.scrollIntoView({ behavior: 'smooth' });

    }

  };



  const handleResumeClick = () => {

    // In a real application, this would open/download the actual resume PDF

    window.open('/resume.pdf', '_blank');

  };



  return (

    <Box

      id="home"

      sx={{

        minHeight: '100vh',

        display: 'flex',

        alignItems: 'center',

        background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.secondary.main}05 100%)`,

        position: 'relative',

        overflow: 'hidden',

      }}

    >

      <Container maxWidth="lg">

        <Box

          sx={{

            display: 'flex',

            flexDirection: { xs: 'column', md: 'row' },

            alignItems: 'center',

            gap: 4,

            py: 8,

          }}

        >

          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>

            <motion.div

              initial={{ opacity: 0, y: 50 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8, delay: 0.2 }}

            >

              <Typography

                variant="body1"

                sx={{

                  color: 'primary.main',

                  fontWeight: 600,

                  mb: 2,

                  fontSize: '1.1rem',

                }}

              >

                Hello, I'm

              </Typography>

            </motion.div>



            <motion.div

              initial={{ opacity: 0, y: 50 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8, delay: 0.4 }}

            >

              <Typography

                variant="h1"

                sx={{

                  background: theme.custom.gradients.primary,

                  backgroundClip: 'text',

                  WebkitBackgroundClip: 'text',

                  WebkitTextFillColor: 'transparent',

                  mb: 2,

                  fontSize: { xs: '2.5rem', md: '3.5rem' },

                }}

              >

                Ankit Singh

              </Typography>

            </motion.div>



            <motion.div

              initial={{ opacity: 0, y: 50 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8, delay: 0.6 }}

            >

              <Typography

                variant="h4"

                sx={{

                  color: 'text.secondary',

                  mb: 3,

                  fontWeight: 500,

                  fontSize: { xs: '1.2rem', md: '1.5rem' },

                }}

              >

                Full Stack Developer & UI/UX Designer

              </Typography>

            </motion.div>



            <motion.div

              initial={{ opacity: 0, y: 50 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8, delay: 0.8 }}

            >

              <Typography

                variant="body1"

                sx={{

                  color: 'text.secondary',

                  mb: 4,

                  maxWidth: '500px',

                  mx: { xs: 'auto', md: 0 },

                }}

              >

                Passionate about creating beautiful, functional, and user-centered

                digital experiences. I specialize in modern web technologies and

                love bringing ideas to life through code.

              </Typography>

            </motion.div>



            <motion.div

              initial={{ opacity: 0, y: 50 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8, delay: 1.0 }}

            >

              <Box

                sx={{

                  display: 'flex',

                  gap: 2,

                  flexDirection: { xs: 'column', sm: 'row' },

                  alignItems: 'center',

                  justifyContent: { xs: 'center', md: 'flex-start' },

                }}

              >

                <Button

                  variant="contained"

                  size="large"

                  startIcon={<Email />}

                  onClick={handleContactClick}

                  sx={{

                    background: theme.custom.gradients.primary,

                    '&:hover': {

                      transform: 'translateY(-2px)',

                      boxShadow: theme.shadows[8],

                    },

                    transition: 'all 0.3s ease',

                    minWidth: { xs: '200px', sm: 'auto' },

                  }}

                >

                  Get In Touch

                </Button>

                <Button

                  variant="outlined"

                  size="large"

                  startIcon={<Download />}

                  onClick={handleResumeClick}

                  sx={{

                    borderColor: 'primary.main',

                    color: 'primary.main',

                    '&:hover': {

                      transform: 'translateY(-2px)',

                      backgroundColor: 'primary.main',

                      color: 'white',

                    },

                    transition: 'all 0.3s ease',

                    minWidth: { xs: '200px', sm: 'auto' },

                  }}

                >

                  Download Resume

                </Button>

              </Box>

            </motion.div>

          </Box>



          <motion.div

            initial={{ opacity: 0, scale: 0.8 }}

            animate={{ opacity: 1, scale: 1 }}

            transition={{ duration: 0.8, delay: 0.4 }}

            style={{ flex: 1, display: 'flex', justifyContent: 'center' }}

          >

            <Box

              sx={{

                width: { xs: 250, md: 350 },

                height: { xs: 250, md: 350 },

                borderRadius: '50%',

                background: theme.custom.gradients.primary,

                display: 'flex',

                alignItems: 'center',

                justifyContent: 'center',

                position: 'relative',

                '&::before': {

                  content: '""',

                  position: 'absolute',

                  width: '100%',

                  height: '100%',

                  borderRadius: '50%',

                  background: theme.custom.gradients.secondary,

                  opacity: 0.1,

                  animation: 'pulse 3s ease-in-out infinite',

                },

                '@keyframes pulse': {

                  '0%, 100%': {

                    transform: 'scale(1)',

                  },

                  '50%': {

                    transform: 'scale(1.05)',

                  },

                },

              }}

            >

              <Box

                component="img"

                src="/ankit.jpg"

                alt="Ankit Singh"

                sx={{

                  width: '90%',

                  height: '90%',

                  borderRadius: '50%',

                  objectFit: 'cover',

                  border: '4px solid white',

                }}

              />

            </Box>

          </motion.div>

        </Box>

      </Container>

    </Box>

  );

};



export default HeroSection;